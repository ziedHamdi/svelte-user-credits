import { MongooseStripeContainerSingleton } from '@user-credits/stripe-mongoose';

let ioc;
let serviceProxy;

export const GET = async ({ url }) => {
	if (!serviceProxy) {
		ioc = await MongooseStripeContainerSingleton.getInstance();
		serviceProxy = ioc.resolve('serviceProxy');
	}
	return serviceProxy.loadUserCredits({ url });
}