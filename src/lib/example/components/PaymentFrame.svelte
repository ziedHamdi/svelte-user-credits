<!-- Card Section -->
<div class="max-w-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
	<!-- Card -->
	<div class="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
		<div class="text-center mb-8">
			<h2 class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">
				Payment
			</h2>
			<p class="text-sm text-gray-600 dark:text-gray-400">
				<slot name='info'/>
			</p>
		</div>

		<slot name='stripe'/>

		<div class="mt-5 flex justify-end gap-x-2">
			<button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
				Cancel
			</button>
			<button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
				Save changes
			</button>
		</div>
	</div>
	<!-- End Card -->
</div>
<!-- End Card Section -->