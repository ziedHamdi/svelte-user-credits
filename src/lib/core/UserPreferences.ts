/**
 * IMPROVEMENT refactor this file as an interface and move to @user-credits/core/db/model and add db DAOs
 */
export class UserPreferences {
	static MINUTE = 1000 * 60
	static HOUR = UserPreferences.MINUTE * 60
	static DAY = UserPreferences.HOUR * 24
	static WEEK = UserPreferences.DAY * 7
	static MONTH = UserPreferences.DAY * 30

	/**
	 * Time in millis: generates a warning status if time before expiry date is less than this value
	 */
	protected _warnIfExpiresIn: number;
	/**
	 * Generates a warning status if remaining tokens are less than in this value
	 * @protected
	 */
	protected _warnIfTokensLessThan: number;

	constructor(warnIfExpiresIn: number = UserPreferences.WEEK, warnIfTokensLessThan: number = 0) {
		this._warnIfExpiresIn = warnIfExpiresIn;
		this._warnIfTokensLessThan = warnIfTokensLessThan;
	}

	get warnIfExpiresIn(): number {
		return this._warnIfExpiresIn;
	}

	set warnIfExpiresIn(value: number) {
		this._warnIfExpiresIn = value;
	}

	get warnIfTokensLessThan(): number {
		return this._warnIfTokensLessThan;
	}

	set warnIfTokensLessThan(value: number) {
		this._warnIfTokensLessThan = value;
	}
}