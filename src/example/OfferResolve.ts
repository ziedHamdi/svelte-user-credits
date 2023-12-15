import { EntityDto, OfferDto } from '@user-credits/base-ui';
import type { IOffer } from '@user-credits/core';

export function resolveOffer<K, M>(data: M): EntityDto<K, M> {
	const offerDto: OfferDto<K> = new OfferDto<K>(data as unknown as IOffer<string>);

	const advantages = data.combinedItems?.map((item) => resolveOffer(item));
	const toReturn: EntityDto<K, M> = offerDto as EntityDto<K, M>;

	if (data.offerGroup === 'AiTokens') {
		offerDto.description = 'Tokens included';
		return offerDto;
	} else if (data.offerGroup === 'VipSeoBackLinks') {
		offerDto.description = 'Back links included';
		return offerDto;
	}

	switch (offerDto.name) {
		case 'Free': {
			offerDto.description = 'Forever free';
			offerDto.advantages = new Map();
			offerDto.advantages.set('1 user', null);
			offerDto.callToAction = 'Join now';
			break;
		}
		case 'Startup':
		case 'EbStartup': {
			offerDto.description = 'All the basics for starting a new business';
			offerDto.advantages = new Map();
			offerDto.advantages.set('10 users', null);
			offerDto.callToAction = 'Sign up';
			break;
		}
		case 'Enterprise':
		case 'EbEnterprise': {
			offerDto.description = 'Advanced features for international businesses';
			offerDto.advantages = new Map();
			offerDto.advantages.set('50 users', null);
			offerDto.callToAction = 'Sign up';
			break;
		}
		case 'ScaleUp':
		case 'EbScaleUp': {
			offerDto.description = 'Everything you need for a growing business';
			offerDto.advantages = new Map();
			offerDto.advantages.set('200 users', null);
			offerDto.callToAction = 'Sign up';
			break;
		}
		default:
		// throw new Error('Cannot resolve offer ' + JSON.stringify(offerDto));
	}

	if (advantages) {
		advantages.forEach((adv) => offerDto.advantages.set((adv.delegate.quantity) + ' ' + adv.description));
	}

	if (offerDto.name == 'EbEnterprise')
		offerDto.highlightingMessage = 'MOST POPULAR';
	if (offerDto.name == 'Startup')
		offerDto.highlightingMessage = 'ONLY 10 USERS';

	return toReturn;
}