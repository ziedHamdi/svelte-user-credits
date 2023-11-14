<script>
	import { goto } from '$app/navigation';
	import Pricing from '../../../lib/comp/offer/Pricing.svelte';
	import PricingPage from '../../../lib/example/components/PricingPage.svelte';
	import OfferSwitch from '../../../lib/comp/offer/OfferSwitch.svelte';

	function switchOffers(event) {
		goto(`/offers/${event.detail.checked ? 'yearly' : 'monthly'}`, { replaceState: true });
	}

	function purchaseIntent({detail}) {
		console.log( "Purchasing ", detail )
	}
	export let data;
</script>

<PricingPage>
	<OfferSwitch slot='switch' leftLabel='Monthly' rightLabel='Annual' rightLabelNote='Save 2 months'
							 on:modified={switchOffers} checked={data.period === "yearly"} />
	<Pricing on:purchaseIntent={purchaseIntent} slot='offers' offerList={data.offers}/>
	<Pricing on:purchaseIntent={purchaseIntent} slot='specialOffers' offerList={data.ebOffers} columns='3'/>
</PricingPage>
