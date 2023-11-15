import { MongooseStripeContainerSingleton } from '@user-credits/stripe-mongoose';
import { AwilixContainer } from 'awilix/lib/container';
import type { ObjectId } from '../../init/+server';
import type { IOffer, IService } from '@user-credits/core';

let ioc: AwilixContainer<object>;
let service: IService<ObjectId>;

function asPojosAndSorted(offersRaw: IOffer<ObjectId>[]): IOffer<ObjectId>[] {
	return offersRaw.map((item) => JSON.parse(JSON.stringify(item))).sort((a, b) => a.price - b.price);
}

export async function load({params, url}) {
	if (!service) {
		ioc = await MongooseStripeContainerSingleton.getInstance() as unknown as AwilixContainer<object>;
		service = ioc.resolve('service');
	}
	const period = params["period"];
	const offersRaw = await service.loadOffers(null, ["subscription", "standard", period]);
	const offers = asPojosAndSorted(offersRaw)
	const ebOffersRaw = await service.loadOffers(null, ["subscription", "EarlyBird", period]);
	const ebOffers = asPojosAndSorted(ebOffersRaw)
	return { offers, ebOffers, period, url: url.origin };
}