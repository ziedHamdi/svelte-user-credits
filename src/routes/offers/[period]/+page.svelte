<script>
	import { goto } from '$app/navigation';
	import Pricing from '../../../lib/comp/offer/Pricing.svelte';
	import PricingPage from '../../../lib/example/components/PricingPage.svelte';
	import OfferSwitch from '../../../lib/comp/offer/OfferSwitch.svelte';
	import { getUserStore, createFakeUser } from '../../../lib/example/Session';

	function switchOffers(event) {
		goto(`/offers/${event.detail.checked ? 'yearly' : 'monthly'}`, { replaceState: true });
	}

	export let data;
	const user = getUserStore();

	function getPurchaseIntentFn() {
		// data would be null if we use the method body directly
		const url = data.url;
		return async ({detail}) => {
			console.log('Purchasing ', detail);
			if( !user.get() )
				createFakeUser();

			const createOrderResponse = await fetch(url + `/api/createOrder?userId=${user.get()._id}&offerId=${detail.offer._id}`);
			const order = await createOrderResponse.json();
			//{ "paymentIntentId": "pi_3OCgwmDZFldGtXtw2muSbXsH", "paymentIntentSecret": "pi_3OCgwmDZFldGtXtw2muSbXsH_secret_jN80KbfVTuyrVNKlIcVqbfnBO"}
			await goto(`/order/purchase/${order._id}/${order.paymentIntentSecret}`)
		}
	}
</script>

<PricingPage>
	<OfferSwitch slot='switch' leftLabel='Monthly' rightLabel='Annual' rightLabelNote='Save 2 months'
							 on:modified={switchOffers} checked={data.period === "yearly"} />
	<Pricing on:purchaseIntent={getPurchaseIntentFn()} slot='specialOffers' offerList={data.ebOffers} columns='3'/>
	<Pricing on:purchaseIntent={getPurchaseIntentFn()} slot='offers' offerList={data.offers} columns='4'/>
</PricingPage>
