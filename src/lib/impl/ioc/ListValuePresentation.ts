import { IListValuePresentation, IValuePresentation } from '../../ioc/IResourceResolver';

export class ListValuePresentation implements IListValuePresentation {
	container: IValuePresentation;
	header: IValuePresentation;
	items: IValuePresentation[] | null;


}