import { beforeStartup } from './hooks/init';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	await beforeStartup();
	return await resolve(event);
}