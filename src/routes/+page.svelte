<script>
	import { OfferImpl } from '../lib/example/impl/model/OfferImpl';
	import Pricing from '../lib/components/Pricing.svelte';

	const freeOffer = new OfferImpl("000", "free", 0, 0);
	const startupOffer = new OfferImpl("001", "startup", 0, 1);
	const scaleupOffer = new OfferImpl("002", "scaleup", 0, 0);
	const entrepriseOffer = new OfferImpl("003", "enterprise", 0, 0);
</script>

<Pricing offerList={[freeOffer, startupOffer, scaleupOffer, entrepriseOffer]} />