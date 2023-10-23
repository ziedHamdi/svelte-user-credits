import { IListValuePresentation, IValuePresentation } from './IResourceResolver';
import { ElementProperties } from './ElementProperties';

export interface IElementBuilder {
	/**
	 * Creates properties to be used by a <svelete:element {...returnedProps}>
	 * @param elem
	 * @param data
	 * @param cls
	 */
	buildElementProps(elem: string, data: IValuePresentation, cls: string): ElementProperties;

	/**
	 * Creates properties to be used by a list of element
	 * @param elem
	 * @param data
	 * @param cls
	 */
	buildListBlockProps(elem: string, data: IListValuePresentation, cls: string): ElementProperties;

	/**
	 * Transforms data as a string representation
	 * @param value
	 */
	asString(value:object): string;

}


