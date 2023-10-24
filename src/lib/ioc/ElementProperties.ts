type Element = typeof ElementProperties.FRAGMENT;

export class ElementProperties {
	props;
	children: ElementProperties[] | null;

	static readonly FRAGMENT: Element = "__fragment__";
	constructor(public element: Element);
	constructor(public element: string, protected _class: string, public value: object);
	constructor(public element: Element | string, protected _class?: string, public value?: object) {
	}

	get class(): string {
		return this._class;
	}

	set class(cls: string) {
		this._class = cls;
	}
}