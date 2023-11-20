<script>
	import PaymentComp from '../../../../../lib/comp/stripe/PaymentComp.svelte';
	import PaymentFrame from '../../../../../lib/example/components/PaymentFrame.svelte';
	import { goto } from '$app/navigation';
	import { getUser } from '$lib/core/Session';

	export let data;

	let error;
	function paymentExecuted() {
		const orderId = data.orderId;
		return async ({detail}) => {
			if (detail.status === 'error') {
				error = detail.result.error.message;
				await fetch(`/afterExecute?orderId=${orderId}`);
			} else if (detail.status === 'cancel') {
				await goto(`/credits/${getUser()?._id}`);
			} else if (detail.status === 'success') {
				await fetch(`/afterExecute?orderId=${orderId}`);
				await goto(`/credits/${getUser()?._id}`);
			} else {
				console.error('not supported state: ', detail.status, '; ', detail);
			}
		}
	}</script>

{#if error}
	An error occurred in the payment processing: {error}
{/if}
<PaymentFrame {error}>
	<div slot='info'>
		The demo is running in test mode -- use 4242424242424242 as a test card number with any CVC + future expiration date.
		Read more about testing on Stripe at <a target='_blank' href='https://stripe.com/docs/testing'>https://stripe.com/docs/testing</a>.
	</div>
	<PaymentComp slot='stripe' clientSecret={data.intentSk} on:payment={paymentExecuted()}/>
</PaymentFrame>
