export function asPojo(obj: object) {
	// fastify might do this faster, or handle it in backend
	return JSON.parse(JSON.stringify(obj));
}