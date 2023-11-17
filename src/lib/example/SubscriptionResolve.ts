import type { IBaseEntity, IMinimalId } from '@user-credits/core';
import { EntityDto } from '../core/dto/EntityDto';
import { UserCreditsDto } from '../core/dto/UserCreditsDto';
import { UserPreferences } from '../core/UserPreferences';
import { Consumption } from '../core/dto/Consumption';
import { OfferGroupStatusSummary } from '../core/dto/OfferGroupStatusSummary';

export function resolveSubscription<K extends IMinimalId, M extends IBaseEntity<K>>(data: M, userPreferences: UserPreferences): EntityDto<K, M> {
	const toReturn = new UserCreditsDto<K>(data, userPreferences);
	fillNames(toReturn);
	fillConsumptionForPaid<K>(toReturn);

	return toReturn as EntityDto<K, M>;
}


function fillNames<K extends IMinimalId>(userCreditsDto: UserCreditsDto<K>): void {
	userCreditsDto.summaryList.forEach((summary) => {
		summary.name = offerGroupName(summary.active.offerGroup);
	});
}
function offerGroupName( name: string ): string {
	switch (name) {
		case 'Free':
			return 'Forever free';
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
function buildDateConsumption(summary: OfferGroupStatusSummary<IMinimalId>) {
	return new Consumption(
		new Date(summary.expires).getTime(),
		new Date(summary.starts).getTime(),
		new Date().getTime(),
		true
	);
}

function buildTokenConsumption(summary: OfferGroupStatusSummary<IMinimalId>) {
	return new Consumption(
		summary.tokens,
		0,
		summary.remainingTokens,
		true
	);
}

