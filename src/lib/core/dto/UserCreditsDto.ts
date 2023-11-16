import type { IUserCredits, IMinimalId, ISubscription, IActivatedOffer } from '@user-credits/core';
import type { ObjectId } from '../../../routes/init/+server';
import { EntityDto } from './EntityDto';
import { OfferGroupStatusSummary } from './OfferGroupStatusSummary';
import { UserPreferences } from '../UserPreferences';


export class UserCreditsDto<K extends IMinimalId> extends EntityDto<K, IUserCredits<K>> {
	protected _summaryList: OfferGroupStatusSummary<K>[];

	constructor(protected _userCredits: IUserCredits<ObjectId>, protected userPreferences: UserPreferences) {
		super(_userCredits);
		this._summaryList = this.groupPurchasesByOfferGroup();
	}

	protected groupPurchasesByOfferGroup(): OfferGroupStatusSummary<K>[] {
		const groupedPurchases: Record<string, ISubscription<K>[]> = {};

		this._userCredits.subscriptions.forEach((purchase) => {
			const offerGroup = purchase.offerGroup;

			if (!groupedPurchases[offerGroup]) {
				groupedPurchases[offerGroup] = [];
			}

			groupedPurchases[offerGroup].push(purchase);
		});

		const activeOffersGrouped: Record<string, IActivatedOffer> = {};
		this._userCredits.offers.forEach((offer) => {
			const offerGroup = offer.offerGroup;
			activeOffersGrouped[offerGroup] = offer;
		});

		return Object.keys(groupedPurchases).map((offerGroup) => {
			const activeOffer = activeOffersGrouped[offerGroup];
			return new OfferGroupStatusSummary<K>(groupedPurchases[offerGroup], activeOffer, this.userPreferences);
		});
	}

	get summaryList(): OfferGroupStatusSummary<K>[] {
		return this._summaryList;
	}

	get userCredits(): IUserCredits<ObjectId> {
		return this._userCredits;
	}


}
