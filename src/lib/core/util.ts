import { IValuePresentation } from '../ioc/IResourceResolver';

export function buildClass(defaultValue: string, data: IValuePresentation): string {
	return data.cls ?? defaultValue + data.overridingCls ?? '';
}
