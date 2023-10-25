export const FRAGMENT = '__fragment__';
export type Element = typeof FRAGMENT;

export interface IElementProperties {
	class: string;
	element: string;
	props: Record<string, string>;
	children: IElementProperties[] | null;
	value: object;
}