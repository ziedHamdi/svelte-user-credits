import { IElementBuilder } from '../../ioc/IElementBuilder';
import { ElementProperties } from '../../ioc/ElementProperties';
import { IValuePresentation } from '../../ioc/IValuePresentation';
import { IListValuePresentation } from '../../ioc/IListValuePresentation';

export class ElementBuilder implements IElementBuilder {

	/**
	 * Creates properties to be used by a <svelete:element {...returnedProps}>
	 * @param comp
	 * @param data
	 * @param cls
	 */
	buildElementProps(comp: string, data: IValuePresentation, cls: string): ElementProperties {
		let toReturn = new ElementProperties(data.comp ?? comp, data.replaceCls ? cls : `${cls} ${data.cls}`, data.value);
		if (data.prefixElement || data.suffixElement) {
			const middleChild = toReturn;
			toReturn = new ElementProperties(ElementProperties.FRAGMENT);
			const children: ElementProperties[] = [];
			toReturn.children = children;
			if (data.prefixElement) {
				const prefix: ElementProperties = this.resolveDecorator(data.prefixElement);
				children.push(prefix);
			}
			toReturn.children.push(middleChild);
			if (data.suffixElement) {
				const suffix: ElementProperties = this.resolveDecorator(data.prefixElement);
				children.push(suffix);
			}
		}
		return toReturn;
	}

	private resolveDecorator(data: string): ElementProperties {
		if (data == 'blueCheck') {
			const decorator = new ElementProperties('svg',
				'flex-shrink-0 h-5 w-5 text-blue-600',
				{
					__elem__: 'path',
					fill: 'currentColor',
					d: 'M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z'
				});
			decorator.props = {
				width: '16',
				height: '16',
				viewBox: '0 0 16 16',
				fill: 'none',
				xmlns: 'http://www.w3.org/2000/svg',
				class: 'flex-shrink-0 h-5 w-5 text-blue-600'
			};
			return decorator;
		}
		throw new Error( "Unrecognized format : '"+ data +"'");
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