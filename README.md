# svelte-user-credits


## Architecture Design: Global IResourceResolver Store

In our SvelteKit library, we have implemented a global state management solution to make the `IResourceResolver` easily accessible to all components in your project. This architecture design provides a clean and efficient way to share and use the `IResourceResolver` across various parts of your application.

### Global Store for `IResourceResolver`

We have created a writable store named `resolver` that holds the implementation of the `IResourceResolver` interface. The `resolver` store allows developers to set and access an `IResourceResolver` instance, making it available globally to all components.

### Layout Integration

To ensure that the `resolver` store is available to all components, you have to integrate it into the SvelteKit layout. Layouts are a central place to provide global data and state for your application. In the `/core/RootLayout.svelte` file, we show you how to import and initialize the `resolver` store.

Developers using this library can easily implement the `resolver` store with their custom `IResourceResolver` implementation. This allows them to provide their own logic for `getString(key: string)`.

### Usage in Components

Once the `resolver` store is set in the layout, all components that use this layout will have access to the `resolver` store without needing to explicitly inject it. Components can use the `$` syntax to access the `resolver` store and subscribe to changes. This ensures that any updates to the `resolver` value will be automatically reflected in components that rely on it.

This architecture design simplifies the process of sharing the `IResourceResolver` across components, making it adaptable to i18n libraries you are using or other resource loading mechanisms.

---

## Developing
Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Contributing 
### Link to user-credits folder
If you checked out the user-credits project, you can make local changes to it and use them without publishing using pnpm link

When you use [pnpm link](https://pnpm.io/cli/link#:~:text=pnpm%20link%20%E2%80%8B,to%20bar%2Fnode_modules%2Ffoo%20.), the linked package is symlinked from the source code. You can modify the source code of the linked package, and the changes will be reflected in your project.

```bash
user-credits> pnpm link . --global
svelte-user-credits> pnpm link -g user-credits
```
You'll see a confirmation message like follows:
```
C:\Users\zhamd\AppData\Local\pnpm\global\5:
+ user-credits 0.9.02-alpha <- node_modules\user-credits
```

To cancel the link call
```bash
svelte-user-credits> pnpm unlink user-credits
```



## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
