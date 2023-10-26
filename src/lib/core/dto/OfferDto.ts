import { MinimalId, IOffer } from 'user-credits';
import { EntityDto } from './EntityDto';

export class OfferDto<K extends MinimalId> extends EntityDto<K, IOffer<K>> {
	description: string;
	advantages: Map<string, string>;
	callToAction: string;
	constructor(offer: IOffer<K>) {
		super(offer);
	}

	get name(): string {
		return this.delegate.name
	};

	get price(): string {
		return this.delegate.price == 0 ? "free" : ""+this.delegate.price
	}

}