import { browser } from '$app/environment';

export function getUser() {
	if(!browser)
		return false;
	const userJson = window.localStorage.getItem('user');
	if (userJson)
		return JSON.parse(userJson);

	return null;
}
