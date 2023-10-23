/**
 * This resolver will hold an instance of IResourceResolver to resolve texts related to the app
 */
import { setContext } from 'svelte';
import { writable } from 'svelte/store';
import { IResourceResolver } from './IResourceResolver';

export const RESOLVER = "resolver"
// Create the resolver store
const resolver = writable(null);

// Create the context
export const resolverContext = () => {
	setContext(RESOLVER, resolver);

	return {
		setResolver: (value:IResourceResolver) => resolver.set(value),
		// getResolver: () => getContext(NAME),
	};
};
