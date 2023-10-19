<script>
	import SimpleImageItem from './SimpleImageItem.svelte';

	export let defaultCta = 'select';
	export let title, desc, articleList, imageHeight;
</script>

<div class='max-w-[80rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
	<!-- Title -->
	{#if title?.length > 0 || desc?.length > 0 }
		<div class='max-w-2xl mx-auto text-center mb-10 lg:mb-14'>
			{#if title?.length > 0 }
				<h2 class='text-2xl font-bold md:text-4xl md:leading-tight dark:text-white'>{title}</h2>
			{/if}
			{#if desc?.length > 0 }
				<p class='mt-1 text-gray-600 dark:text-gray-400'>{desc}</p>
			{/if}
		</div>
	{/if}
	<!-- End Title -->


	<!-- Grid -->
	<div class='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
		{#each articleList as article}
			<!-- Card -->
			<SimpleImageItem {...article} cta={defaultCta} {imageHeight} on:click/>
			<!-- End Card -->
		{/each}
	</div>
</div>