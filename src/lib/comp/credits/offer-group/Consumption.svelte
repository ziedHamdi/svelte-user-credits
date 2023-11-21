<script>
	import HistoryItem from './HistoryItem.svelte';

	export let history;

</script>

<!-- Table Section -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
	<!-- Card -->
	<div class="flex flex-col">
		<div class="-m-1.5 overflow-x-auto">
			<div class="p-1.5 min-w-full inline-block align-middle">
				<div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
					<!-- Header -->
					<slot name='header'/>
					<!-- End Header -->

					<!-- Table -->
					<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
						<thead class="bg-gray-50 divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
						<tr>
							<th scope="col" class="px-6 py-3 text-start border-s border-gray-200 dark:border-gray-700">
                  <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                    Date
                  </span>
							</th>

							<th scope="col" class="px-6 py-3 text-start">
                  <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                    Tokens
                  </span>
							</th>

							<th scope="col" class="px-6 py-3 text-start">
                  <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                    Transaction ID
                  </span>
							</th>
						</tr>
						</thead>

						<tbody class="divide-y divide-gray-200 dark:divide-gray-700">
						{#each history as item (item._id)}
							<HistoryItem {item} on:orderOperation/>
						{/each}
						</tbody>
					</table>

					<slot name='footer'/>
				</div>
			</div>
		</div>
	</div>
</div>
