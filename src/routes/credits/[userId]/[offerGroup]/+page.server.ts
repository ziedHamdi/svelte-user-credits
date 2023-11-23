import { MongooseStripeContainerSingleton } from '@user-credits/stripe-mongoose';
import { AwilixContainer } from 'awilix/lib/container';
import type { IService, IUserCredits } from '@user-credits/core';
import { ObjectId } from '../../../api/init/+server';

export type CreditsInfo = {credits: IUserCredits<string>}

let ioc: AwilixContainer<object>;
let service: IService<ObjectId>;

function asPojo(obj) {
	return JSON.parse(JSON.stringify(obj));
}

export async function load({params}): Promise<CreditsInfo> {
	if (!service) {
		ioc = await MongooseStripeContainerSingleton.getInstance() as unknown as AwilixContainer<object>;
		service = ioc.resolve("service");
	}
	const userId = params["userId"];
	const offerGroup = params["offerGroup"];
	const orderGroupConsumptionHistory = await service.getDaoFactory().getTokenTimetableDao().find({userId, offerGroup});
	const history = orderGroupConsumptionHistory.map( (item ) => asPojo(item))
	const credits = await service.getDaoFactory().getUserCreditsDao().findOne({userId});
	return {credits:asPojo(credits) as unknown as IUserCredits<string>, history} as CreditsInfo
}