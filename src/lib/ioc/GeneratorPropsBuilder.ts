import { IValuePresentation } from './IResourceResolver';

export class DisplayProperties {
	constructor(public comp:string, protected _class:string, public value:string) {}
	get class(): string {
		return this._class;
	}

	set class(cls: string) {
		this._class = cls;
	}
}

/**
 * Creates properties to be used by a <svelete:component {...props}>
 * @param comp
 * @param data
 * @param cls
 */
export function buildElementProps(comp: string, data: IValuePresentation, cls: string): DisplayProperties {
	return new DisplayProperties(data.comp ?? comp, data.replaceCls ? cls : `${cls} ${data.cls}`, asString(data.value));
}

const asString = (value:object) => ''+value;