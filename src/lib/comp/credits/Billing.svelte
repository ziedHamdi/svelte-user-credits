<script>
	import Subscription from './Subscription.svelte';

	export let userCreditsDto;

</script>

<div class='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
	<!-- Card -->
	<div class='flex flex-col'>
		<div class='-m-1.5 overflow-x-auto'>
			<div class='p-1.5 min-w-full inline-block align-middle'>
				<div
					class='bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700'>

					<!-- Table -->
					<table class='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
						<thead class='bg-gray-50 dark:bg-slate-800'>
						<tr>
							<th scope='col' class='ps-6 py-3 text-start'>
								<label for='hs-at-with-checkboxes-main' class='flex'>
									<input type='checkbox'
												 class='shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800'
												 id='hs-at-with-checkboxes-main'>
									<span class='sr-only'>Checkbox</span>
								</label>
							</th>

							<th scope='col' class='ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start'>
								<div class='flex items-center gap-x-2'>
                    <span class='text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200'>
                      Name
                    </span>
								</div>
							</th>

							<th scope='col' class='px-6 py-3 text-start'>
								<div class='flex items-center gap-x-2'>
                    <span class='text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200'>
                      Total
                    </span>
								</div>
							</th>

							<th scope='col' class='px-6 py-3 text-start'>
								<div class='flex items-center gap-x-2'>
                    <span class='text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200'>
                      Status
                    </span>
								</div>
							</th>

							<th scope='col' class='px-6 py-3 text-start'>
								<div class='flex items-center gap-x-2'>
                    <span class='text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200'>
                      Consumption
                    </span>
								</div>
							</th>

							<th scope='col' class='px-6 py-3 text-start'>
								<div class='flex items-center gap-x-2'>
                    <span class='text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200 '>
                      Date
                    </span>
								</div>
							</th>

							<th scope='col' class='px-6 py-3 text-end'></th>
						</tr>
						</thead>
						<tbody class='divide-y divide-gray-200 dark:divide-gray-700'>
						{#each userCreditsDto.summaryList as purchase (purchase._id)}
							<Subscription {purchase} />
						{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>
