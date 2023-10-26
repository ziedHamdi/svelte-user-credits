<script>
	import OfferSwitch from '../../components/OfferSwitch.svelte';
</script>

<div class='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
	<!-- Title -->
	<div class='max-w-2xl mx-auto text-center mb-10 lg:mb-14'>
		<h2 class='text-2xl font-bold md:text-4xl md:leading-tight dark:text-white'>Example of Pricing Page</h2>
		<p class='mt-1 text-gray-600 dark:text-gray-400'>Welcome to Svelte User Credits. More info on how to create your pricing page and handle pay-as-you-go features is available on the github <a class='underline' target='_blank' href='https://github.com/ziedHamdi/svelte-user-credits'>official page</a></p>
	</div>
	<!-- End Title -->

	<slot name='switch'/>
	<slot name='offers'/>

	<!-- Comparison table -->
	<div class='mt-20 lg:mt-32'>
		<div class='lg:text-center mb-10 lg:mb-20'>
			<h3 class='text-2xl font-semibold dark:text-white'>Compare plans</h3>
		</div>

		<!-- xs to lg -->
		<div class='space-y-24 lg:hidden'>
			<section>
				<div class='px-4 mb-4'>
					<h2 class='text-lg leading-6 font-medium text-gray-800'>Free</h2>
				</div>
				<table class='w-full'>
					<caption
						class='bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white'>
						Financial data
					</caption>
					<thead class='sticky top-0 inset-x-0 bg-white dark:bg-slate-900'>
					<tr>
						<th class='sr-only' scope='col'>Feature</th>
						<th class='sr-only' scope='col'>Included</th>
					</tr>
					</thead>
					<tbody class='divide-y divide-gray-200 dark:divide-gray-700'>
					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>
							Open/High/Low/Close
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>
							Price-volume difference indicator
						</th>
						<td class='py-5 pr-4'>
							<!-- Minus -->
							<svg class='ml-auto h-7 w-7 text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path fill-rule='evenodd' clip-rule='evenodd'
											d='M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z'
											fill='currentColor' />
							</svg>
							<!-- Minus -->
							<span class='sr-only'>No</span>
						</td>
					</tr>
					</tbody>
				</table>

				<table class='w-full'>
					<caption
						class='bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white'>
						On-chain data
					</caption>
					<thead>
					<tr>
						<th class='sr-only' scope='col'>Feature</th>
						<th class='sr-only' scope='col'>Included</th>
					</tr>
					</thead>
					<tbody class='divide-y divide-gray-200 dark:divide-gray-700'>
					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Network
							growth
						</th>
						<td class='py-5 pr-4'>
							<!-- Minus -->
							<svg class='ml-auto h-7 w-7 text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path fill-rule='evenodd' clip-rule='evenodd'
											d='M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z'
											fill='currentColor' />
							</svg>
							<!-- Minus -->
							<span class='sr-only'>No</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Average
							token age consumed
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Exchange
							flow
						</th>
						<td class='py-5 pr-4'>
							<!-- Minus -->
							<svg class='ml-auto h-7 w-7 text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path fill-rule='evenodd' clip-rule='evenodd'
											d='M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z'
											fill='currentColor' />
							</svg>
							<!-- Minus -->
							<span class='sr-only'>No</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Total ERC20
							exchange funds flow
						</th>
						<td class='py-5 pr-4'>
							<!-- Minus -->
							<svg class='ml-auto h-7 w-7 text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path fill-rule='evenodd' clip-rule='evenodd'
											d='M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z'
											fill='currentColor' />
							</svg>
							<!-- Minus -->
							<span class='sr-only'>No</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Transaction
							volume
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Total
							circulation (beta)
						</th>
						<td class='py-5 pr-4'>
							<!-- Minus -->
							<svg class='ml-auto h-7 w-7 text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path fill-rule='evenodd' clip-rule='evenodd'
											d='M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z'
											fill='currentColor' />
							</svg>
							<!-- Minus -->
							<span class='sr-only'>No</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Velocity of
							tokens (beta)
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>ETH gas
							used
						</th>
						<td class='py-5 pr-4'>
							<!-- Minus -->
							<svg class='ml-auto h-7 w-7 text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path fill-rule='evenodd' clip-rule='evenodd'
											d='M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z'
											fill='currentColor' />
							</svg>
							<!-- Minus -->
							<span class='sr-only'>No</span>
						</td>
					</tr>
					</tbody>
				</table>

				<table class='w-full'>
					<caption
						class='bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white'>
						Social data
					</caption>
					<thead>
					<tr>
						<th class='sr-only' scope='col'>Feature</th>
						<th class='sr-only' scope='col'>Included</th>
					</tr>
					</thead>
					<tbody class='divide-y divide-gray-200 dark:divide-gray-700'>
					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Dev
							activity
						</th>
						<td class='py-5 pr-4'>
							<!-- Minus -->
							<svg class='ml-auto h-7 w-7 text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path fill-rule='evenodd' clip-rule='evenodd'
											d='M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z'
											fill='currentColor' />
							</svg>
							<!-- Minus -->
							<span class='sr-only'>No</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Topic
							search
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Relative
							social dominance
						</th>
						<td class='py-5 pr-4'>
							<!-- Minus -->
							<svg class='ml-auto h-7 w-7 text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path fill-rule='evenodd' clip-rule='evenodd'
											d='M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z'
											fill='currentColor' />
							</svg>
							<!-- Minus -->
							<span class='sr-only'>No</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Total
							social volume
						</th>
						<td class='py-5 pr-4'>
							<!-- Minus -->
							<svg class='ml-auto h-7 w-7 text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path fill-rule='evenodd' clip-rule='evenodd'
											d='M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z'
											fill='currentColor' />
							</svg>
							<!-- Minus -->
							<span class='sr-only'>No</span>
						</td>
					</tr>
					</tbody>
				</table>
			</section>

			<section>
				<div class='px-4 mb-4'>
					<h2 class='text-lg leading-6 font-medium text-gray-800'>Startup</h2>
				</div>
				<table class='w-full'>
					<caption
						class='bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white'>
						Financial data
					</caption>
					<thead>
					<tr>
						<th class='sr-only' scope='col'>Feature</th>
						<th class='sr-only' scope='col'>Included</th>
					</tr>
					</thead>
					<tbody class='divide-y divide-gray-200 dark:divide-gray-700'>
					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>
							Open/High/Low/Close
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>
							Price-volume difference indicator
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>
					</tbody>
				</table>

				<table class='w-full'>
					<caption
						class='bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white'>
						On-chain data
					</caption>
					<thead>
					<tr>
						<th class='sr-only' scope='col'>Feature</th>
						<th class='sr-only' scope='col'>Included</th>
					</tr>
					</thead>
					<tbody class='divide-y divide-gray-200 dark:divide-gray-700'>
					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Network
							growth
						</th>
						<td class='py-5 pr-4'>
							<!-- Minus -->
							<svg class='ml-auto h-7 w-7 text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path fill-rule='evenodd' clip-rule='evenodd'
											d='M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z'
											fill='currentColor' />
							</svg>
							<!-- Minus -->
							<span class='sr-only'>No</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Average
							token age consumed
						</th>
						<td class='py-5 pr-4'>
							<!-- Minus -->
							<svg class='ml-auto h-7 w-7 text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path fill-rule='evenodd' clip-rule='evenodd'
											d='M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z'
											fill='currentColor' />
							</svg>
							<!-- Minus -->
							<span class='sr-only'>No</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Exchange
							flow
						</th>
						<td class='py-5 pr-4'>
							<!-- Minus -->
							<svg class='ml-auto h-7 w-7 text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path fill-rule='evenodd' clip-rule='evenodd'
											d='M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z'
											fill='currentColor' />
							</svg>
							<!-- Minus -->
							<span class='sr-only'>No</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Total ERC20
							exchange funds flow
						</th>
						<td class='py-5 pr-4'>
							<!-- Minus -->
							<svg class='ml-auto h-7 w-7 text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path fill-rule='evenodd' clip-rule='evenodd'
											d='M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z'
											fill='currentColor' />
							</svg>
							<!-- Minus -->
							<span class='sr-only'>No</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Transaction
							volume
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Total
							circulation (beta)
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Velocity of
							tokens (beta)
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>ETH gas
							used
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>
					</tbody>
				</table>

				<table class='w-full'>
					<caption
						class='bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white'>
						Social data
					</caption>
					<thead>
					<tr>
						<th class='sr-only' scope='col'>Feature</th>
						<th class='sr-only' scope='col'>Included</th>
					</tr>
					</thead>
					<tbody class='divide-y divide-gray-200 dark:divide-gray-700'>
					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Dev
							activity
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Topic
							search
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Relative
							social dominance
						</th>
						<td class='py-5 pr-4'>
							<!-- Minus -->
							<svg class='ml-auto h-7 w-7 text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path fill-rule='evenodd' clip-rule='evenodd'
											d='M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z'
											fill='currentColor' />
							</svg>
							<!-- Minus -->
							<span class='sr-only'>No</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Total
							social volume
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>
					</tbody>
				</table>
			</section>

			<section>
				<div class='px-4 mb-4'>
					<h2 class='text-lg leading-6 font-medium text-gray-800'>Team</h2>
				</div>
				<table class='w-full'>
					<caption
						class='bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white'>
						Financial data
					</caption>
					<thead>
					<tr>
						<th class='sr-only' scope='col'>Feature</th>
						<th class='sr-only' scope='col'>Included</th>
					</tr>
					</thead>
					<tbody class='divide-y divide-gray-200 dark:divide-gray-700'>
					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>
							Open/High/Low/Close
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>
							Price-volume difference indicator
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>
					</tbody>
				</table>

				<table class='w-full'>
					<caption
						class='bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white'>
						On-chain data
					</caption>
					<thead>
					<tr>
						<th class='sr-only' scope='col'>Feature</th>
						<th class='sr-only' scope='col'>Included</th>
					</tr>
					</thead>
					<tbody class='divide-y divide-gray-200 dark:divide-gray-700'>
					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Network
							growth
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Average
							token age consumed
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Exchange
							flow
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Total ERC20
							exchange funds flow
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Transaction
							volume
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Total
							circulation (beta)
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Velocity of
							tokens (beta)
						</th>
						<td class='py-5 pr-4'>
							<!-- Minus -->
							<svg class='ml-auto h-7 w-7 text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path fill-rule='evenodd' clip-rule='evenodd'
											d='M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z'
											fill='currentColor' />
							</svg>
							<!-- Minus -->
							<span class='sr-only'>No</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>ETH gas
							used
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>
					</tbody>
				</table>

				<table class='w-full'>
					<caption
						class='bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white'>
						Social data
					</caption>
					<thead>
					<tr>
						<th class='sr-only' scope='col'>Feature</th>
						<th class='sr-only' scope='col'>Included</th>
					</tr>
					</thead>
					<tbody class='divide-y divide-gray-200 dark:divide-gray-700'>
					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Dev
							activity
						</th>
						<td class='py-5 pr-4'>
							<!-- Minus -->
							<svg class='ml-auto h-7 w-7 text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path fill-rule='evenodd' clip-rule='evenodd'
											d='M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z'
											fill='currentColor' />
							</svg>
							<!-- Minus -->
							<span class='sr-only'>No</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Topic
							search
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Relative
							social dominance
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Total
							social volume
						</th>
						<td class='py-5 pr-4'>
							<!-- Minus -->
							<svg class='ml-auto h-7 w-7 text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path fill-rule='evenodd' clip-rule='evenodd'
											d='M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z'
											fill='currentColor' />
							</svg>
							<!-- Minus -->
							<span class='sr-only'>No</span>
						</td>
					</tr>
					</tbody>
				</table>
			</section>

			<section>
				<div class='px-4 mb-4'>
					<h2 class='text-lg leading-6 font-medium text-gray-800'>Enterprise</h2>
				</div>
				<table class='w-full'>
					<caption
						class='bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white'>
						Financial data
					</caption>
					<thead>
					<tr>
						<th class='sr-only' scope='col'>Feature</th>
						<th class='sr-only' scope='col'>Included</th>
					</tr>
					</thead>
					<tbody class='divide-y divide-gray-200 dark:divide-gray-700'>
					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>
							Open/High/Low/Close
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>
							Price-volume difference indicator
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>
					</tbody>
				</table>

				<table class='w-full'>
					<caption
						class='bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white'>
						On-chain data
					</caption>
					<thead>
					<tr>
						<th class='sr-only' scope='col'>Feature</th>
						<th class='sr-only' scope='col'>Included</th>
					</tr>
					</thead>
					<tbody class='divide-y divide-gray-200 dark:divide-gray-700'>
					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Network
							growth
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Average
							token age consumed
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Exchange
							flow
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Total ERC20
							exchange funds flow
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Transaction
							volume
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Total
							circulation (beta)
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Velocity of
							tokens (beta)
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>ETH gas
							used
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>
					</tbody>
				</table>

				<table class='w-full'>
					<caption
						class='bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white'>
						Social data
					</caption>
					<thead>
					<tr>
						<th class='sr-only' scope='col'>Feature</th>
						<th class='sr-only' scope='col'>Included</th>
					</tr>
					</thead>
					<tbody class='divide-y divide-gray-200 dark:divide-gray-700'>
					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Dev
							activity
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Topic
							search
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Relative
							social dominance
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>

					<tr class='border-t border-gray-200 dark:border-gray-700'>
						<th class='py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Total
							social volume
						</th>
						<td class='py-5 pr-4'>
							<!-- Check -->
							<svg class='ml-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
									 xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
									fill='currentColor' />
							</svg>
							<!-- End Solid Check -->
							<span class='sr-only'>Yes</span>
						</td>
					</tr>
					</tbody>
				</table>
			</section>
		</div>
		<!-- End xs to lg -->

		<!-- lg+ -->
		<div class='hidden lg:block'>
			<table class='w-full h-px'>
				<caption class='sr-only'>
					Pricing plan comparison
				</caption>
				<thead>
				<tr>
					<th class='pb-4 pl-6 pr-6 text-sm font-medium text-gray-800 text-left' scope='col'>
						<span class='sr-only'>Feature by</span>
						<span class='dark:text-white'>Plans</span>
					</th>

					<th class='w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center dark:text-white'
							scope='col'>Free
					</th>
					<th class='w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center dark:text-white'
							scope='col'>Startup
					</th>
					<th class='w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center dark:text-white'
							scope='col'>Scaleup
					</th>
					<th class='w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center dark:text-white'
							scope='col'>Enterprise
					</th>
				</tr>
				</thead>
				<tbody class='border-t border-gray-200 divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700'>
				<tr>
					<th class='py-3 pl-6 bg-gray-50 font-bold text-gray-800 text-left dark:bg-slate-800 dark:text-white'
							colspan='5' scope='colgroup'>Financial data
					</th>
				</tr>

				<tr>
					<th class='py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>
						Open/High/Low/Close
					</th>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Free</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Startup</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Team</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Enterprise</span>
					</td>
				</tr>

				<tr>
					<th class='py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>
						Price-volume difference indicator
					</th>

					<td class='py-5 px-6'>
						<!-- Minus -->
						<svg class='mx-auto h-7 w-7 text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path fill-rule='evenodd' clip-rule='evenodd'
										d='M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z'
										fill='currentColor' />
						</svg>
						<!-- Minus -->
						<span class='sr-only'>Not included in Free</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Startup</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Team</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Enterprise</span>
					</td>
				</tr>

				<tr>
					<th class='py-3 pl-6 bg-gray-50 font-bold text-gray-800 text-left dark:bg-slate-800 dark:text-white'
							colspan='5' scope='colgroup'>On-chain data
					</th>
				</tr>

				<tr>
					<th class='py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Network
						growth
					</th>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Free</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path fill-rule='evenodd' clip-rule='evenodd'
										d='M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z'
										fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Startup</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Team</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Enterprise</span>
					</td>
				</tr>

				<tr>
					<th class='py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Average
						token age consumed
					</th>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Not included in Free</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path fill-rule='evenodd' clip-rule='evenodd'
										d='M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z'
										fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Startup</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Team</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Enterprise</span>
					</td>
				</tr>

				<tr>
					<th class='py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Exchange
						flow
					</th>

					<td class='py-5 px-6'>
						<!-- Minus -->
						<svg class='mx-auto h-7 w-7 text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path fill-rule='evenodd' clip-rule='evenodd'
										d='M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z'
										fill='currentColor' />
						</svg>
						<!-- Minus -->
						<span class='sr-only'>Not included in Free</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path fill-rule='evenodd' clip-rule='evenodd'
										d='M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z'
										fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Startup</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Team</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Enterprise</span>
					</td>
				</tr>

				<tr>
					<th class='py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Total
						ERC20 exchange funds flow
					</th>

					<td class='py-5 px-6'>
						<!-- Minus -->
						<svg class='mx-auto h-7 w-7 text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path fill-rule='evenodd' clip-rule='evenodd'
										d='M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z'
										fill='currentColor' />
						</svg>
						<!-- Minus -->
						<span class='sr-only'>Not included in Free</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path fill-rule='evenodd' clip-rule='evenodd'
										d='M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z'
										fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Startup</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Team</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Enterprise</span>
					</td>
				</tr>

				<tr>
					<th class='py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>
						Transaction volume
					</th>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Free</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Startup</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Team</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Enterprise</span>
					</td>
				</tr>

				<tr>
					<th class='py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Total
						circulation (beta)
					</th>

					<td class='py-5 px-6'>
						<!-- Minus -->
						<svg class='mx-auto h-7 w-7 text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path fill-rule='evenodd' clip-rule='evenodd'
										d='M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z'
										fill='currentColor' />
						</svg>
						<!-- Minus -->
						<span class='sr-only'>Not included in Free</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Startup</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Team</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Enterprise</span>
					</td>
				</tr>

				<tr>
					<th class='py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Velocity
						of tokens (beta)
					</th>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Not included in Free</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Startup</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path fill-rule='evenodd' clip-rule='evenodd'
										d='M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z'
										fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Team</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Enterprise</span>
					</td>
				</tr>

				<tr>
					<th class='py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>ETH gas
						used
					</th>

					<td class='py-5 px-6'>
						<!-- Minus -->
						<svg class='mx-auto h-7 w-7 text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path fill-rule='evenodd' clip-rule='evenodd'
										d='M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z'
										fill='currentColor' />
						</svg>
						<!-- Minus -->
						<span class='sr-only'>Not included in Free</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Startup</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Team</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Enterprise</span>
					</td>
				</tr>

				<tr>
					<th class='py-3 pl-6 bg-gray-50 font-bold text-gray-800 text-left dark:bg-slate-800 dark:text-white'
							colspan='5' scope='colgroup'>Social data
					</th>
				</tr>

				<tr>
					<th class='py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Dev
						activity
					</th>

					<td class='py-5 px-6'>
						<!-- Minus -->
						<svg class='mx-auto h-7 w-7 text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path fill-rule='evenodd' clip-rule='evenodd'
										d='M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z'
										fill='currentColor' />
						</svg>
						<!-- Minus -->
						<span class='sr-only'>Included in Free</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Startup</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path fill-rule='evenodd' clip-rule='evenodd'
										d='M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z'
										fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Team</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Enterprise</span>
					</td>
				</tr>

				<tr>
					<th class='py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Topic
						search
					</th>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Free</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Startup</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Team</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Enterprise</span>
					</td>
				</tr>

				<tr>
					<th class='py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Relative
						social dominance
					</th>

					<td class='py-5 px-6'>
						<!-- Minus -->
						<svg class='mx-auto h-7 w-7 text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path fill-rule='evenodd' clip-rule='evenodd'
										d='M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z'
										fill='currentColor' />
						</svg>
						<!-- Minus -->
						<span class='sr-only'>Included in Free</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Minus -->
						<svg class='mx-auto h-7 w-7 text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path fill-rule='evenodd' clip-rule='evenodd'
										d='M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z'
										fill='currentColor' />
						</svg>
						<!-- Minus -->
						<span class='sr-only'>Included in Startup</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Minus -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- Minus -->
						<span class='sr-only'>Included in Team</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Minus -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- Minus -->
						<span class='sr-only'>Included in Enterprise</span>
					</td>
				</tr>

				<tr>
					<th class='py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400' scope='row'>Relative
						social dominance
					</th>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Free</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Startup</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-gray-400' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path fill-rule='evenodd' clip-rule='evenodd'
										d='M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z'
										fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Team</span>
					</td>

					<td class='py-5 px-6'>
						<!-- Check -->
						<svg class='mx-auto h-7 w-7 text-blue-600' width='16' height='16' viewBox='0 0 16 16' fill='none'
								 xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z'
								fill='currentColor' />
						</svg>
						<!-- End Solid Check -->
						<span class='sr-only'>Included in Enterprise</span>
					</td>
				</tr>
				</tbody>
			</table>
		</div>
		<!-- End lg+ -->
	</div>
	<!-- End Comparison table -->
</div>
<!-- End Pricing -->