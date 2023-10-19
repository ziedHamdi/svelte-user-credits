import { IOffer } from "user-credits";

import { IOfferProps } from '../../../model/IOfferProps';
import { IListValuePresentation, IValuePresentation} from '../../../ioc/IResourceResolver';
import { ValuePresenter } from '../../../impl/ioc/ValuePresenter';

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

	constructor(data: IOffer) {
		const name = data.name;
		if(name == "free") {
			this.name = new ValuePresenter(name);
			this.description = new ValuePresenter("Forever free" as object);
			this.price = new ValuePresenter("Free" as object);
			this.callToAction = new ValuePresenter("Create account");

		} else {
			this.name = new ValuePresenter(name);
		}
	}
}