<script>
	import OfferGroup from './OfferGroup.svelte';

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
							<th scope='col' class='ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start'>
								<div class='flex items-center gap-x-2 justify-center'>
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
                      Remaining
                    </span>
								</div>
							</th>
							<th scope='col' class='px-6 py-3 text-start'>
								<div class='flex items-center gap-x-2'>
                    <span class='text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200'>
                      Tokens
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
							<OfferGroup {purchase} on:orderOperation/>
						{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>
