<script>
	import { getContext } from 'svelte';

	import { buildClass } from '../core/util';
	import { RESOLVER } from '../ioc/resolverContext';
	import Gen from '../core/Gen.svelte';
	import GenList from '../core/GenList.svelte';

	let resolver = getContext(RESOLVER); // To store the current value of resolver

	// Subscribe to changes in the resolver store
	export let offer;
	let highlighted = offer.weight > 0;
	const weightCls = highlighted ? 'flex flex-col border-2 border-blue-600 text-center shadow-xl rounded-xl p-8 dark:border-blue-700' : 'flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-gray-700';
	const buttonCls = highlighted
		? 'cursor-pointer mt-5 inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800'
		: 'cursor-pointer mt-5 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:text-blue-500 dark:border-blue-600 dark:hover:border-blue-700';
	let offerProps = $resolver.getObject({ type: 'Offer' }, offer);
</script>

<!-- Card -->
<div class={weightCls}>
	{#if highlighted}
		<p class='mb-3'><span
			class='inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs uppercase font-semibold bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-white'
			data-svelte-h='svelte-147tm9t'>Most popular</span></p>
	{/if}
	<Gen data={offerProps.name} comp='h4' cls='font-medium text-lg text-gray-800 dark:text-gray-200' />
	<Gen data={offerProps.price} comp='span' cls='mt-7 font-bold text-5xl text-gray-800 dark:text-gray-200'>
		<span slot='prefix' class={`font-bold text-2xl -mr-2 ${isNaN(offerProps.price.value) ? 'hidden' : ''}`}
					data-svelte-h='svelte-1jg2leb'>$</span>
	</Gen>
	<Gen data={offerProps.description} comp='p' cls='mt-2 text-sm text-gray-500' />
	<GenList data={offerProps.advantages} comp='ul' cls='mt-7 space-y-2.5 text-sm' />

	{#if offerProps.callToAction}
		<a
			class={buildClass(buttonCls, offerProps.callToAction)}
			href={offerProps.callToAction.link}>
			{offerProps.callToAction.value}
		</a>
	{/if}
</div>
<!-- End Card -->

