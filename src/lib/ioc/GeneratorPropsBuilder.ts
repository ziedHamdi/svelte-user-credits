import { IListValuePresentation, IValuePresentation } from './IResourceResolver';

export class ElementProperties {
	prefixElement;
	suffixElement;
	constructor(public comp:string, protected _class:string, public value:string) {}
	get class(): string {
		return this._class;
	}

	set class(cls: string) {
		this._class = cls;
	}
}

/**
 * Creates properties to be used by a <svelete:element {...returnedProps}>
 * @param comp
 * @param data
 * @param cls
 */
export function buildElementProps(comp: string, data: IValuePresentation, cls: string): ElementProperties {
	const toReturn = new ElementProperties(data.comp ?? comp, data.replaceCls ? cls : `${cls} ${data.cls}`, asString(data.value));
	if(data.prefixElement) {
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
export function buildListBlockProps(comp: string, data: IListValuePresentation, cls: string): ElementProperties {
	const container = data.container?.comp ?? comp ?? 'ul'
	const clazz = data.replaceCls ? cls : `${cls} ${data.cls}`

	return new ElementProperties(container, clazz, null);
}

const asString = (value:object) => ''+value;