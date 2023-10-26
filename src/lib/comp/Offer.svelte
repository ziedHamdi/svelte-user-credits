<script>
	import { getContext } from 'svelte';

	import { RESOLVER } from '../ioc/resolverContext';

	let resolver = getContext(RESOLVER); // To store the current value of resolver

	// Subscribe to changes in the resolver store
	export let offer;
	// let offerProps: IOfferProps = $resolver.getObject<IOfferProps>({ type:'OfferProps' } as ResourceDomain, offer) as IOfferProps;
	let offerDto = $resolver.getObject({ type: 'Offer' }, offer);
</script>

	<!-- Card -->
	<div class='flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-gray-700'>
		<h4 class='font-medium text-lg text-gray-800 dark:text-gray-200'>{offerDto.name}</h4>
		<span class='mt-7 font-bold text-5xl text-gray-800 dark:text-gray-200'>{offerDto.price}</span>
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

