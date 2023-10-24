// You can initialize the resolver store here if needed.
// For example:
import { IResourceResolver, IGeneratorData } from '../ioc/IResourceResolver';
import { IOffer } from 'user-credits';
import { OfferProps } from './impl/model/OfferProps';
import { IResourceDomain } from '../ioc/IResourceDomain';

export class Resolver implements IResourceResolver {
	getObject<T extends IGeneratorData<T>>(domain: IResourceDomain, data: object): T {
		switch(domain.type) {
			case "Offer":
				return new OfferProps(data as unknown as IOffer) as T;
		}
	}
}