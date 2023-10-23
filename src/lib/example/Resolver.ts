// You can initialize the resolver store here if needed.
// For example:
import { IResourceDomain, IResourceResolver, IGeneratorData } from '../ioc/IResourceResolver';
import { IOffer } from 'user-credits';
import { OfferProps } from './impl/model/OfferProps';

export class Resolver implements IResourceResolver {
	getObject<T extends IGeneratorData<T>>(domain: IResourceDomain, data: object): T {
		switch(domain.type) {
			case "Offer":
				return new OfferProps(data as unknown as IOffer) as T;
		}
	}
}