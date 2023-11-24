import type { IBaseEntity, IMinimalId } from '@user-credits/core';
import { EntityDto, UserCreditsDto, UserPreferences, ConsumptionDto, OfferGroupStatusSummary } from '$lib';

export function resolveSubscription<K extends IMinimalId, M extends IBaseEntity<K>>(data: M, userPreferences: UserPreferences): EntityDto<K, M> {
	const toReturn = new UserCreditsDto<K>(data, userPreferences);
	fillNames(toReturn);
	fillConsumptionForPaid<K>(toReturn);

	return toReturn as EntityDto<K, M>;
}


function fillNames<K extends IMinimalId>(userCreditsDto: UserCreditsDto<K>): void {
	userCreditsDto.summaryList.forEach((summary) => {
		summary.name = offerGroupName(summary.activeSubscription.offerGroup);
	});
}
function offerGroupName( name: string ): string {
	switch (name) {
		case 'Free':
			return 'Forever Free';
		case 'Startup':
			return 'Startup';
		case 'EbStartup':
			return 'Early Bird Startup';
		case 'Enterprise':
			return 'Enterprise';
		case 'EbEnterprise':
			return 'Early Bird Enterprise';
		case 'ScaleUp':
			return 'ScaleUp';
		case 'EbScaleUp':
			return 'Early Bird ScaleUp';
		default: return name
	}
}

function fillConsumptionForPaid<K extends IMinimalId>(userCreditsDto: UserCreditsDto<K>): void {
	userCreditsDto.summaryList.forEach((summary) => {
		if (summary.status === 'paid') {
			if( summary.tokens > 0 ) {
				summary.consumption = buildTokenConsumption(summary);
			}
			else if( summary.expires ) {
				summary.consumption = buildDateConsumption(summary);
			}
			// console.log( "summary.consumption: ", summary.consumption )
		}
	});
}
function buildDateConsumption<K extends IMinimalId>(summary: OfferGroupStatusSummary<K>) {
	return new ConsumptionDto<K>(
		summary.activeSubscription._id,
		new Date(summary.expires).getTime(),
		new Date(summary.starts).getTime(),
		new Date().getTime(),
		true
	);
}

function buildTokenConsumption<K extends IMinimalId>(summary: OfferGroupStatusSummary<K>) {
	return new ConsumptionDto<K>(
		summary.activeSubscription._id,
		summary.totalPurchasedTokens,
		0,
		summary.remainingTokens,
		true
	);
}

