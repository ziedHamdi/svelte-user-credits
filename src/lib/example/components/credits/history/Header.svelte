<script>
	import { page } from '$app/stores';

	export let userCredits;

	function consume(offerGroup) {
		const userId = userCredits.userId;
		return async () => {
			const count = Math.round( Math.random() * 10 );
			await fetch(`/tokensConsumed?userId=${userId}&offerGroup=${offerGroup}&count=${count}`);
			location.reload();
		}
	}
</script>

<!-- Header -->
<div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
	<div>
		<h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200">
			Credit history
		</h2>
		<p class="text-sm text-gray-600 dark:text-gray-400">
			Credit operations overview by date for {$page.params.offerGroup}
		</p>
	</div>

	<div>
		<div class="inline-flex gap-x-2">
			<a href={`/credits/${userCredits.userId}`} class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
				Back to User Credits
			</a>

			<button on:click={consume($page.params.offerGroup)} class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
				<svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
				Emulate Token Consume
			</button>
		</div>
	</div>
</div>
<!-- End Header -->