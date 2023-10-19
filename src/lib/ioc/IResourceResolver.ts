export interface IValuePresentation {
	value: object | null;
	cls: string | null;
	overridingCls: string | null;
	prefixElement?: string | null;
	suffixElement?: string | null;
}

// Updated IListValuePresentation interface with nullability
export interface IListValuePresentation {
	container: IValuePresentation;
	header: IValuePresentation;
	items: IValuePresentation[] | null;
}

export type PresentationField = IValuePresentation | IListValuePresentation;

export type IRestrictedPresentationProperties<T> = {
	[K in keyof T]: PresentationField;
};

export interface IResourceDomain {
	type: string;
}

/**
 * A central concept to resolve any resource
 */
export interface IResourceResolver {
	/**
	 * Returns an object to describe a domain as view ready values. For example it will convert and append the right currency to the price, find a language specific title, name, description and return a structured object with these values
	 *
	 * IMPROVE: I could add interfaces to return depending on the domain and data concrete types, but that's har to imagine at this stage
	 * @param domain a key that describes what we expect (which screen)
	 * @param data a raw data object
	 * return <T> the type the user expects as an output
	 */
	getObject<T extends IRestrictedPresentationProperties<T>>(domain: object, data: object): T;

}