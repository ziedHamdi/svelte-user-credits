import { EntityDto } from '../core/dto/EntityDto';
import { OfferDto } from '../core/dto/OfferDto';
import type { IOffer } from '../../../../user-credits-core';

export function resolveSubscription<M, K>(data: M): EntityDto<K, M> {
	{
		const offerDto: OfferDto<K> = new OfferDto<K>(data as unknown as IOffer<string>);
		const toReturn: EntityDto<K, M> = offerDto as EntityDto<K, M>;

		console.log("resolving subscription: ", data)

		if (!offerDto.name)
			console.error('Offer has no name: ', JSON.stringify(offerDto));

		switch (offerDto.name) {
			case 'Free': {
				offerDto.description = 'Forever free';
				offerDto.advantages = new Map();
				offerDto.advantages.set('1 user', null);
				offerDto.advantages.set('Basic features', null);
				offerDto.advantages.set('Basic support', null);
				offerDto.callToAction = 'Join now';
				break;
			}
			case 'Startup':
			case 'EbStartup': {
				offerDto.description = 'All the basics for starting a new business';
				offerDto.advantages = new Map();
				offerDto.advantages.set('10 users', null);
				offerDto.advantages.set('Plan features', null);
				offerDto.advantages.set('Product support', null);
				offerDto.callToAction = 'Sign up';
				break;
			}
			case 'Enterprise':
			case 'EbEnterprise': {
				offerDto.description = 'Advanced features for international businesses';
				offerDto.advantages = new Map();
				offerDto.advantages.set('50 users', null);
				offerDto.advantages.set('Plan features', null);
				offerDto.advantages.set('Product support', null);
				offerDto.callToAction = 'Sign up';
				break;
			}
			case 'ScaleUp':
			case 'EbScaleUp': {
				offerDto.description = 'Everything you need for a growing business';
				offerDto.advantages = new Map();
				offerDto.advantages.set('200 users', null);
				offerDto.advantages.set('Plan features', null);
				offerDto.advantages.set('Product support', null);
				offerDto.callToAction = 'Sign up';
				break;
			}
			default:
				throw new Error('Cannot resolve offer ' + JSON.stringify(offerDto));
		}

		if (offerDto.name == 'EbEnterprise')
			offerDto.highlightingMessage = 'MOST POPULAR';
		if (offerDto.name == 'Startup')
			offerDto.highlightingMessage = 'ONLY 10 USERS';

		return toReturn;
	}
}