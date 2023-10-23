import { IListValuePresentation, IValuePresentation } from '../../ioc/IResourceResolver';
import { IElementBuilder } from '../../ioc/IElementBuilder';
import { ElementProperties } from '../../ioc/ElementProperties';

export class ElementBuilder implements IElementBuilder {
	/**
	 * Creates properties to be used by a <svelete:element {...returnedProps}>
	 * @param comp
	 * @param data
	 * @param cls
	 */
	buildElementProps(comp: string, data: IValuePresentation, cls: string): ElementProperties {
		const toReturn = new ElementProperties(data.comp ?? comp, data.replaceCls ? cls : `${cls} ${data.cls}`, this.asString(data.value));
		if (data.prefixElement) {
			// fill in a prefix here
			// toReturn.prefixElement = new ElementProperties()
		}
		return toReturn;
	}

	/**
	 * Creates properties to be used by a list of element
	 * @param comp
	 * @param data
	 * @param cls
	 */
	buildListBlockProps(comp: string, data: IListValuePresentation, cls: string): ElementProperties {
		const container = data.container?.comp ?? comp ?? 'ul';
		const clazz = data.replaceCls ? cls : `${cls} ${data.cls}`;

		return new ElementProperties(container, clazz, null);
	}

	asString(value: object): string {
		return '' + value;
	};
}