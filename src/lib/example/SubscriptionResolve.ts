import { EntityDto } from '../core/dto/EntityDto';
import type { IMinimalId } from '@user-credits/core';
import { UserCreditsDto } from '../core/dto/UserCreditsDto';
import type { IBaseEntity } from '@user-credits/core';
import { UserPreferences } from '../core/UserPreferences';

export function resolveSubscription<K extends IMinimalId, M extends IBaseEntity<K>>(data: M, userPreferences: UserPreferences): EntityDto<K, M> {
	return new UserCreditsDto<K>(data, userPreferences) as EntityDto<K, M>;
}