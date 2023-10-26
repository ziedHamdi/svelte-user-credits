<script>
	import { OfferImpl } from '../lib/example/impl/model/OfferImpl';
	import Pricing from '../lib/comp/Pricing.svelte';
	import PricingPage from '../lib/example/components/PricingPage.svelte';
	import OfferSwitch from '../lib/comp/OfferSwitch.svelte';

	const freeOffer = new OfferImpl("000", "free", 0, 0);
	const startupOffer = new OfferImpl("001", "startup", 49, 1);
	const scaleupOffer = new OfferImpl("002", "scaleup", 99, 0);
	const entrepriseOffer = new OfferImpl("003", "enterprise", 249, 0);

	function switchOffers( value ) {
		console.log( "checked: ", value )
	}
</script>

<PricingPage>
	<OfferSwitch slot='switch' leftLabel='Monthly' rightLabel='Annual' rightLabelNote='Save up to 10%' on:modified={switchOffers}/>
	<Pricing slot='offers' offerList={[freeOffer, startupOffer, scaleupOffer, entrepriseOffer]} />
</PricingPage>
