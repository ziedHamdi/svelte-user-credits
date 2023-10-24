/**
 * Implementations of this interface should be enum like interfaces restricting the possible return types. Eg: 'Offer', 'Order', 'UserCredits', 'CreditsTimetable'
 */
export interface IResourceDomain {
	type: string;
}