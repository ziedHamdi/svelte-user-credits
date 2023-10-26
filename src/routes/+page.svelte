<script>
	import { OfferImpl } from '../lib/example/impl/model/OfferImpl';
	import Pricing from '../lib/components/Pricing.svelte';
	import PricingPage from '../lib/example/components/PricingPage.svelte';
	import Offer from '../lib/components/Offer.svelte';
	import OfferSwitch from '../lib/components/OfferSwitch.svelte';

	const freeOffer = new OfferImpl("000", "free", 0, 0);
	const startupOffer = new OfferImpl("001", "startup", 0, 1);
	const scaleupOffer = new OfferImpl("002", "scaleup", 0, 0);
	const entrepriseOffer = new OfferImpl("003", "enterprise", 0, 0);

	function switchOffers( value ) {
		console.log( "checked: ", value )
	}
</script>

<PricingPage>
	<OfferSwitch slot='switch' leftLabel='Monthly' rightLabel='Annual' rightLabelNote='Save up to 10%' on:modified={switchOffers}/>
	<Pricing slot='offers' offerList={[freeOffer, startupOffer, scaleupOffer, entrepriseOffer]} />
</PricingPage>
