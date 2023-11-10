import {Connection, Types} from 'mongoose';
import { MongooseStripeContainerSingleton, connectToDb, disconnectFromDb, resolveConfigReader, resolveStripeClient, MongooseDaoFactory } from '@user-credits/stripe-mongoose';
import { ServiceProxy } from '../lib/server/rest/ServiceProxy';
import { AwilixContainer } from "awilix/lib/container";
import { IService, PaymentService } from '@user-credits/core';
import { IConfigReader } from '@user-credits/stripe-mongoose/dist/service';
import { asValue } from 'awilix';

export let ioc: AwilixContainer<object>;
export let iConfigReader: IConfigReader;
export let service: IService<Types.ObjectId>;
export let serviceProxy: ServiceProxy<Types.ObjectId>;

export function isInitialized(): boolean {
	return ioc != null;
}

export async function beforeStartup() {
	if(!isInitialized()) {
		ioc = await MongooseStripeContainerSingleton.getInstance();
		const connection: Connection = await connectToDb("mongodb://localhost:27001", "user-credits")
		// Connect to MongoDB
		const mongooseDaoFactory = new MongooseDaoFactory(connection);
		const paymentClient = await resolveStripeClient();
		iConfigReader = await resolveConfigReader();
		service = new PaymentService(mongooseDaoFactory, paymentClient, iConfigReader.currency() ?? "usd") as unknown as IService<Types.ObjectId>;
		serviceProxy = new ServiceProxy<Types.ObjectId>(service);
		ioc.register( {service: asValue(service)} );
		ioc.register( {serviceProxy: asValue(serviceProxy)} );
		console.log('Connected to MongoDB');
	}
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
