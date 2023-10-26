import { BaseEntity, MinimalId } from 'user-credits';

export class EntityDto<K extends MinimalId, M extends BaseEntity<K>> {
	constructor( protected delegate: M ) {
	}

	get _id(): K {
		return this.delegate._id
	}
}