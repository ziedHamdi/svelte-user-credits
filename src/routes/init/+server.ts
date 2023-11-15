import { MongooseStripeContainerSingleton } from '@user-credits/stripe-mongoose';
import type { IService } from '@user-credits/core';
import { Types } from "mongoose";
import { prefillOffersForTests } from '../../example/data/step1_PrepareLoadOffers';
import { AwilixContainer } from 'awilix/lib/container';

export type ObjectId = Types.ObjectId;

let ioc: AwilixContainer<object>;
let service: IService<ObjectId>;

export const GET = async ({url}) => {
	if (!service) {
		ioc = await MongooseStripeContainerSingleton.getInstance() as unknown as AwilixContainer<object>;
		service = ioc.resolve('service');
	}
	const daoFactory = service.getDaoFactory();
	const currentOffers = await daoFactory.getOfferDao().loadOffers();
	const reset = url.searchParams.get('reset');
	if( reset === "true" ) {
		await daoFactory.getOfferDao().dropTable();
	} else if( currentOffers?.length > 0 ) {
		return new Response('Already filled, empty offers first');
	}

	await prefillOffersForTests(daoFactory);
	return new Response("OK");
}