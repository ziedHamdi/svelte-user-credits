export class ElementProperties {
	prefixElement;
	suffixElement;
	props;

	constructor(public element: string, protected _class: string, public value: object) {
	}

	get class(): string {
		return this._class;
	}

	set class(cls: string) {
		this._class = cls;
	}
}