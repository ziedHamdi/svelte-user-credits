<script>
	import { getContext } from 'svelte';
	import { RESOLVER } from '../../../lib/ioc/resolverContext';
	import Billing from '../../../lib/comp/credits/Billing.svelte';
	import { goto } from '$app/navigation';

	let resolver = getContext(RESOLVER); // To store the current value of resolver

	export let data;
	$: userCreditsDto = data?.credits ? $resolver.buildDto({ type: 'UserCredits' }, data?.credits) : null;

	async function purchaseRetryIntent({detail}) {
		const createOrderResponse = await fetch(`/payOrder?orderId=${detail.orderId}`);
		const order = await createOrderResponse.json();
		await goto(`/order/purchase/${order._id}/${order.paymentIntentSecret}`);
	}
</script>

<div>
	{#if userCreditsDto}
		<Billing {userCreditsDto} on:purchaseRetryIntent={purchaseRetryIntent}/>
	{:else}
		loading...
	{/if}
</div>