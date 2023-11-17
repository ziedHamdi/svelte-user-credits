<script>
	import { goto } from '$app/navigation';
	import Pricing from '../../../lib/comp/offer/Pricing.svelte';
	import PricingPage from '../../../lib/example/components/PricingPage.svelte';
	import OfferSwitch from '../../../lib/comp/offer/OfferSwitch.svelte';
	import ObjectId from "bson-objectid";

	function switchOffers(event) {
		goto(`/offers/${event.detail.checked ? 'yearly' : 'monthly'}`, { replaceState: true });
	}

	export let data;
	function getPurchaseIntentFn() {
		// data would be null if we use the method body directly
		const url = data.url;
		return async ({detail}) => {
			console.log('Purchasing ', detail);
			let userJson = window.localStorage.getItem('user');
			if (!userJson) {
				const user = { _id: new ObjectId().toString(), name: 'John Doe' };
				userJson = JSON.stringify(user);
				window.localStorage.setItem('user', userJson);
				window.alert('A user was created to represent you for this demo: ' + user.name);
			} else {
				window.alert('You are already logged as: ' + JSON.parse(userJson).name + ' for this demo.');
			}
			const user = JSON.parse(userJson);
			const createOrderResponse = await fetch(url + `/createOrder?userId=${user._id}&offerId=${detail.offer._id}`);
			const order = await createOrderResponse.json();
			//{ "paymentIntentId": "pi_3OCgwmDZFldGtXtw2muSbXsH", "paymentIntentSecret": "pi_3OCgwmDZFldGtXtw2muSbXsH_secret_jN80KbfVTuyrVNKlIcVqbfnBO"}
			await goto(`/order/purchase/${order._id}/${order.paymentIntentSecret}`)
		}
	}
</script>

<PricingPage>
	<OfferSwitch slot='switch' leftLabel='Monthly' rightLabel='Annual' rightLabelNote='Save 2 months'
							 on:modified={switchOffers} checked={data.period === "yearly"} />
	<Pricing on:purchaseIntent={getPurchaseIntentFn()} slot='offers' offerList={data.offers}/>
	<Pricing on:purchaseIntent={getPurchaseIntentFn()} slot='specialOffers' offerList={data.ebOffers} columns='3'/>
</PricingPage>
