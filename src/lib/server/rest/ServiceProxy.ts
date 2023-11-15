import type { IMinimalId, IService } from '@user-credits/core';

export class ServiceProxy<K extends IMinimalId> {
	constructor(protected service: IService<K>, protected _envTags: string[] = []) {
	};

	get envTags(): string[] {
		return this._envTags;
	}

	set envTags(value: string[]) {
		this._envTags = value;
	}
	// afterExecute(order: IOrder<K>): Promise<IUserCredits<K>> {
	// 	return Promise.resolve(undefined);
	// }

	async createOrder({ url }): Promise<Response> {
		const offerId = url.searchParams.get('offerId') ?? null;
		const userId = url.searchParams.get('userId') ?? null;

		const order = await this.service.createOrder(offerId, userId);
		return  new Response(JSON.stringify(order));
	}

	async loadOffers({ url }): Promise<Response> {
		const userId = url.searchParams.get('userId') ?? null;
		const reqEnvTagStr = url.searchParams.get('envTags') ?? null;
		const reqEnvTags = reqEnvTagStr ? JSON.parse(reqEnvTagStr) : [];
		const envTags = [...this._envTags, ...reqEnvTags]

		const offers = await this.service.loadOffers(userId, envTags);
		return  new Response(JSON.stringify(offers));
	}

	async loadUserCredits({url}): Promise<Response> {
		const userId = url.searchParams.get('userId') ?? null;

		const userCredits = await this.service.loadUserCredits(userId);
		return  new Response(JSON.stringify(userCredits));
	}


}
