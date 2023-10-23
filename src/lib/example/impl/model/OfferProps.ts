import { IOffer } from 'user-credits';

import { IOfferProps } from '../../../model/IOfferProps';
import { IListValuePresentation, IValuePresentation } from '../../../ioc/IResourceResolver';
import { ValuePresenter } from '../../../impl/ioc/ValuePresenter';
import { ListValuePresenter } from '../../../impl/ioc/ListValuePresenter';

export class OfferProps implements IOfferProps {
	advantages: IListValuePresentation | null;
	callToAction: IValuePresentation | null;
	description: IValuePresentation | null;
	name: IValuePresentation | null;
	planFeatures: IValuePresentation | null;
	price: IValuePresentation | null;
	signUpLink: IValuePresentation | null;
	support: IValuePresentation | null;
	users: IValuePresentation | null;

	constructor(data: IOffer<string>) {
		const name = data.name;
		if (name == 'free') {
			this.name = new ValuePresenter(name);
			this.description = new ValuePresenter('Forever free' as object);
			this.price = new ValuePresenter('Free' as object);
			this.advantages = new ListValuePresenter();
			this.advantages.buildItems(
				['1 user',
					'Plan features',
					'Product support'],
				this.presentAdvantage
			);
			this.callToAction = new ValuePresenter('Create account');

		} else {
			this.name = new ValuePresenter(name);
		}
	}

	protected presentAdvantage(t: string) {
		const toReturn = new ValuePresenter(t);
		toReturn.prefixElement = "greenCheck";
		return toReturn;
	}
}