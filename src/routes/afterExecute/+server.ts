import { MongooseStripeContainerSingleton } from '@user-credits/stripe-mongoose';
import type { ObjectId } from '../init/+server';
import { AwilixContainer } from 'awilix/lib/container';
import { ServiceProxy } from '../../lib/server/rest/ServiceProxy';

let ioc: AwilixContainer<object>;
let serviceProxy: ServiceProxy<ObjectId>;

// you can try this with http://localhost:5173/loadOffers?envTags=["subscription","monthly"]
export const GET = async ({ url }) => {
	if (!serviceProxy) {
		ioc = await MongooseStripeContainerSingleton.getInstance() as unknown as AwilixContainer<object>;
		serviceProxy = ioc.resolve('serviceProxy');
	}
	return await serviceProxy.afterExecute({ url });
}