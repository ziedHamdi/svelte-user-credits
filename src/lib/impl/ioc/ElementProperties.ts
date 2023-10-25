import { Element, FRAGMENT, IElementProperties } from '../../ioc/IElementProperties';

export class ElementProperties implements IElementProperties {
	private _props: Record<string, string>;
	private _children: ElementProperties[] | null;

	constructor(public readonly _element: Element);
	constructor(public readonly _element: Element | string, protected _class: string, public value: object);
	constructor(public _element: Element | string, protected _class?: string, public _value?: object) {
	}

	get class(): string {
		return this._class;
	}

	set class(cls: string) {
		this._class = cls;
	}

	get element(): Element | string {
		return this._element;
	}

	set element(value: Element | string) {
		this._element = value;
	}

	get props(): Record<string, string> {
		return this._props;
	}

	set props(value: Record<string, string>) {
		this._props = value;
	}

	get children(): ElementProperties[] | null {
		return this._children;
	}

	set children(value: ElementProperties[] | null) {
		this._children = value;
	}

	get value(): object {
		return this._value;
	}

	set value(value: object) {
		this._value = value;
	}


}