<script>
	import { OfferImpl } from '../lib/example/impl/model/OfferImpl';
	import Pricing from '../lib/components/Pricing.svelte';

	const freeOffer = new OfferImpl("000", "free", 0, 0);
	const startupOffer = new OfferImpl("001", "startup", 0, 1);
</script>

<h1>Welcome to Svelte User Credits </h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Pricing offerList={[freeOffer, startupOffer]} />