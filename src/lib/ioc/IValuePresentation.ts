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