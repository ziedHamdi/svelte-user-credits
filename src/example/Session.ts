import { BROWSER } from 'esm-env';
import ObjectId from 'bson-objectid';
import { getContext, setContext } from 'svelte';
import { ReadableStore } from '$lib';

export const LOGGED_USER = 'LOGGED_USER';
// Create the resolver store
export type IUser = { _id: string, name: string }

const userResolver = new ReadableStore<IUser>(null);
// Create the context
export const userResolverContext = () => {
	setContext(LOGGED_USER, userResolver);

	return {
		setUser: (value: IUser) => userResolver.set(value),
		getUser: () => getContext(LOGGED_USER)
	};
};

export function getUserStore(createIfNone: boolean = false): ReadableStore<IUser> {
	const userStore = getContext(LOGGED_USER) as ReadableStore<IUser>;
	if( BROWSER && !userStore.get() ) {
		const found = loadFromLocalStorage();
		if ( createIfNone && !found)
			createFakeUser();
	}

	return userStore;
}

export function loadFromLocalStorage() {
	const userJson = window.localStorage.getItem('user');
	if (userJson) {
		userResolver.set(JSON.parse(userJson));
	}
	return !!userJson;
}

export function createFakeUser() {
		const user = { _id: new ObjectId().toString(), name: 'John Doe' } as IUser;
		userResolver.set(user);
		const userJson = JSON.stringify(user);
		window.localStorage.setItem('user', userJson);
		window.alert('A fictive user was created to represent you for this demo: ' + user.name);
}

