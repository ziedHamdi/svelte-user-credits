import { IValuePresentation } from '../../ioc/IResourceResolver';

export class ValuePresenter implements IValuePresentation {
	value: object | null;
	cls: string | null;
	overridingCls: string | null;
	prefixElement: string | null;
	suffixElement: string | null;

	constructor(value: object | null);
	constructor(value: string | null);
	constructor(value: object | null, cls: string | null);
	constructor(value: object | null, cls: string | null, overrideCls: boolean);

	constructor(
		value: object | null,
		cls: string | null | undefined = null,
		override: boolean | null = null,
		prefixElement: string | null = null,
		suffixElement: string | null = null
	) {
		this.value = value;
		this.cls = override ? null : cls;
		this.overridingCls = override ? cls : null;
		this.prefixElement = prefixElement;
		this.suffixElement = suffixElement;
	}
}