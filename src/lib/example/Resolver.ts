// You can initialize the resolver store here if needed.
// For example:
import type { IResourceResolver } from '../ioc/IResourceResolver';
import type { IBaseEntity, IMinimalId } from '@user-credits/core';
import type { IResourceDomain } from '../ioc/IResourceDomain';
import { EntityDto } from '../core/dto/EntityDto';
import { resolveOffer } from './OfferResolve';
import { resolveSubscription } from './SubscriptionResolve';

export class Resolver implements IResourceResolver {
	getObject<D extends IResourceDomain, K extends IMinimalId, M extends IBaseEntity<K>>(domain: D, data: M): EntityDto<K, M> {
		if(!data)
			throw new Error("Data cannot be null: "+ data);
		switch (domain.type) {
			case 'Offer': return resolveOffer<M, K>(data);
			case 'Subscription': return resolveSubscription<M, K>(data);

			default: throw new Error("Cannot resolve DOMAIN "+ domain.type +" : "+ data);
		}
	}
}