import type { IActivatedOffer, IMinimalId, ISubscription } from '@user-credits/core';
import { UserPreferences } from '../UserPreferences';
import * as console from 'console';
import { ConsumptionDto } from './ConsumptionDto';

export type Status = 'ok' | 'warn' | 'error';
const DEFAULT_USER_PREFERENCES = new UserPreferences();

/**
 * A synthesis of ongoing subscriptions and activated offers
 * to determine the overall status of the associated offerGroup.
 * IMPROVEMENT move this file to @user-credits/core
 */
export class OfferGroupStatusSummary<K extends IMinimalId> {
	get totalPurchasedTokens(): number {
		return this._totalPurchasedTokens;
	}

	protected _statusSummary: Status;
	protected _statusMessage: string;
	protected _activeSubscription: ISubscription<K>;
	protected _consumption: ConsumptionDto<K>;
	protected _name: string;
	protected _totalPurchasedTokens: number = 0;

	constructor(
		protected _purchaseGroup: ISubscription<K>[],
		protected _active: IActivatedOffer | null = null,
		protected userPreferences: UserPreferences = DEFAULT_USER_PREFERENCES
	) {

		this._purchaseGroup = _purchaseGroup.sort((a:ISubscription<K>, b:ISubscription<K>) => new Date(a.starts ).getTime() - new Date(b.starts).getTime());
		this.calculateStatus();
	}

	/**
	 * Calculates the overall status of the offer group based on ongoing subscriptions
	 * and the currently activated offer (if any).
	 * @returns The calculated status: 'ok', 'warn', or 'error'
	 */
	protected calculateStatus(): Status {
		this._statusSummary = 'error'; // start with an error status, and wait for subscriptions to correct that
		// start with any, and override with more representative data if any
		// NOTE: this could evolve to picking the last expiry date element (or creation date) to represent with the last active one
		this._activeSubscription = this._purchaseGroup[0];

		for (const subscription of this._purchaseGroup) {
			if (subscription.status === 'paid') {
				this._totalPurchasedTokens += subscription.tokens;
			}
		}

		for (const subscription of this._purchaseGroup) {
			if (subscription.status === 'paid' && !this._active)
				console.error('Maybe a corrupted state: subscription ', subscription._id, ' is paid, but no active item found (this is maybe because the subscription is expired or finished the tokens, ignore this if it\'s the case): ', JSON.stringify(subscription));

			// Check if any subscription has a status == "paid" and its expires date and tokens are beyond warning signals
			if (subscription.status === 'paid' &&
				this.computeDateSafety() > 0 &&
				this.computeTokenSafety(subscription) > 0
			) {
				this._activeSubscription = subscription;
				// If any subscription meets the "ok" conditions, no more need to evaluate: return "ok"
				this._statusSummary = 'ok';
				this._statusMessage = 'Paid and active';
				return 'ok';
			}

			if ( // it is not an error to have a pending subscription
				// IMPROVEMENT add payment attempts count to ISubscription
				subscription.status === 'pending') {
				this._activeSubscription = subscription;
				// If any subscription meets the "warn" conditions, set status to "warn" but keep exploring other subscriptions
				this._statusSummary = 'warn';
				if (!this.statusSummary) // avoid to override another warning
					this._statusMessage = 'not paid yet';
			} else if ( // Check if any subscription has a status == "paid" and its expires date is within the threshold for a "warn" status
				subscription.status === 'paid') {
				if (this.computeDateSafety() == 0) {
					this._activeSubscription = subscription;
					// If any subscription meets the "warn" conditions, set status to "warn" but keep exploring other subscriptions
					this._statusSummary = 'warn';
					this._statusMessage = 'Expires shortly';
				}
				if (this.computeTokenSafety(subscription) == 0) {
					this._activeSubscription = subscription;
					// If any subscription meets the "warn" conditions, set status to "warn" but keep exploring other subscriptions
					this._statusSummary = 'warn';
					// subscription['message'] = 'Tokens low';
					this._statusMessage = 'Tokens low';
				}
			}

		}

		// If none of the subscriptions meet the "ok" conditions, return the overall status
		return this._statusSummary;
	}

	/**
	 * Checks if the expiry date of the currently active offer is within the safe threshold.
	 * @returns A numerical value representing the safety status:
	 *   - Positive: The expiry date is safe
	 *   - Zero: The expiry date is imminent or already passed
	 *   - Negative: The expiry date is beyond the safe threshold
	 * @protected
	 */
	protected computeDateSafety(): number {
		const delayBeforeExpiry: number = this.userPreferences.warnIfExpiresIn;
		const currentDate = new Date();
		// if no active field is present, then we consider it's not safe to allow the user to use this offer
		if (!this._active) // error, should not happen: a paid subscription must have an active peer
			return -1;
		if (!this._active?.expires) // this subscription has no exipry date, we just skip
			return 1;

		const expires = new Date(this._active.expires);
		if (currentDate.getTime() > expires.getTime())
			return -1;

		const thresholdDate = new Date(expires - delayBeforeExpiry);
		const remainingTime = thresholdDate - currentDate;
		return remainingTime < 0 ? 0 : remainingTime;
	}

	/**
	 * Computes the safety status of tokens for a given subscription.
	 * @param subscription The subscription to check
	 * @returns A numerical value representing the safety status:
	 *   - Positive: The token count is safe
	 *   - Zero: The token count is at the warning level
	 *   - Negative: The token count is below the warning level
	 * @protected
	 */
	protected computeTokenSafety(subscription: ISubscription<K>): number {
		const minimumTokens: number = this.userPreferences.warnIfTokensLessThan;
		if (!subscription.tokens)
			return 1;
		return subscription.tokens - minimumTokens;
	}

	get statusSummary(): Status {
		return this._statusSummary;
	}

	get purchaseGroup(): ISubscription<K>[] {
		return this._purchaseGroup;
	}

	get active(): IActivatedOffer | null {
		return this._active;
	}

	get expires(): Date {
		return this._active?.expires;
	}

	get remainingTokens(): number {
		return this._active?.tokens;
	}

	get activeSubscription(): ISubscription<K> {
		return this._activeSubscription;
	}

	get _id(): K {
		return this._activeSubscription._id;
	}

	get customCycle(): number | null {
		return this._activeSubscription.customCycle;
	}

	get currency(): string {
		return this._activeSubscription.currency;
	}

	get cycle(): string {
		return this._activeSubscription.cycle;
	}

	get name(): string {
		return this._name;
	}

	set name(name: string) {
		this._name = name;
	}

	get consumption(): ConsumptionDto<K> {
		return this._consumption;
	}

	set consumption(value: ConsumptionDto<K>) {
		this._consumption = value;
	}

	get offerGroup(): string {
		return this._activeSubscription.offerGroup;
	}

	get offerId(): K {
		return this._activeSubscription.offerId;
	}

	get orderId(): K {
		return this._activeSubscription.orderId;
	}

	get quantity(): number {
		return this._activeSubscription.quantity ?? 1;
	}

	get starts(): Date {
		return this._activeSubscription.starts;
	}

	get status(): 'pending' | 'paid' | 'refused' | 'error' {
		return this._activeSubscription.status;
	}

	get tokens(): number {
		return this._activeSubscription.tokens;
	}

	get total(): number {
		return this._activeSubscription.total;
	}
}
