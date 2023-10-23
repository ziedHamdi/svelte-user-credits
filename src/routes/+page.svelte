<script>
	import Offer from '../lib/components/Offer.svelte';
	import { OfferImpl } from '../lib/example/impl/model/OfferImpl';

	const freeOffer = new OfferImpl("000", "free", 0);
</script>

<h1>Welcome to Svelte User Credits </h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Offer offer={freeOffer}/>