import { MongooseStripeContainerSingleton } from '@user-credits/stripe-mongoose';
import { AwilixContainer } from 'awilix/lib/container';
import { ObjectId } from '../../../../api/init/+server';
import type { IOrder } from '@user-credits/core';
import { asPojo } from '../../../../../lib/server/util';

export type PurchaseInfo = {orderId: string, order: IOrder, intentSk: string}

let ioc: AwilixContainer<object>;
let service: IService<ObjectId>;

export async function load({params}): Promise<PurchaseInfo> {
	const orderId = params["orderId"]
	const intentSk = params["intentSk"]

	if (!service) {
		ioc = await MongooseStripeContainerSingleton.getInstance() as unknown as AwilixContainer<object>;
		service = ioc.resolve('service');
	}
	const order = asPojo(await service.getDaoFactory().getOrderDao().findByIdStr(orderId));

	return {orderId, order, intentSk}
}