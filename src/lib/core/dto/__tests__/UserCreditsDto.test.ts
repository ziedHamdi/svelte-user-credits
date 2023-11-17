import {describe, expect, it} from 'vitest';

import { IActivatedOffer, ISubscription, IUserCredits } from '@user-credits/core';
import { UserCreditsDto } from '../UserCreditsDto';
import type { Status } from '../OfferGroupStatusSummary';
import { UserPreferences } from '../../UserPreferences';

describe('UserCreditsDto and OfferGroupStatusSummary Tests', () => {
	it('Subscription with "paid" status but without a peer offer should mark userGroup as "error"', () => {
		// Mock data for a subscription with "paid" status
		const mockSubscription = {
			status: 'paid',
			offerGroup: 'One'
		} as ISubscription<string>;

		// Mock data for the userCredits object
		const mockUserCredits = {
			subscriptions: [mockSubscription],
			offers: []  // there's no active offer with that offerGroup
		} as IUserCredits<string>;

		// Mock user preferences
		const mockUserPreferences = {
			warnIfExpiresIn: 1000 * 60 * 60 * 24 * 10,  // Example: 10 days
			warnIfTokensLessThan: 10  // Example: Minimum tokens for warning
		} as UserPreferences;

		// Create an instance of UserCreditsDto
		const userCreditsDto = new UserCreditsDto(mockUserCredits, mockUserPreferences);

		// Get the userGroup status from the summary list
		const userGroupStatus: Status = userCreditsDto.summaryList[0].statusSummary;

		// Assert that the userGroup status is 'ok'
		expect(userGroupStatus).toBe('error'); //this should maybe throw an error instead (it shows a corrupted db state)
	});

	it('Subscription with "paid" status and conditions met should mark userGroup as "ok"', () => {
		// Mock data for a subscription with "paid" status and conditions met
		const mockSubscription = {
			offerGroup: 'One',
			status: 'paid',
			tokens: 15  // Above the warning level
			// Add other required fields based on your implementation
		} as ISubscription<string>;

		const mockActive = {
			offerGroup: 'One',
			expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 20),  // Expires in 20 days
			tokens: 15  // Above the warning level
		} as IActivatedOffer;
		// Mock data for the userCredits object
		const mockUserCredits = {
			subscriptions: [mockSubscription],
			offers: [mockActive]  // You can add active offers if needed
		} as IUserCredits<string>;

		// Mock user preferences
		const mockUserPreferences = {
			warnIfExpiresIn: 1000 * 60 * 60 * 24 * 10,  // Example: 10 days
			warnIfTokensLessThan: 10  // Example: Minimum tokens for warning
		} as UserPreferences;

		// Create an instance of UserCreditsDto
		const userCreditsDto = new UserCreditsDto(mockUserCredits, mockUserPreferences);

		// Get the userGroup status from the summary list
		const userGroupStatus: Status = userCreditsDto.summaryList[0].statusSummary;

		// Assert that the userGroup status is 'ok'
		expect(userGroupStatus).toBe('ok');
	});

	it('Subscription with "paid" status along with other empty token subscriptions should mark userGroup as "ok"', () => {
		// Mock data for a subscription with "paid" status and conditions met
		const mockSubscription1 = {
			offerGroup: 'One',
			status: 'paid',
			tokens: 15  // Above the warning level
			// Add other required fields based on your implementation
		} as ISubscription<string>;
		const mockSubscription2 = {
			offerGroup: 'One',
			status: 'pending',
			tokens: 0  // Above the warning level
			// Add other required fields based on your implementation
		} as ISubscription<string>;
		const mockSubscription3 = {
			offerGroup: 'One',
			status: 'error',
			tokens: 0  // Above the warning level
			// Add other required fields based on your implementation
		} as ISubscription<string>;

		const mockActive = {
			offerGroup: 'One',
			expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 20),  // Expires in 20 days
			tokens: 15  // Above the warning level
		} as IActivatedOffer;
		// Mock data for the userCredits object
		const mockUserCredits = {
			subscriptions: [mockSubscription1, mockSubscription2, mockSubscription3],
			offers: [mockActive]  // You can add active offers if needed
		} as IUserCredits<string>;

		// Mock user preferences
		const mockUserPreferences = {
			warnIfExpiresIn: 1000 * 60 * 60 * 24 * 10,  // Example: 10 days
			warnIfTokensLessThan: 10  // Example: Minimum tokens for warning
		} as UserPreferences;

		// Create an instance of UserCreditsDto
		const userCreditsDto = new UserCreditsDto(mockUserCredits, mockUserPreferences);

		// Get the userGroup status from the summary list
		const userGroupStatus: Status = userCreditsDto.summaryList[0].statusSummary;

		// Assert that the userGroup status is 'ok'
		expect(userGroupStatus).toBe('ok');
	})
	it('Subscription with "paid" status but with expiry date lower than userPreferences limit should mark userGroup as "warn"', () => {
		// Mock data for a subscription with "paid" status and conditions met
		const mockSubscription1 = {
			offerGroup: 'One',
			status: 'paid',
			tokens: 15  // Above the warning level
			// Add other required fields based on your implementation
		} as ISubscription<string>;

		const mockActive = {
			offerGroup: 'One',
			expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 9),  // Expires in 20 days
			tokens: 15  // Above the warning level
		} as IActivatedOffer;
		// Mock data for the userCredits object
		const mockUserCredits = {
			subscriptions: [mockSubscription1],
			offers: [mockActive]  // You can add active offers if needed
		} as IUserCredits<string>;

		// Mock user preferences
		const mockUserPreferences = {
			warnIfExpiresIn: 1000 * 60 * 60 * 24 * 10,  // Example: 10 days
			warnIfTokensLessThan: 10  // Example: Minimum tokens for warning
		} as UserPreferences;

		// Create an instance of UserCreditsDto
		const userCreditsDto = new UserCreditsDto(mockUserCredits, mockUserPreferences);

		// Get the userGroup status from the summary list
		const userGroupStatus: Status = userCreditsDto.summaryList[0].statusSummary;

		// Assert that the userGroup status is 'ok'
		expect(userGroupStatus).toBe('warn');
	})
});