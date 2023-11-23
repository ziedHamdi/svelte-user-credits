<script>
	import Tag from '../common/Tag.svelte';
	import Subscription from './Subscription.svelte';
	import { formatDate, safeString } from '../../core/util';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let purchase;
	let detailOpen;

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

	function toggleDetail() {
		detailOpen = !detailOpen;
	}

	function onOrderAction(orderId, operation) {
		return () => {
			dispatch('orderOperation', { orderId, operation });
		};
	}
</script>

<tr>
	<td class="h-px w-px whitespace-nowrap">
		<div class="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
			<button on:click={toggleDetail} class="flex flex-col items-start gap-x-3 px-1">
					<span class="flex flex-row gap-3 text-sm font-semibold text-blue-700 dark:text-gray-200">
						<svg class={`${detailOpen ? 'rotate-180': ''} flex-shrink-0 w-4 h-4`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
						{purchase.name}
					</span>
					<span class="ml-7 block text-sm text-gray-500">{purchase.cycle}</span>
			</button>
		</div>
	</td>
	<td class="h-px w-px whitespace-nowrap">
		<div class="px-6 py-3">
			<span class="block text-sm font-semibold text-gray-800 dark:text-gray-200">{purchase.total}</span>
			<span class="block text-sm text-gray-500">({purchase.quantity}x)</span>
		</div>
	</td>
	<td class="h-px w-px whitespace-nowrap">
		<Tag status={purchase.statusSummary} label={purchase.status}/>
	</td>
	<td class="h-px w-72 whitespace-nowrap">
		<div class="px-6 py-3">
			<div class="flex items-center gap-x-3">
				<span class="text-xs text-gray-500">{Math.round(purchase.consumption?.percentage)}%</span>
				<!-- preload used colors -->
				<div class={`flex w-full h-1.5 rounded-full overflow-hidden ${progressBgColor(purchase.consumption?.percentage)}`}>
					<div class={`flex flex-col justify-center overflow-hidden ${progressColor(purchase.consumption?.percentage)}`} role="progressbar" style={`width: ${purchase.consumption?.percentage}%`} aria-valuenow={purchase.consumption?.value} aria-valuemin={purchase.consumption?.min} aria-valuemax={purchase.consumption?.max}></div>
				</div>
			</div>
		</div>
	</td>
	<td class="h-px w-px whitespace-nowrap">
		<div class="px-6 py-3">
			<div class="flex items-center gap-x-3">
				<span class="text-sm text-gray-500 font-semibold">{safeString(purchase.consumption?.value)}/{safeString(purchase.consumption?.max)}</span>
			</div>
		</div>
	</td>
	<td class="h-px w-px whitespace-nowrap">
		<div class="px-6 py-3">
			<span class="block text-sm font-semibold text-gray-800 dark:text-gray-200">{formatDate(purchase.expires) ?? '-'}</span>
			<span class="block text-sm text-gray-500">{formatDate(purchase.starts)}</span>
		</div>
	</td>
	<td class="h-px w-px whitespace-nowrap">
		<div class="px-6 py-1.5">
			<!-- buttons -->
					<button on:click={onOrderAction(purchase.offerGroup, "detail")} type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
						History
						<svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
							<path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"></path>
							<path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"></path>
						</svg>
					</button>
			</div>
			<!-- end buttons -->
	</td>
</tr>

{#if detailOpen}
		{#each purchase.purchaseGroup as subscription (subscription._id)}
			<Subscription {subscription} active={purchase.consumption} on:orderOperation/>
		{/each}
{/if}
