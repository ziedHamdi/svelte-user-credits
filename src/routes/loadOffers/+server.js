import { MongooseStripeContainerSingleton } from '@user-credits/stripe-mongoose';

let ioc = MongooseStripeContainerSingleton.getInstance();
let serviceProxy = ioc.resolve('serviceProxy');

export const GET = async ({ url }) => {
	if (!serviceProxy) {
		ioc = await MongooseStripeContainerSingleton.getInstance();
		serviceProxy = ioc.resolve('serviceProxy');
	}
	return serviceProxy.loadUserCredits({ url });
}