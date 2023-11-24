import { IMinimalId } from '@user-credits/core';

export class ConsumptionDto<K extends IMinimalId> {
	constructor(public activeOrderId:K, public max: number, public min: number, public value: number, public remainingMode:boolean = false){
	}

	get percentage(): number {
		if( this.remainingMode)
		return (this.value) / (this.max - this.min) * 100
		else
		return (this.value - this.min) / (this.max - this.min) * 100
	}
}