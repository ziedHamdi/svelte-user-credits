/**
 * This elementBuilder will hold an instance of IElementBuilder to transform raw data into presentation details.
 */
import { setContext } from 'svelte';
import { writable } from 'svelte/store';
import { IElementBuilder } from './IElementBuilder';

export const ELEMENT_BUILDER = "ELEMENT_BUILDER"
// Create the elementBuilder store
const elementBuilder = writable(null);

// Create the context
export const elementBuilderContext = () => {
	setContext(ELEMENT_BUILDER, elementBuilder);

	return {
		setElementBuilder: (value:IElementBuilder) => elementBuilder.set(value),
	};
};
