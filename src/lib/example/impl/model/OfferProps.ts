import { IOffer } from 'user-credits';

import { IOfferProps } from '../../../model/IOfferProps';
import { ValuePresenter } from '../../../impl/ioc/ValuePresenter';
import { ListValuePresenter } from '../../../impl/ioc/ListValuePresenter';
import { IValuePresentation } from '../../../ioc/IValuePresentation';
import { IListValuePresentation } from '../../../ioc/IListValuePresentation';

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
		switch (name) {
			case 'free': {
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
				break;
			}
			case 'startup': {
				this.name = new ValuePresenter("Startup");
				this.description = new ValuePresenter('All the basics for starting a new business' as object);
				this.price = new ValuePresenter('39' as object);
				this.advantages = new ListValuePresenter();
				this.advantages.buildItems(
					['10 users',
						'Plan features',
						'Product support'],
					this.presentAdvantage
				);
				this.callToAction = new ValuePresenter('Sign up');
				break;
			}
			case 'scaleup': {
				this.name = new ValuePresenter("Scaleup");
				this.description = new ValuePresenter('Everything you need for a growing business' as object);
				this.price = new ValuePresenter('99' as object);
				this.advantages = new ListValuePresenter();
				this.advantages.buildItems(
					['50 users',
						'Plan features',
						'Product support'],
					this.presentAdvantage
				);
				this.callToAction = new ValuePresenter('Sign up');
				break;
			}
			case 'enterprise': {
				this.name = new ValuePresenter("Enterprise");
				this.description = new ValuePresenter('Advanced features for international businesses' as object);
				this.price = new ValuePresenter('249' as object);
				this.advantages = new ListValuePresenter();
				this.advantages.buildItems(
					['150 users',
						'Plan features',
						'Product support'],
					this.presentAdvantage
				);
				this.callToAction = new ValuePresenter('Sign up');
				break;
			}
		}
	}

	protected presentAdvantage(t: string) {
		const toReturn = new ValuePresenter(t);
		toReturn.prefixElement = "blueCheck";
		return toReturn;
	}
}