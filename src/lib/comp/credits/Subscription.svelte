<script>
	import Tag from '../common/Tag.svelte';
	import { createEventDispatcher } from 'svelte';
	import { formatDate, safeString } from '../../core/util';

	const dispatch = createEventDispatcher();

	export let subscription;
	export let active;

	function progressColor(value) {
		if (value > 50)
			return 'teal';
		if (value > 20)
			return 'amber';
		return 'red';
	}

	function asTagStatus(value) {
		if (value === 'paid')
			return 'ok';
		if (value === 'pending')
			return 'warn';
		if (value === 'error' || value === 'refused')
			return 'error';
		return value;
	}

	function onOrderAction(orderId, operation) {
		return () => {
			dispatch('orderOperation', { orderId, operation });
		};
	}

	function getConsumed() {
		if (subscription._id === active.activeOrderId) {
			return safeString(active.value);
		} else if (subscription.status === 'paid') {
			return safeString(subscription.tokens);
		} else {
			return 0;
		}
	}

	function getRemainigPercentage() {
		return Math.round((getConsumed()/subscription.tokens)*100)
	}

</script>

<tr>
	<td class='h-px w-px whitespace-nowrap'>
		<div class='ps-6 py-3 ml-4'>
			<label for='hs-at-with-checkboxes-1' class='flex'>
				<input type='checkbox'
							 class='shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800'
							 id='hs-at-with-checkboxes-1'>
				<span class='sr-only'>Checkbox</span>
			</label>
		</div>
	</td>
	<td class='h-px w-px whitespace-nowrap'>
		<div class='ps-6 lg:ps-3 xl:ps-0 pe-6 py-3'>
			<div class='flex items-center gap-x-3'>
				<div class='grow'>
					<span class='block text-sm text-gray-500'>{subscription.cycle}</span>
				</div>
			</div>
		</div>
	</td>
	<td class='h-px w-px whitespace-nowrap'>
		<div class='px-6 py-3'>
			<span class='block text-sm text-gray-800 dark:text-gray-200'>{subscription.total}</span>
			<span class='block text-sm text-gray-500'>({subscription.quantity ?? 1}x)</span>
		</div>
	</td>
	<td class='h-px w-px whitespace-nowrap'>
		<Tag status={asTagStatus(subscription.status)} label={subscription.status} />
	</td>
	<td class='h-px w-72 whitespace-nowrap'>
		<div class='px-6 py-3'>
			<div class='flex items-center gap-x-3'>
				<span class='text-xs text-gray-500'>{getRemainigPercentage()}%</span>
				<!-- preload used colors -->
				<div
					class='flex w-full h-1.5 bg-teal-700 bg-amber-700 bg-red-700 bg-gray-200 rounded-full overflow-hidden dark:bg-teal-200 dark:bg-amber-200 dark:bg-red-200 dark:bg-gray-700'>
					<div
						class={`flex flex-col justify-center overflow-hidden bg-${progressColor(subscription.consumption?.percentage)}-700 dark:bg-${progressColor(subscription.consumption?.percentage)}-200`}
						role='progressbar' style={`width: ${subscription.consumption?.percentage}%`}
						aria-valuenow={getConsumed()} aria-valuemin={0}
						aria-valuemax={subscription.tokenCount}></div>
				</div>
			</div>
		</div>
	</td>
	<td class='h-px w-px whitespace-nowrap'>
		<div class='px-6 py-3'>
			<span class='block text-sm text-gray-800 dark:text-gray-200'>{getConsumed()}
				/{safeString(subscription.tokens)}</span>
		</div>
	</td>
	<td class='h-px w-px whitespace-nowrap'>
		<div class='px-6 py-3'>
			<span
				class='block text-sm font-semibold text-gray-800 dark:text-gray-200'>{formatDate(subscription.expires) ?? '-'}</span>
			<span class='block text-sm text-gray-500'>{formatDate(subscription.starts)}</span>
		</div>
	</td>
	<td class='h-px w-px whitespace-nowrap'>
		<div class='px-6 py-1.5'>
			{#if (subscription.status !== "paid")}
				<button aria-roledescription='attempt payment again'
								class='cursor-pointer inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
								on:click={onOrderAction(subscription.orderId, "pay")}>
					Pay now
				</button>

				<button aria-roledescription='cancel payment order'
								class='cursor-pointer inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
								on:click={onOrderAction(subscription.orderId, "delete")}>
					Cancel
				</button>
			{:else }
				<button aria-roledescription='cancel payment order'
								class='cursor-pointer inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
								on:click={onOrderAction(subscription.offerGroup, "history")}>
					History
				</button>
			{/if}
		</div>
	</td>
</tr>
