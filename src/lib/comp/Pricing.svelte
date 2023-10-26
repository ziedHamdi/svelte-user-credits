<!-- Pricing -->
<script>
	import Offer from './Offer.svelte';

	export let offerList;
</script>

<!-- Grid -->
<div class='mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-center'>
	{#each offerList as offer (offer._id)}
		<Offer offer={offer} />
	{/each}
</div>
<!-- End Grid -->
<!-- End Pricing -->

