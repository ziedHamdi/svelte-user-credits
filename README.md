# @user-credits/svelte-ui Library Readme

## Introduction

A demo of this library is [available at this link](https://user-credits.dev)

**svelte-ui** is an open-source library designed to streamline the management 
of user credits. It ships with user interface components for handling offers, 
order management, payment tracking, and credit consumption in web applications.

Whether you're developing a subscription-based service, a digital marketplace, 
or an e-commerce platform, svelte-ui is built on top of [@user-credits/core](https://www.npmjs.com/package/@user-credits/core) and
relies on its implementations' server side (like [@user-credits/stripe-mongoose](https://www.npmjs.com/package/@user-credits/stripe-mongoose)) 
to allow flexible and technology-agnostic solutions for your billing offer needs.
While the primary implementation is in Svelte, the library is adaptable to other
view technologies, making it a versatile choice for your projects.

**Sorry I'm trying to reduce the button size, I like coffee but not to that extent.**
[![Buy Me A Coffee](https://cdn.buymeacoffee.com/buttons/v2/default-blue.png)](https://www.buymeacoffee.com/credits)

[![Buy Me A Coffee](https://cdn.buymeacoffee.com/buttons/v2/default-blue.png){:height="40px" width="180px"}](https://www.buymeacoffee.com/credits)



## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [License](#license)

## Features

### Screens and Process Flows

user-credits-ui includes screens and process flows for handling offers, offer groups, order management, payment tracking, and credit consumption. The library's flexibility allows it to be used with various view technologies, such as React, Vue, or others, empowering you to build UIs according to your preferred technology.

### Offers and Offer Groups

- **Offers:** With user-credits-ui, you can create and manage offers, allowing you to define different pricing models, discounts, and customizations. It includes features like offer overriding, enabling tailored pricing for specific user groups or offer groups.

- **Offer Groups:** Examples of offer groups include monthly or yearly billing with sale prices for yearly billing or exclusive offers for users who subscribe to a specific offer group, such as "Insurance" or "Online Course."

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
To be able to run this project, you'll have to provide a .env file with the following constants:
```
STRIPE_PUBLIC_KEY=pk_live_XYZ
STRIPE_PRIVATE_KEY=sk_live_XYZ
STRIPE_API_VERSION=2023-08-16
DB_URL=mongodb+srv://yourdb
DB_NAME=user-credits
CURRENCY=usd
```

To start using user-credits-ui in your project, you'll need to implement and inject two critical interfaces: `IResourceResolver` and `IElementBuilder`, as described below.
### Installing
use your package manager to install
>`pnpm add @user-credits/svelte-ui`

>`yarn add @user-credits/svelte-ui`

>`npm install @user-credits/svelte-ui`


### Implementing `IResourceResolver`
The interfaces defined in @user-credits/core that are returned by all 
@user-credits implementations only specify the strict necessary fields
to be able to apply its logical operation. For example, the `IOffer` interface
only contains a `name` field that is actually a unique name that allows you to
recognize the offer and compete it with relevant related resources as description, 
icons, features it proposes, etc.... 

> Some fields are designed to be interpreted or used as is. For example, the `IOffer` 
> interface includes the fields `currency` and `price`. The resolver has the possibility 
> to use that data to handle converting the price to your website visitor's currency.

Therefore you'll need to create your own implementation of the `IResourceResolver` interface. 

For example, `IResourceResolver` converts an offer from an `IOffer` instance containing `name`,`currency` and `price` and returns OfferDto which is our view specifications of an offer like follows:

```typescript
export class OfferDto<K extends IMinimalId> extends EntityDto<K, IOffer<K>> {
	description: string;
	advantages: Map<string, string>;
	callToAction: string;
	highlightingMessage: string;
	constructor(offer: IOffer<K>) {
		super(offer);
	}

	get name(): string {
		return this.delegate.name
	};

	get price(): number {
		return this.delegate.price
	}

	get higlighted(): boolean {
		return this.delegate.weight > 0;
	}

}
```

You may decide to extend `OfferDto` and build your own Svelte representation of an offer.

So `IResourceResolver` is kept simple: it receives any data instance from `@user-credits/core/db/model` and transforms it into one of the available `@user-credits/svelte-ui/lib/core/dto/EntityDto` child classes or to your child class dedicated to display it
```typescript
export interface IResourceResolver {
    getObject<D extends IResourceDomain, K extends IMinimalId, M extends IBaseEntity<K>>(domain: D, data: M): EntityDto<K,M>;
}
```

### Displaying screens:
Once your data is transformed and ready for display, you can use the according 
component to represent it, or build/compose your own. 

A set of components is available under `lib/comp`

> A more advanced project still as a draft introduces an additional abstraction layer between your DTO and your view, allowing to build a common base from multiple view technologies
> The project is still under construction and called [user-credits-ui](https://github.com/ziedHamdi/user-credits-ui)


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
