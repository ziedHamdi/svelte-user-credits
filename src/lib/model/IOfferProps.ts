import { IListValuePresentation, IValuePresentation, IGeneratorData } from '../ioc/IResourceResolver';

export interface IOfferProps extends IGeneratorData<IOfferProps>{
	name: IValuePresentation | null;
	price: IValuePresentation | null;
	description: IValuePresentation | null;
	users: IValuePresentation | null;
	planFeatures: IValuePresentation | null;
	support: IValuePresentation | null;
	signUpLink: IValuePresentation | null;
	callToAction: IValuePresentation | null; // Added to handle the call to action
	advantages: IListValuePresentation | null;
}