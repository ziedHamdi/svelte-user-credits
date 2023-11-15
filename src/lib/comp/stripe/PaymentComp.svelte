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

	function cancel(event) {
		event.preventDefault();
		event.stopPropagation();
		dispatch('payment', { status:"cancel", clientSecret} );
	}
</script>

{#if stripe}
	<form on:submit|preventDefault='{submit}'>
		<Elements {stripe} {clientSecret} bind:elements>
			<PaymentElement />
		</Elements>

		<div class="mt-5 flex justify-end gap-x-2">
			<button on:click={cancel} disabled={processing} type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
				Cancel
			</button>
			<button disabled={processing} type="submit" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
				{#if processing}
					Processing...
				{:else}
					Pay
				{/if}
			</button>
		</div>
	</form>
{/if}