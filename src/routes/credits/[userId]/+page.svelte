<script>
	import { getContext } from 'svelte';
	import { RESOLVER } from '../../../lib/ioc/resolverContext';
	import Billing from '../../../lib/comp/credits/Billing.svelte';
	import { goto } from '$app/navigation';
	import Tag from '../../../lib/comp/common/Tag.svelte';

	let resolver = getContext(RESOLVER); // To store the current value of resolver

	export let data;
	$: userCreditsDto = data?.credits ? $resolver.buildDto({ type: 'UserCredits' }, data?.credits) : null;

	async function orderOperation({detail}) {
		if( detail.operation === "pay" ) {
			const createOrderResponse = await fetch(`/api/payOrder?orderId=${detail.orderId}`);
			const order = await createOrderResponse.json();
			await goto(`/order/purchase/${order._id}/${order.paymentIntentSecret}`);
		} else if( detail.operation === "delete" ) {
			// const deleteOrderResponse = await fetch(`/deleteOrder?orderId=${detail.orderId}`);
			// const order = await deleteOrderResponse.json();
		} else if( detail.operation === "detail" ) {
			await goto(`/credits/${data.credits.userId}/${detail.orderId}`);
		} else if( detail.operation === "history" ) {
			await goto(`/credits/${data.credits.userId}/${detail.orderId}`);
		}
	}
</script>

<div>
	{#if userCreditsDto}
		<Billing {userCreditsDto} on:orderOperation={orderOperation}/>
	{:else}
		<div class='mx-auto w-fit my-20'>
			<Tag status='error' label='nothing found'/>
		</div>
	{/if}
</div>