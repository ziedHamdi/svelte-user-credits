<script>
	import { getContext } from 'svelte';

	import { RESOLVER } from '../ioc/resolverContext';

	let resolver = getContext(RESOLVER); // To store the current value of resolver

	// Subscribe to changes in the resolver store
	export let offer;
	// let offerProps: IOfferProps = $resolver.getObject<IOfferProps>({ type:'OfferProps' } as ResourceDomain, offer) as IOfferProps;
	let offerDto = $resolver.getObject({ type: 'Offer' }, offer);
	let borderClass = offerDto.higlighted ? 'flex flex-col border-2 border-blue-600 text-center shadow-xl rounded-xl p-8 dark:border-blue-700' : 'flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-gray-700';
</script>

<!-- Card -->
<div class={borderClass}>
	{#if offerDto.higlighted}
		<p class='mb-3'><span
			class='inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs uppercase font-semibold bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-white'>{offerDto.highlightingMessage}</span>
		</p>
	{/if}
	<h4 class='font-medium text-lg text-gray-800 dark:text-gray-200 capitalize'>{offerDto.name}</h4>

	{#if offerDto.price == 0}
		<span class='mt-7 font-bold text-5xl text-gray-800 dark:text-gray-200'>
			Free
		</span>
	{:else}
		<span class='mt-7 font-bold text-5xl text-gray-800 dark:text-gray-200'>
			<span class='font-bold text-2xl -mr-2'>$</span>
			{offerDto.price}
		</span>
	{/if}
	<p class='mt-2 text-sm text-gray-500'>{offerDto.description}</p>
	<ul class='mt-7 space-y-2.5 text-sm'>
		{#each offerDto.advantages as advantage, index (index)}
			{#if advantage}
				<li class='flex space-x-2'>
					{advantage.prefixElement ?? ''}
					<span class='text-gray-800 dark:text-gray-400'>{advantage}</span>
					{advantage.suffixElement ?? ''}
				</li>
			{/if}
		{/each}
	</ul>
	<button
		class='mt-5 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:text-blue-500 dark:border-blue-600 dark:hover:border-blue-700'>
		{offerDto.callToAction}
	</button>
</div>
<!-- End Card -->

