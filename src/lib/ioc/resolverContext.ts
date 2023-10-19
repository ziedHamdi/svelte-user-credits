/**
 * This resolver will hold an instance of IResourceResolver to resolve texts related to the app
 */
import { setContext } from 'svelte';
import { writable } from 'svelte/store';

export const NAME = "resolver"
// Create the resolver store
const resolver = writable(null);

// Create the context
export const resolverContext = () => {
	setContext(NAME, resolver);

	return {
		setResolver: (value) => resolver.set(value),
		// getResolver: () => getContext(NAME),
	};
};
