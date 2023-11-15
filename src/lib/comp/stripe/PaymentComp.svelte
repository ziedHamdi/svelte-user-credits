<script>
	import { loadStripe } from '@stripe/stripe-js';
	import { Elements } from 'svelte-stripe';
	import { createEventDispatcher, onMount } from 'svelte';
	import { PUBLIC_STRIPE_KEY } from '$env/static/public';
	import { PaymentElement } from 'svelte-stripe';

	const dispatch = createEventDispatcher();

	export let clientSecret;
	let stripe = null;

	onMount(async () => {
		stripe = await loadStripe(PUBLIC_STRIPE_KEY);
	});

	let processing, elements;

	async function submit() {
		// avoid processing duplicates
		if (processing) return;

		processing = true;

		// confirm payment with stripe
		const result = await stripe.confirmPayment({
			elements,
			redirect: 'if_required'
		});

		// log results, for debugging
		console.log({ result });

		processing = false;
		if (result.error) {
			// payment failed, dispatch a failure event
			dispatch('payment', { status:"error", clientSecret, result });
		} else {
			// payment succeeded, dispatch a success event
			dispatch('payment', { status:"success", clientSecret, result });
		}
	}
</script>

{#if stripe}
	<form on:submit|preventDefault='{submit}'>
		<Elements {stripe} {clientSecret} bind:elements>
			<PaymentElement />
		</Elements>

		<button disabled={processing}>
			{#if processing}
				Processing...
			{:else}
				Pay
			{/if}
		</button>
	</form>
{/if}