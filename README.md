# user-credits-ui Library Readme

## Introduction

user-credits-ui is an open-source library designed to streamline the creation of user interface components for handling offers, offer groups, order management, payment tracking, and credit consumption in web applications. Whether you're developing a subscription-based service, a digital marketplace, or an e-commerce platform, user-credits-ui offers flexible and technology-agnostic solutions for your user interface needs. While the primary implementation is in Svelte, the library is adaptable to other view technologies, making it a versatile choice for your projects.

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Customizing Data Presentation](#customizing-data-presentation)
- [Example Implementation](#example-implementation)
- [Contributing](#contributing)
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

To start using user-credits-ui in your project, follow the installation and usage instructions in the documentation. Additionally, you'll need to implement and inject two critical interfaces: `IResourceResolver` and `IElementBuilder`, as described below.

### Implementing `IResourceResolver`

In order to transform raw data into view specification objects, you'll need to create your own implementation of the `IResourceResolver` interface. This implementation should provide the logic for converting your data into the desired view specification objects.

For example, `IResourceResolver` may return view specifications like the following:

```typescript
import { IValuePresentation } from './IValuePresentation';
import { IListValuePresentation } from './IListValuePresentation';

export interface IOfferProps {
    name: IValuePresentation | null;
    price: IValuePresentation | null;
    description: IValuePresentation | null;
    users: IValuePresentation | null;
    planFeatures: IValuePresentation | null;
    support: IValuePresentation | null;
    signUpLink: IValuePresentation | null;
    callToAction: IValuePresentation | null;
    advantages: IListValuePresentation | null;
}
```

### Implementing `IElementBuilder`

The `IElementBuilder` interface is responsible for customizing the data presentation in your user interface components. It allows you to specify classes, UI components, and additional styling attributes for individual data fields, lists, and containers.

### Customization with IElementBuilder

user-credits-ui provides an optional and opinionated implementation of `IElementBuilder` to help you transform your raw data into concrete view representations. This implementation allows you to tailor the presentation of your data in great detail.

By default, the `IElementBuilder` implementation offers features such as:

- Applying classes to elements based on your data specifications.
- Adding nested components or content (by including a `value.__elem__` field, e.g., `value= {__elem__:'svg', d:'C10', other:'PropToInclude'}).
- Handling prefix and suffix elements to add components before or after your data.
- Resolving SVG icons and other components as specified in your data, making it easy to include dynamic elements in your view.

Here's a closer look at how this works:

#### Prefix and Suffix Elements

You can use `IValuePresentation` to specify elements that should be added before and after your data. This is particularly useful for adding custom icons, labels, or any other components to enhance the presentation of your data. The `IElementBuilder` implementation uses the method `resolveDecorator(prefixOrSuffix)` to resolve these abstract names to more concrete structures.

#### Resolving SVG Icons

The implementation includes a centralized method for resolving SVG icons, making it effortless to include SVG icons in your UI. By specifying `'blueCheck'` or other recognized formats, you can easily add icons to your data presentation. This feature is extensible, allowing you to override the default icon resolution to include custom icons or other components.

#### Handling Lists and Containers

When dealing with lists, user-credits-ui offers an opinionated approach for creating list elements with specific styling and classes. You can use `IListValuePresentation` to customize your list's container, header, and individual list items, ensuring a consistent and stylish presentation of your data.

#### Extensive View Customization

`IElementProperties` is a fundamental part of the opinionated `IElementBuilder` implementation. It provides an abstract representation of your view and allows you to add children components, specify classes, and manage prefix and suffix elements like icons, even if they are not explicitly specified in your `IValuePresentation`. This powerful feature gives you full control over how your data is presented and allows you to create rich, dynamic views that match your unique requirements.

#### The FRAGMENT Element

The FRAGMENT element type, denoted by `FRAGMENT`, allows you to include nested components and content within your view. It enables the creation of more complex, hierarchical structures, enhancing the presentation of your data.

#### Ready-to-Use Components

user-credits-ui offers ready-to-use components designed to interpret the output of the default `IElementBuilder` implementation. These components make it easy to integrate your view specifications into your web application, saving you time and effort in the development process.

Overall, the opinionated `IElementBuilder` implementation, along with `IElementProperties`, offers a robust toolkit for presenting your data in a highly detailed and flexible manner. While it's available for your convenience, you can also choose to implement your own `IElementBuilder` from scratch if you prefer a more custom approach. This gives you the freedom to create unique views according to your specific requirements.

### Injecting the Interfaces

Once you have implemented `IResourceResolver` and `IElementBuilder`, you need to inject them at startup to enable user-credits-ui to correctly use these implementations for data presentation.

With these interfaces correctly implemented and injected, you can harness the full potential of user-credits-ui and tailor the presentation of your data to your specific needs, regardless of the front-end technology you choose to use.

This addition explains the necessity of implementing the `IResourceResolver` and `IElementBuilder` interfaces and injecting them at startup to correctly use the library.



user-credits-ui provides a versatile set of features for creating screens and process flows related to offers, offer groups, order management, and payment processing. It's designed to be adaptable to various view technologies, making it a valuable addition to your web application projects.

## Customizing Data Presentation

user-credits-ui offers extensive customization options for data presentation in the UI. This is accomplished through the use of `IGeneratorData`, `IValuePresentation`, and `IListValuePresentation` objects. These objects allow you to define classes, UI components, and additional styling attributes for individual data fields, lists, and containers.

### IValuePresentation

The `IValuePresentation` interface allows you to customize the presentation of individual data fields. It includes attributes such as `value`, `cls`, `comp`, `replaceCls`, `prefixElement`, and `suffixElement` to give you full control over how the data is displayed.

### IListValuePresentation

The `IListValuePresentation` interface deals with lists of values, providing control over container specifications and list headers. It offers attributes for building list items, container specifications, list headers, and the list itself.

Importantly, the usage of these customization options is not tied to any specific front-end technology. You can use the `cls` attribute to control how data is displayed, even to the level of specifying the styling for native mobile widgets. To achieve this, you can provide a unique `IResourceResolver` for each platform at startup, making it versatile and adaptable for various technologies.

The flexibility provided by these objects allows you to tailor the presentation of your data to your specific needs, regardless of the front-end technology you choose to use.

## Example Implementation

user-credits-ui offers a practical example for implementing offer-related screens in a UI-agnostic way. You can adapt this example to your specific use case. For full details, please refer to the example implementation in the source code.

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
