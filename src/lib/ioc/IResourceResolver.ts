import type { IResourceDomain } from './IResourceDomain';
import type { IMinimalId, IBaseEntity } from "@user-credits/core";
import { EntityDto } from '../core/dto/EntityDto';


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
	 * @template <T> the actual object containing the data to represent, for example @IOfferProps
	 * @template <D> the type of possible objects (an enum like implementation)
	 * return <T> the type the user expects as an output
	 */
	buildDto<D extends IResourceDomain, K extends IMinimalId, M extends IBaseEntity<K>>(domain: D, data: M): EntityDto<K,M>;

	getSetting<D extends IResourceDomain>( domain: D );

}