<!-- Pricing -->
<script>
	import Offer from './Offer.svelte';

	export let offerList;
	export let gridCols = "sm:grid-cols-2 lg:grid-cols-4";
</script>

<!-- Grid putting unused styles just to load them dynamically with ${gridCols}-->
<div class={`mt-12 grid ${gridCols} gap-6 lg:items-center`}>
	{#each offerList as offer (offer._id)}
		<Offer offer={offer} on:purchaseIntent/>
	{/each}
</div>
<!-- End Grid -->
<!-- End Pricing -->

