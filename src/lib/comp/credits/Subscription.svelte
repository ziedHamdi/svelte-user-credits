<script>
	import Tag from '../common/Tag.svelte';
	import { createEventDispatcher } from 'svelte';
	import { formatDate, safeString } from '../../core/util';

	const dispatch = createEventDispatcher();

	export let subscription;
	export let active;

	function progressColor(value) {
		if (value > 50)
			return 'bg-teal-700 dark:bg-teal-200';
		if (value > 20)
			return 'bg-orange-400 dark:bg-orange-200';
		return 'bg-red-600 dark:bg-red-200' + value;
	}

	function progressBgColor(value) {
		if (value > 50)
			return 'bg-[#afd9d5] dark:bg-teal-200';
		if (value > 20)
			return 'bg-orange-100 dark:bg-orange-100';
		return 'bg-red-100 dark:bg-red-100' + value;
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

	function getRemaining() {
		if (active && subscription._id === active.activeOrderId) {
			let value = active.value % subscription.tokens;
			// if fully charged, the modulo will return 0
			if( active.value > 0 && value === 0 )
				value = subscription.tokens;
			return safeString( value.toString() );
		} else if (subscription.status === 'paid') {
			return safeString(subscription.tokens);
		} else {
			return 0;
		}
	}

	function getRemainingPercentage() {
		return Math.round((getRemaining() / subscription.tokens) * 100);
	}

</script>

<tr class='bg-gray-50'>
	<td class='ml-8 block text-sm text-gray-500'>
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
				<span class='text-xs text-gray-500'>{getRemainingPercentage()}%</span>
				<!-- preload used colors -->
				<div
					class={`flex w-full h-1.5 rounded-full overflow-hidden ${progressBgColor(getRemainingPercentage())}`}>
					<div
						class={`flex flex-col justify-center overflow-hidden ${progressColor(getRemainingPercentage())}`}
						role='progressbar' style={`width: ${getRemainingPercentage()}%`}
						aria-valuenow={getRemaining()} aria-valuemin={0}
						aria-valuemax={subscription.tokenCount}></div>
				</div>
			</div>
		</div>
	</td>
	<td class='h-px w-px whitespace-nowrap'>
		<div class='px-6 py-3'>
			<span class='block text-sm text-gray-800 dark:text-gray-200'>{getRemaining()}
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
				<div
					class='group inline-flex items-center divide-x divide-gray-300 border border-gray-300 bg-white shadow-sm rounded-lg transition-all dark:divide-gray-700 dark:bg-slate-700 dark:border-gray-700'>
					<button on:click={onOrderAction(subscription.orderId, "pay")}
									class='py-1.5 px-2 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-s-md bg-white text-gray-600 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'>
						Pay Now
						<svg class='w-5 h-5' width='400' height='248' viewBox='0 0 400 248' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<g clip-path='url(#clip05asd)'>
								<path d='M254 220.8H146V26.4H254V220.8Z' fill='#FF5F00'></path>
								<path
									d='M152.8 123.6C152.8 84.2 171.2 49 200 26.4C178.2 9.2 151.4 0 123.6 0C55.4 0 0 55.4 0 123.6C0 191.8 55.4 247.2 123.6 247.2C151.4 247.2 178.2 238 200 220.8C171.2 198.2 152.8 163 152.8 123.6Z'
									fill='#EB001B'></path>
								<path
									d='M400 123.6C400 191.8 344.6 247.2 276.4 247.2C248.6 247.2 221.8 238 200 220.8C228.8 198.2 247.2 163 247.2 123.6C247.2 84.2 228.8 49 200 26.4C221.8 9.2 248.6 0 276.4 0C344.6 0 400 55.4 400 123.6Z'
									fill='#F79E1B'></path>
							</g>
							<defs>
								<clipPath id='clip05asd'>
									<rect width='400' height='247.2' fill='white'></rect>
								</clipPath>
							</defs>
						</svg>
					</button>
					<div class=''>
						<button on:click={onOrderAction(subscription.orderId, "delete")} type='button'
										class='py-1.5 px-2 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-s-md bg-white text-gray-600 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'>
							Delete
							<svg class='w-3.5 h-3.5' xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='#FF5F00'
									 viewBox='0 0 16 16'>
								<path
									d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z'></path>
							</svg>
						</button>
					</div>
				</div>
			{:else }
					<button on:click={onOrderAction(subscription.orderId, "history")}
									class='py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
									>
						Operations history
						<svg class='w-5 h-5' width='400' height='248' viewBox='0 0 400 248' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<g clip-path='url(#clip05asd)'>
								<path d='M254 220.8H146V26.4H254V220.8Z' fill='#FF5F00'></path>
								<path
									d='M152.8 123.6C152.8 84.2 171.2 49 200 26.4C178.2 9.2 151.4 0 123.6 0C55.4 0 0 55.4 0 123.6C0 191.8 55.4 247.2 123.6 247.2C151.4 247.2 178.2 238 200 220.8C171.2 198.2 152.8 163 152.8 123.6Z'
									fill='#EB001B'></path>
								<path
									d='M400 123.6C400 191.8 344.6 247.2 276.4 247.2C248.6 247.2 221.8 238 200 220.8C228.8 198.2 247.2 163 247.2 123.6C247.2 84.2 228.8 49 200 26.4C221.8 9.2 248.6 0 276.4 0C344.6 0 400 55.4 400 123.6Z'
									fill='#F79E1B'></path>
							</g>
							<defs>
								<clipPath id='clip05asd'>
									<rect width='400' height='247.2' fill='white'></rect>
								</clipPath>
							</defs>
						</svg>
					</button>
			{/if}
		</div>
	</td>
</tr>
