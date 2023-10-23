export class ElementProperties {
	prefixElement;
	suffixElement;

	constructor(public comp: string, protected _class: string, public value: string) {
	}

	get class(): string {
		return this._class;
	}

	set class(cls: string) {
		this._class = cls;
	}
}