import { IValuePresentation } from './IValuePresentation';
import { IListValuePresentation } from './IListValuePresentation';
import { IResourceDomain } from './IResourceDomain';

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