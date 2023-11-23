<script>
	import Toast from '../../comp/common/Toast.svelte';

	export let error;
</script>
<!-- Card Section -->
<div class='max-w-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
	<!-- Card -->
	<div class='bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900'>
		<div class='mb-8'>
			<h2 class='text-center text-2xl pb-4 md:text-3xl font-bold text-gray-800 dark:text-gray-200'>
				Payment
			</h2>
			<p class='text-sm text-gray-600 dark:text-gray-400'>
				<slot name='info' />
			</p>
			{#if error}
				<Toast kind='error' message={error}/>
			{/if}
		</div>

		<slot name='stripe' />

	</div>
	<!-- End Card -->
</div>
<!-- End Card Section -->