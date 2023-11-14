// You can initialize the resolver store here if needed.
// For example:
import type { IResourceResolver } from '../ioc/IResourceResolver';
import type { IBaseEntity, IOffer, IMinimalId } from "@user-credits/core";
import type { IResourceDomain } from '../ioc/IResourceDomain';
import { OfferDto } from '../core/dto/OfferDto';
import { EntityDto } from '../core/dto/EntityDto';

export class Resolver implements IResourceResolver {
	getObject<D extends IResourceDomain, K extends IMinimalId, M extends IBaseEntity<K>>(domain: D, data: M): EntityDto<K, M> {
		let toReturn: EntityDto<K, M>;
		switch (domain.type) {
			case 'Offer': {
				const offerDto: OfferDto<K> = new OfferDto<K>(data as unknown as IOffer<string>);
				toReturn = offerDto as EntityDto<K, M>
				if(offerDto.higlighted)
					offerDto.highlightingMessage = "MOST POPULAR";

				if( !offerDto.name )
					console.error( "Offer has no name: ",JSON.stringify( offerDto ))

				switch (offerDto.name.toLowerCase()) {
					case 'free': {
						offerDto.description = 'Forever free';
						offerDto.advantages = new Map();
						offerDto.advantages.set('1 user', null);
						offerDto.advantages.set('Plan features', null);
						offerDto.advantages.set('Product support', null);
						offerDto.callToAction = 'Create account';
						break;
					}
					case 'startup': {
						offerDto.description = 'All the basics for starting a new business';
						offerDto.advantages = new Map();
						offerDto.advantages.set('10 users', null);
						offerDto.advantages.set('Plan features', null);
						offerDto.advantages.set('Product support', null);
						offerDto.callToAction = 'Sign up';
						break;
					}
					case 'enterprise': {
						offerDto.description = 'Advanced features for international businesses';
						offerDto.advantages = new Map();
						offerDto.advantages.set('50 users', null);
						offerDto.advantages.set('Plan features', null);
						offerDto.advantages.set('Product support', null);
						offerDto.callToAction = 'Sign up';
						break;
					}
					case 'scaleup': {
						offerDto.description = 'Everything you need for a growing business';
						offerDto.advantages = new Map();
						offerDto.advantages.set('200 users', null);
						offerDto.advantages.set('Plan features', null);
						offerDto.advantages.set('Product support', null);
						offerDto.callToAction = 'Sign up';
						break;
					}
					default:
						throw new Error("Cannot resolve offer "+ JSON.stringify(offerDto))
				}
				return toReturn;
			}
			default: throw new Error("Cannot resolve DOMAIN "+ domain +" : "+ data);
		}
	}
}