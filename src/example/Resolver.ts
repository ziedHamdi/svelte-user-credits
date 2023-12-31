// You can initialize the resolver store here if needed.
// For example:
import type { IResourceResolver, IResourceDomain, EntityDto } from '@user-credits/base-ui';
import {UserPreferences } from '@user-credits/base-ui';
import type { IBaseEntity, IMinimalId } from '@user-credits/core';
import { resolveOffer } from './OfferResolve';
import { resolveSubscription } from './SubscriptionResolve';

const DEFAULT_USER_PREFERENCES = new UserPreferences();

export class Resolver implements IResourceResolver {
	buildDto<D extends IResourceDomain, K extends IMinimalId, M extends IBaseEntity<K>>(domain: D, data: M): EntityDto<K, M> {
		if (!data)
			throw new Error('Data cannot be null: ' + data +' (domain: '+ JSON.stringify(domain) +')');
		switch (domain.type) {
			case 'Offer':
				return resolveOffer<K, M>(data);
			case 'UserCredits':
				return resolveSubscription<K, M>(data, this.getSetting({ type: 'UserPreferences' }) as UserPreferences);

			default:
				throw new Error('Cannot resolve DOMAIN ' + domain.type + ' : ' + data);
		}
	}

	getSetting<D extends IResourceDomain>(domain: D): unknown {
		switch (domain.type) {
			case 'UserPreferences':
				return DEFAULT_USER_PREFERENCES;

			default:
				throw new Error('Cannot resolve DOMAIN ' + domain.type );
		}

	}
}