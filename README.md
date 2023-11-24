# @user-credits/svelte-ui Library Readme

## Introduction

A demo of this library is [available at this link](https://user-credits.dev)

**[@user-credits/svelte-ui](https://www.npmjs.com/package/@user-credits/svelte-ui)** 
is an open-source library designed to streamline the management 
of user credits (pay-as-you-go models). It ships with user interface components for handling offers, 
order management, payment tracking, and credit consumption in web applications.

Whether you're developing a subscription-based service, a digital marketplace, 
or an e-commerce platform, svelte-ui is built on top of [@user-credits/core](https://www.npmjs.com/package/@user-credits/core) and
relies on its implementations' server side (like [@user-credits/stripe-mongoose](https://www.npmjs.com/package/@user-credits/stripe-mongoose)) 
to allow flexible and technology-agnostic solutions for your billing offer needs.
While the primary implementation is in Svelte, the library is adaptable to other
view technologies, making it a versatile choice for your projects.

**Sorry I don't know how reduce the button size, I like coffee but not to that extent.**
[![Buy Me A Coffee](https://cdn.buymeacoffee.com/buttons/v2/default-blue.png)](https://www.buymeacoffee.com/credits)

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [License](#license)

## Features

### Screens and Process Flows

user-credits-ui includes screens and process flows for handling offers, offer groups, order management, payment tracking, and credit consumption. The library is built with SvelteKit but may easily be translated to other view technologies like React, Vue or Angular.

### Offers and Offer Groups

- **Offers:** With [@user-credits/stripe-mongoose](https://www.npmjs.com/package/@user-credits/stripe-mongoose), you can create and manage offers, allowing you to define different pricing models, discounts, and customizations. It includes features like offer overriding, enabling tailored pricing for specific user groups or offer groups. You can check the unit tests to see that in action.

- **Offer Groups:** Examples of offer groups include monthly or yearly billing with advantageous or exclusive offers unlocks by purchasing a specific "offer" (offerGroup actually), such as "Insurance" or "Online Course."

### Order Management and Payment

- **Order and Payment:** Users can easily order and pay for offers through user-credits-ui. The library handles the entire order and payment process, allowing users to follow the progress and confirmation of their payments.

- **Subscription Management:** user-credits-ui supports different use cases of offers, including subscription-based offers, consulting offers, and token-based offers.

### Token-Based Offers

- **Token-Based Offers:** Token-based offers provide users with a certain number of credits. These credits can be consumed by related services or products. Users can track their credit consumption for each offer they've purchased.

- **Stats and Monitoring:** user-credits-ui offers detailed statistics and monitoring capabilities, allowing users to see the current state of each token-based offer, making it easy to keep track of their credit usage.

### Multi-Currency Support

user-credits-ui allows you to display orders and prices in multiple currencies, making it suitable for a global audience. While currency conversion is not built-in, user-credits-ui offers seamless integration to sync and manage international payments effortlessly.


## Usage

## Getting Started

### Prerequisits:
To be able to use this project, you'll have to provide a .env file with the following constants (values are just examples):
```
STRIPE_PUBLIC_KEY=pk_live_XYZ
STRIPE_PRIVATE_KEY=sk_live_XYZ
STRIPE_API_VERSION=2023-08-16
DB_URL=mongodb+srv://yourdb
DB_NAME=user-credits
CURRENCY=usd
```

The components are written using preline, a cool library that uses tailwindcss. To get the components to display the css correctly, install Preline [as described](https://medium.com/@FArcieri/install-praline-ui-on-sveltekit-9af72b988744) in this guide.

You'll also need to implement the interface: `IResourceResolver`, as described below.
### Installing
use your package manager to install
>`pnpm add @user-credits/base-ui @user-credits/svelte-ui`

>`yarn add @user-credits/base-ui @user-credits/svelte-ui`

>`npm install @user-credits/base-ui @user-credits/svelte-ui`


### Implementing `IResourceResolver`
The interfaces defined in @user-credits/core that are returned by all 
@user-credits implementations only specify the strict necessary fields
to be able to apply its logical operation. For example, the `IOffer` interface
only contains a `name` field that is actually a unique name that allows you to
identify an offer and be able to compete it with relevant resources like: description, 
icons, features it proposes, etc.... 

> Some fields are designed to be interpreted or used as is. For example, the `IOffer` 
> interface includes the fields `currency` and `price`. The resolver has the possibility 
> to use that data to handle converting the price to your website visitor's currency.

You'll need to create your own implementations of the `IResourceResolver` interface. 

For example, `IResourceResolver` converts an offer from an `IOffer` instance containing `name`,`currency` and `price` and returns `OfferDto` (found in the base-ui package) on which the components in this library rely to display information :

```typescript
export class OfferDto<K extends IMinimalId> extends EntityDto<K, IOffer<K>> {
	description: string; // offer short description
	advantages: Map<string, string>; // only the keys are used by the component, but you can hide details in the value
	callToAction: string; // the button label
	highlightingMessage: string; // if it's a special or recommended offer
	constructor(offer: IOffer<K>) {
		super(offer);
	}

	get name(): string {
		return this.delegate.name
	};

	get price(): number {
		return this.delegate.price
	}

	get higlighted(): boolean { // if true, displays as highlighted
		return this.delegate.weight > 0;
	}

}
```

As for any component in this lib, you may decide to extend `OfferDto` and build your own Svelte representation of an offer.

So `IResourceResolver` is kept simple: it receives any data instance from `@user-credits/core/db/model` and transforms it into one of the available `@user-credits/svelte-ui/lib/core/dto/EntityDto` child classes or to your child class dedicated to display it
```typescript
interface IResourceResolver {
	/**
	 * Returns an object to describe a domain as view ready values. For example it will convert and append the right currency to the price, find a language specific title, name, description and return a structured object with these values
	 *
	 * @param domain a key that describes what we expect (which entity to represent)
	 * @param data a raw data object
	 * @template <T> the actual object containing the data to represent, for example @IOfferProps
	 * @template <D> the type of possible objects (an enum like implementation)
	 * return <T> the type the user expects as an output
	 */
	buildDto<
		D extends IResourceDomain,
		K extends IMinimalId,
		M extends IBaseEntity<K>,
		>(
		domain: D,
		data: M,
	): EntityDto<K, M>;


	/**
	 * returns a setting or resolves an ioc instance
	 * @param domain the resource key 
	 */
	getSetting<D extends IResourceDomain>(domain: D): unknown;
}

```

For basic screens, you only need to fill 2 types of objects to represent:
```typescript
import { OfferDto, UserCreditsDto } from '@user-credits/base-ui';
```

 - offers: OfferDto (where you will map an IOffer.name with the other fields to display: description, icons, etc...)
 - credits: UserCreditsDto which already has advanced default behavior

In the demo, the Resolver is pretty forward:
```typescript
	buildDto<D extends IResourceDomain, K extends IMinimalId, M extends IBaseEntity<K>>(domain: D, data: M): EntityDto<K, M> {
		if (!data)
			throw new Error('Data cannot be null: ' + data +' (domain: '+ JSON.stringify(domain) +')');
		switch (domain.type) {
			case 'Offer':
				return resolveOffer<K, M>(data);
			case 'UserCredits':
				return resolveSubscription<K, M>(data, this.getSetting({ type: 'UserPreferences' }) as UserPreferences);

			default:
				throw new Error('Cannot resolve DOMAIN ' + domain.type + ' : ' + data);
		}
	}
```

### Displaying screens:

| Components | that display DTOs in `@user-credits/base-ui` |
|-----------|-----------|
| ![img.png](static/components.png)  |  Once your data is transformed into DTOs, you can use the provided components to represent it, or build/compose your own. |

## Filling data:
Inserting an offer is pretty direct as you see the code below. But to construct your offers wisely, check [this article](https://medium.com/@zhamdi). 

```typescript
import type { IOffer, IOfferDao, IDaoFactory } from "@user-credits/core";
import { ObjectId } from 'bson';

const offerToInsert: IOffer<ObjectId>

export async function prefillOffersForTests(daoFactory: IDaoFactory<ObjectId>) {
	const offerDao = daoFactory.getOfferDao();
	await offerDao.create(offerToInsert); // or await offerDao.build(offerToInsert).save();
}
```

If you're wondering from where to get the `daoFactory` instance, for now it is only implemented for MongoDB.

In the [demo code](https://github.com/ziedHamdi/svelte-user-credits/blob/master/src/hooks/init.ts) of this library, there's a hook in src/hooks.server.ts that calls the init function at server startup. The init function instantiates the Mongoose DaoFactory after 

```typescript
import { MongooseStripeContainerSingleton, connectToDb, disconnectFromDb, resolveConfigReader, resolveStripeClient, MongooseDaoFactory } from '@user-credits/stripe-mongoose';
import { ServiceProxy } from '../lib/server/rest/ServiceProxy';
import { AwilixContainer } from "awilix/lib/container";

async function init(): Promise<void> {
	console.log('Initializing container...');
	iConfigReader = await resolveConfigReader();
	ioc = await MongooseStripeContainerSingleton.getInstance() as unknown as AwilixContainer<object>;
	// Connect to MongoDB
	const connection: Connection = await connectToDb(iConfigReader.dbUrl, iConfigReader.dbName);
	const mongooseDaoFactory = new MongooseDaoFactory(connection);
	const paymentClient = await resolveStripeClient();
	service = new PaymentService(mongooseDaoFactory, paymentClient, iConfigReader.currency ?? 'usd') as unknown as IService<Types.ObjectId>;
	ioc.register({ service: asValue(service) });
	serviceProxy = new ServiceProxy<Types.ObjectId>(service);
	ioc.register({ serviceProxy: asValue(serviceProxy) });
	console.log('Connected to MongoDB');
}
```

Each step here can be configured. Let's dig a bit into the details:
 - `resolveConfigReader` is imported from '@user-credits/stripe-mongoose' as a simple .env config file reader. Your project might have another way to store configs. This is the place where you can override that: just implement the `IConfigReader` imported from the same project and pass it instead.
 - `MongooseStripeContainerSingleton` is, as it name suggests, a singleton that intiates mongoose and stripe. However, it relies on the default config reader. It is also an opinionated solution as it relies on the Awilix IOC container. If you need to implement your own `IConfigReader`, then you will need to create your own singleton. The only job it does is to create the instances and store them in the Awilix container.
 - `connectToDb` doesn't need to explain, then we can create the 'MongooseDaoFactory' with that connection. If your business has multiple connections to different databases, MongooseDaoFactory handles that, but you will have to check the code in `@user-credits/stripe-mongoose`
 - 'resolveStripeClient()' simply reads back from `MongooseStripeContainerSingleton` saved in the Awilix container
 - `new PaymentService(mongooseDaoFactory, paymentClient, 'usd' )` is the instance it is decided that we are using mongoose and stripe with the lib.
 - `ServiceProxy` is the shadow implementation of [IService](https://github.com/ziedHamdi/user-credits-core/blob/master/src/service/IService.ts) but adapted to web requests (getting request and answering with Response). We also inject it to the container to make it available to the entire app.

## Contributing

user-credits-ui is an open-source project, and we welcome contributions from the community. If you'd like to contribute, please follow the standard [contribution guidelines](https://docs.github.com/en/get-started/quickstart/contributing-to-projects).

## License

user-credits-ui is licensed under the MIT License. You can find the full license details in the [LICENSE](LICENSE) file.

We hope you find user-credits-ui useful for your project. If you have any questions or need assistance, please don't hesitate to reach out to us.

Happy coding with user-credits-ui! 🚀

---

[GitHub Repository](https://github.com/ziedHamdi/svelte-user-credits)

Some code will be moved to a [front-end agnostic library project](https://github.com/ziedHamdi/user-credits-ui)

[comment]: <> ([API Documentation]&#40;https://user-credits-ui-docs.com/api&#41;)

[comment]: <> ([User Guide]&#40;https://user-credits-ui-docs.com/guide&#41;)
