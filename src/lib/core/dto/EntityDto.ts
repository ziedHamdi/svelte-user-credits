import type { IBaseEntity, IMinimalId } from "@user-credits/core";

export class EntityDto<K extends IMinimalId, M extends IBaseEntity<K>> {
	constructor( protected delegate: M ) {
	}

	get _id(): K {
		return this.delegate._id
	}
}