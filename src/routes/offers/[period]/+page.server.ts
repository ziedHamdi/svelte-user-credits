import { MongooseStripeContainerSingleton } from '@user-credits/stripe-mongoose';
import { AwilixContainer } from 'awilix/lib/container';
import { ObjectId } from '../../init/+server';
import type { IService } from '@user-credits/core';

let ioc: AwilixContainer<object>;
let service: IService<ObjectId>;

export async function load({params}) {
	if (!service) {
		ioc = await MongooseStripeContainerSingleton.getInstance() as unknown as AwilixContainer<object>;
		service = ioc.resolve('service');
	}
	const period = params["period"];
	const offersRaw = await service.loadOffers(null, ["subscription", "standard", period]);
	const offers = offersRaw.map((item)=> JSON.parse( JSON.stringify(item) )).sort( (a, b) => a.price - b.price )
	return { offers, period };
}