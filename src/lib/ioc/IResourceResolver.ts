/**
 * The representation of a field along with classes (to override or to complete), prefixing or suffixing icons etc...
 */
export interface IValuePresentation {
	/**
	 * The raw value for the field
	 */
	value: object | null;

	/**
	 * Classes: these are appended after the default classes
	 */
	cls: string | null;

	/**
	 * The UI component to represent this data (a string because a factory will construct this component when the time comes for it)
	 */
	comp: string | null;

	/**
	 * List of classes to use exclusively, resetting the default values and using only these
	 */
	replaceCls: boolean | null;

	/**
	 *
	 */
	prefixElement?: string | null;
	suffixElement?: string | null;
}

/**
 * A list of values along with its container and header specification
 */
export interface IListValuePresentation {
	buildItems<T extends IGeneratorData<T>>( data:T[], transform:(t:T) => IValuePresentation ):void;
	/**
	 * Specs for the container: typically a <ul> or <ol> element in html
	 */
	container: IValuePresentation;
	/**
	 * Specs for the header that announces the list
	 */
	header: IValuePresentation;
	/**
	 * The list, ready to be used by an atomic presenting component
	 */
	items: IValuePresentation[] | null;
}

/**
 * A field of IRestrictedPresentationProperties type
 */
export type IPresentationField = IValuePresentation | IListValuePresentation;

/**
 * A data object containing a list of properties along with information about how to present them:
 * either a single value IValuePresentation or a list IListValuePresentation
 * @param <T> the actual real implementation (this allows typescript to check that it is composed of
 * properties that are exclusively of the allowed types)
 */
export type IGeneratorData<T> = {
	[K in keyof T]: IPresentationField;
};

/**
 * Implementations of this interface should be enum like interfaces restricting the possible return types. Eg: 'Offer', 'Order', 'UserCredits', 'CreditsTimetable'
 */
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
	 * @param domain a key that describes what we expect (which entity to represent)
	 * @param data a raw data object
	 * @param <T> the actual object containing the data to represent, for example @IOfferProps
	 * @param <D> the type of possible objects (an enum like implementation)
	 * return <T> the type the user expects as an output
	 */
	getObject<T extends IGeneratorData<T>, D extends IResourceDomain>(domain: D, data: object): T;

}