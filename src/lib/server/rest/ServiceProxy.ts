import type { IMinimalId, IService } from '@user-credits/core';
import {InvalidOrderError} from "@user-credits/core";

export class ServiceProxy<K extends IMinimalId> {
	constructor(protected service: IService<K>, protected _envTags: string[] = []) {
	};

	get envTags(): string[] {
		return this._envTags;
	}

	set envTags(value: string[]) {
		this._envTags = value;
	}
	async tokensConsumed({url}): Promise<Response> {
		const userId = url.searchParams.get('userId') ?? null;
		const offerGroup = url.searchParams.get('offerGroup') ?? null;
		const count = url.searchParams.get('count') ?? null;
		const row = await this.service.tokensConsumed(userId, offerGroup, count);
		return new Response(JSON.stringify(row));
	}

	async createOrder({ url }): Promise<Response> {
		const offerId = url.searchParams.get('offerId') ?? null;
		const userId = url.searchParams.get('userId') ?? null;

		const order = await this.service.createOrder(offerId, userId);
		return  new Response(JSON.stringify(order));
	}

	async payOrder({ url }): Promise<Response> {
		const orderId = url.searchParams.get('orderId') ?? null;
		if( !orderId )
			throw new Error("orderId is mandatory")

		const order = await this.service.payOrder(orderId);
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

	async afterExecute({url}): Promise<Response> {
		const orderId = url.searchParams.get('orderId') ?? null;
		const order = await this.service.getDaoFactory().getOrderDao().findByIdStr(orderId);
        if( order === null )
            throw new InvalidOrderError("Order not found: "+ orderId);

		const userCredits = await this.service.afterExecute(order);
		return new Response( JSON.stringify(userCredits) );
	}

}
