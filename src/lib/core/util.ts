import { IValuePresentation } from '../ioc/IValuePresentation';

export function buildClass(defaultValue: string, data: IValuePresentation): string {
	return data.cls ?? defaultValue + data.overridingCls ?? '';
}
