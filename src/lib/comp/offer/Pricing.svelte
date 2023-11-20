<!-- Pricing -->
<script>
	import Offer from './Offer.svelte';

	export let offerList;
	export let columns = 4;
</script>

<!-- Grid putting unused styles just to load them dynamically with ${columns}-->
<div class={`mt-12 grid sm:grid-cols-2 lg:grid-cols-${columns} grid-cols-4 gap-6 lg:items-center`}>
	{#each offerList as offer (offer._id)}
		<Offer offer={offer} on:purchaseIntent/>
	{/each}
</div>
<!-- End Grid -->
<!-- End Pricing -->

