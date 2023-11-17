export class Consumption {
	constructor(public max: number, public min: number, public value: number){
	}

	get percentage(): number {
		return (this.value - this.min) / (this.max - this.min) * 100
	}
}