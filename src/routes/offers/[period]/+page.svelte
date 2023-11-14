<script>
	import { goto } from '$app/navigation';
	// import { OfferImpl } from '../lib/example/impl/model/OfferImpl';
	import Pricing from '../../../lib/comp/offer/Pricing.svelte';
	import PricingPage from '../../../lib/example/components/PricingPage.svelte';
	import OfferSwitch from '../../../lib/comp/offer/OfferSwitch.svelte';

	// const freeOffer = new OfferImpl("000", "free", 0, 0);
	// const startupOffer = new OfferImpl("001", "startup", 49, 1);
	// const enterpriseOffer = new OfferImpl("002", "enterprise", 99, 0);
	// const scaleUpOffer = new OfferImpl("003", "scaleUp", 249, 0);

	function switchOffers( event ) {
		console.log( "checked: ", event )
		goto(`/offers/${event.detail.checked ? "yearly" : "monthly"}`, { replaceState: true })
	}

	export let data;
</script>

<PricingPage>
	<OfferSwitch slot='switch' leftLabel='Monthly' rightLabel='Annual' rightLabelNote='Save 2 months' on:modified={switchOffers} checked={data.period === "yearly"}/>
	<Pricing slot='offers' offerList={data.offers} />
</PricingPage>
