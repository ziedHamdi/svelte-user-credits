import { MongooseStripeContainerSingleton } from '../../../../../user-credits';
import { AwilixContainer } from 'awilix/lib/container';
import type { IOrder, IService, IUserCredits } from '../../../../../user-credits-core';
import type { ObjectId } from '../../init/+server';

export type AfterPurchaseInfo = {order: IOrder<string>, credits: IUserCredits<string>}

let ioc: AwilixContainer<object>;
let service: IService<ObjectId>;

function asPojo(obj) {
	return JSON.parse(JSON.stringify(obj));
}

export async function load({params}): Promise<AfterPurchaseInfo> {
	if (!service) {
		ioc = await MongooseStripeContainerSingleton.getInstance() as unknown as AwilixContainer<object>;
		service = ioc.resolve("service");
	}
	const orderId = params["orderId"];
	console.log(  "searching for order: ", orderId)
	const order = await service.getDaoFactory().getOrderDao().findByIdStr(orderId);
	const credits = await service.getDaoFactory().getUserCreditsDao().findOne({userId:order.userId});
	return {order: asPojo(order) as unknown as IOrder<string>, credits:asPojo(credits) as unknown as IUserCredits<string>}
}