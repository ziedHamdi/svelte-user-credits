<script>
	import PaymentComp from '../../../../../lib/comp/stripe/PaymentComp.svelte';
	import PaymentFrame from '../../../../../lib/example/components/PaymentFrame.svelte';
	import { goto } from '$app/navigation';

	export let data;

	let error;
	function paymentExecuted({detail}) {
		if( detail.status === "error" ) {
			error = detail.result.error
		} else if( detail.status === "cancel" ) {
			goto('/offers/yearly')
		} else if( detail.status === "success" ) {
			goto(`/credits/${data.orderId}`)
		} else {
			console.error( "not suported state: ", detail.status, "; ", detail )
		}
	}
</script>

{#if error}
	An error occurred in the payment processing: {error}
{/if}
<PaymentFrame {error}>
	<div slot='info'>
		The demo is running in test mode -- use 4242424242424242 as a test card number with any CVC + future expiration date.
		Read more about testing on Stripe at <a target='_blank' href='https://stripe.com/docs/testing'>https://stripe.com/docs/testing</a>.
	</div>
	<PaymentComp slot='stripe' clientSecret={data.intentSk} on:payment={paymentExecuted}/>
</PaymentFrame>
