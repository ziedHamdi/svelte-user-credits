import {Connection, Types} from 'mongoose';
import { MongooseStripeContainerSingleton, connectToDb, disconnectFromDb, resolveConfigReader, resolveStripeClient, MongooseDaoFactory } from '@user-credits/stripe-mongoose';
import { ServiceProxy } from '../lib/server/rest/ServiceProxy';
import { AwilixContainer } from "awilix/lib/container";
import type { IService, PaymentService } from '@user-credits/core';
import type { IConfigReader } from '@user-credits/stripe-mongoose';
import { asValue } from 'awilix';

let ioc: AwilixContainer<object>;
let iConfigReader: IConfigReader;
let service: IService<Types.ObjectId>;
let serviceProxy: ServiceProxy<Types.ObjectId>;

let initializationPromise = null;
let isInitializing = false;

export function isInitialized(): boolean {
	return ioc != null;
}

async function init(): Promise<void> {
	console.log('Initializing container...');
	iConfigReader = await resolveConfigReader();
	ioc = await MongooseStripeContainerSingleton.getInstance() as unknown as AwilixContainer<object>;
	const connection: Connection = await connectToDb(iConfigReader.dbUrl, iConfigReader.dbName);
	// Connect to MongoDB
	const mongooseDaoFactory = new MongooseDaoFactory(connection);
	const paymentClient = await resolveStripeClient();
	service = new PaymentService(mongooseDaoFactory, paymentClient, iConfigReader.currency ?? 'usd') as unknown as IService<Types.ObjectId>;
	ioc.register({ service: asValue(service) });
	serviceProxy = new ServiceProxy<Types.ObjectId>(service);
	ioc.register({ serviceProxy: asValue(serviceProxy) });
	console.log('Connected to MongoDB');
}

export async function beforeStartup() {
	if (!isInitialized() && !isInitializing) {
		isInitializing = true;

		// Create a new promise only if it's not already in progress
		initializationPromise = init().then(() => {
			// Reset the initialization flag once initialization is complete
			isInitializing = false;
		}).catch((err)=>console.error(err));
	}

	// Wait for the initialization to complete, even if it's in progress
	await initializationPromise;
}

export async function onShutDown() {
	if(isInitialized()) {
		ioc = null;
		iConfigReader = null;
		service = null;
		serviceProxy = null;
		// Disconnect from MongoDB on server shutdown
		await disconnectFromDb();
		console.log('Disconnected from MongoDB');
	}
}
