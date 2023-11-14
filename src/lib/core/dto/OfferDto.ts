import type { IMinimalId, IOffer } from "@user-credits/core";
import { EntityDto } from './EntityDto';

export class OfferDto<K extends IMinimalId> extends EntityDto<K, IOffer<K>> {
	description: string;
	advantages: Map<string, string>;
	callToAction: string;
	highlightingMessage: string;
	constructor(offer: IOffer<K>) {
		super(offer);
	}

	get name(): string {
		return this.delegate.name
	};

	get price(): number {
		return this.delegate.price
	}

	get higlighted(): boolean {
		return this.highlightingMessage != null;
	}

}