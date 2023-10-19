<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let imageHeight = '70%', overlayTag = '', cta = 'select';
	export let _id, imgUrl, title, desc;
	export let imgAlt = title;
</script>

<span class='cursor-pointer group rounded-xl overflow-hidden' on:click={dispatch('click', {_id})}>
	<div class={`relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden`} style={`padding-top: ${imageHeight}`}>
		<img
			class='toImageTop w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl'
			src={imgUrl}
			alt={imgAlt}>
		{#if overlayTag}
			<span
				class='absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900'>
				{overlayTag}
			</span>
		{/if}
	</div>

	<div class='mt-7'>
		<h3 class='text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200'>
			{title}
		</h3>
		<p class='mt-3 text-gray-800 dark:text-gray-200'>
			{desc}
		</p>
		<p class='mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium'>
			{cta}
			<svg class='w-2.5 h-2.5' width='16' height='16' viewBox='0 0 16 16' fill='none'>
				<path d='M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14'
							stroke='currentColor' stroke-width='2' stroke-linecap='round' />
			</svg>
		</p>
	</div>
</span>

<style>
    .toImageTop {
        object-position: 50% 0;
    }
</style>