<script>
	import PaymentComp from '../../../../../lib/comp/stripe/PaymentComp.svelte';
	import PaymentFrame from '../../../../../example/components/PaymentFrame.svelte';
	import { goto } from '$app/navigation';
	import { getUserStore } from '../../../../../example/Session';
	// import { getUser } from '$lib/example/Session';

	export let data;
	const user = getUserStore();

	let error;

	function paymentExecuted() {
		const orderId = data.orderId;
		return async ({ detail }) => {
			if (detail.status === 'error') {
				error = detail.result.error.message;
				await fetch(`/api/afterExecute?orderId=${orderId}`);
			} else if (detail.status === 'cancel') {
				await goto(`/credits/${user.get()._id}`);
			} else if (detail.status === 'success') {
				await fetch(`/api/afterExecute?orderId=${orderId}`);
				await goto(`/credits/${user.get()._id}`);
			} else {
				console.error('not supported state: ', detail.status, '; ', detail);
			}
		};
	}

	function copyText(event) {
		navigator.clipboard.writeText(event.target.innerText);
		showCopyHint();
	}

	let copyHintVisible;

	function showCopyHint() {
		copyHintVisible = true;
		setTimeout(() => {
			copyHintVisible = false;
		}, 2000); // Hide the hint after 2 seconds
	}
</script>

<PaymentFrame {error}>
	<div slot='info'>
		{#if data.order.total > 0}
			The demo is running in test mode, use the following card numbers with any CVC and future expiration date.

			<ul class='list-disc flex flex-col items-start ml-6 my-1'>
				<li>
					<button on:click={copyText} class='font-bold underline'>4242 4242 4242 4242</button>
					for successful payments
				</li>
				<li>
					<button on:click={copyText} class='font-bold underline'>4000 0000 0000 0341</button>
					for refused payments
				</li>
				<li>
					<button on:click={copyText} class='font-bold underline'>4000 0000 0000 3063</button>
					for 3D secure (that you will have to implement in your app)
				</li>
			</ul>

			<div
				class="{`py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-lime-100 text-lime-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500 ml-6 ${copyHintVisible ? 'visible' : 'invisible'}`}">
				Card number copied
			</div>

			<div>
				Read more about <a class='underline' target='_blank' href='https://stripe.com/docs/testing'>testing on
				Stripe</a>
				and the <a class='underline' href='https://stripe.com/docs/testing#regulatory-cards'>test scenarios</a> .
			</div>
		{:else}
			<div class='py-6 font-bold text-center'>
				You were successfully subscribed to {data.order.offerGroup}
			</div>
			<div class='py-6 flex justify-center'><a
				class='mt-5 inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800'
				href={`/credits/${user.get()?._id}`}>Credits</a></div>
		{/if}
	</div>
	<div slot='stripe'>
		{#if data.order.total > 0}
			<PaymentComp clientSecret={data.intentSk} on:payment={paymentExecuted()} />
		{/if}
	</div>
</PaymentFrame>
