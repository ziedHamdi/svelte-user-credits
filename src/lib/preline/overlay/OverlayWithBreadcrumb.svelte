<script>
	import OverlayTrigger from './OverlayTrigger.svelte';

	// @type:{name:String, tree:[String]} (tree is the path until the selected item)
	export let selected;
</script>

<div class='flex items-center py-4'>
	<!-- Navigation Toggle -->
	<OverlayTrigger/>
	<!-- End Navigation Toggle -->

	<!-- Breadcrumb -->
	<ol class='ml-3 flex items-center whitespace-nowrap min-w-0' aria-label='Breadcrumb'>
		<li class='flex items-center text-sm text-gray-800 dark:text-gray-400'>
			Home
			<svg class='flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600' width='16'
					 height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path d='M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14' stroke='currentColor'
							stroke-width='2' stroke-linecap='round' />
			</svg>
		</li>
		{#if (selected.tree)}
			{#each selected.tree as item}
				<li class='flex items-center text-sm text-gray-800 dark:text-gray-400' aria-current='page'>
					{item}
					<svg class='flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600' width='16'
							 height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path d='M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14' stroke='currentColor'
									stroke-width='2' stroke-linecap='round' />
					</svg>
				</li>
			{/each}
		{/if}
		<li class='text-sm font-semibold text-gray-800 truncate dark:text-gray-400' aria-current='page'>
			{selected.name}
		</li>
	</ol>
	<!-- End Breadcrumb -->
</div>