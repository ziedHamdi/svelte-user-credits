import { IGeneratorData} from '../../ioc/IResourceResolver';
import { IValuePresentation } from '../../ioc/IValuePresentation';
import { IListValuePresentation } from '../../ioc/IListValuePresentation';

export class ListValuePresenter implements IListValuePresentation {
	protected _container: IValuePresentation | null;
	protected _header: IValuePresentation | null;
	protected _items: IValuePresentation[] | null;

	buildItems<T extends IGeneratorData<T>>( data:T[], transform:(t:T) => IValuePresentation ):void {
		this._items = data.map(transform);
	}

	get container(): IValuePresentation | null {
		return this._container;
	}

	set container(value: IValuePresentation | null) {
		this._container = value;
	}

	get header(): IValuePresentation | null {
		return this._header;
	}

	set header(value: IValuePresentation | null) {
		this._header = value;
	}

	get items(): IValuePresentation[] | null {
		return this._items;
	}

	set items(value: IValuePresentation[] | null) {
		this._items = value;
	}
}