import { IValuePresentation } from './IValuePresentation';
import { IGeneratorData } from './IResourceResolver';

/**
 * A list of values along with its container and header specification
 */
export interface IListValuePresentation {
	buildItems<T extends IGeneratorData<T>>(data: T[], transform: (t: T) => IValuePresentation): void;

	/**
	 * Specs for the container: typically a <ul> or <ol> element in html
	 */
	container: IValuePresentation;
	/**
	 * Specs for the header that announces the list
	 */
	header: IValuePresentation;
	/**
	 * The list, ready to be used by an atomic presenting component
	 */
	items: IValuePresentation[] | null;
}