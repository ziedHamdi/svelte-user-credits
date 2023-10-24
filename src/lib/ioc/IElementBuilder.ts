import { ElementProperties } from '../impl/ioc/ElementProperties';
import { IValuePresentation } from './IValuePresentation';
import { IListValuePresentation } from './IListValuePresentation';
import { IElementProperties } from './IElementProperties';

export interface IElementBuilder<T extends IElementProperties> {
	/**
	 * Creates properties to be used by a <svelete:element {...returnedProps}>
	 * @param elem
	 * @param data
	 * @param cls
	 */
	buildElementProps(elem: string, data: IValuePresentation, cls: string): T;

	/**
	 * Creates properties to be used by a list of element
	 * @param elem
	 * @param data
	 * @param cls
	 */
	buildListBlockProps(elem: string, data: IListValuePresentation, cls: string): T;

	/**
	 * Transforms data as a string representation
	 * @param value
	 */
	asString(value:object): string;

}


