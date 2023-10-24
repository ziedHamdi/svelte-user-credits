import { IValuePresentation } from '../../ioc/IValuePresentation';

export class ValuePresenter implements IValuePresentation {
	value: object | null;
	cls: string | null;
	comp: string | null;
	replaceCls: boolean | null;
	prefixElement: string | null;
	suffixElement: string | null;

	constructor(value: object | null);
	constructor(value: string | null);
	constructor(value: object | null, cls: string | null);
	constructor(value: object | null, cls: string | null, replaceCls: boolean);

	constructor(
		value: object | null,
		cls: string | null | undefined = null,
		comp: string | null | undefined = null,
		replaceCls: boolean | null = false,
		prefixElement: string | null = null,
		suffixElement: string | null = null
	) {
		this.value = value;
		this.cls = cls;
		this.comp = comp;
		this.replaceCls = replaceCls;
		this.prefixElement = prefixElement;
		this.suffixElement = suffixElement;
	}

}