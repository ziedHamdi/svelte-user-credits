import type { Readable, Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export class ReadableStore<T> implements Readable<T>{
	protected store: Writable<T>;
	protected currentValue: T;
	protected subscribe;

	constructor(initialValue: T) {
		this.store = writable(initialValue);
		this.subscribe = this.store.subscribe
	}

	set(value: T): void {
		this.currentValue = value;
		this.store.set(value);
	}

	get(): T {
		return this.currentValue
	}
}