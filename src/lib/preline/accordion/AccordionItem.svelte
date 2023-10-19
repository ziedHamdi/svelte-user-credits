<script>
	import Accordion from './Accordion';
	import { onMount } from 'svelte';
	import log from 'loglevel';

	if (typeof window !== 'undefined' ) {
		if( !window.HSAccordion ) {
			log.debug('initializing accordion');
			window.HSAccordion = new Accordion();
			window.HSAccordion.init();
		}
	}
	// @type(selected):{name:String, tree:[String]} (tree is the path until the selected item)
	export let name, selected, expandable = false, id=name, href='#', open = false;
	let current


	onMount(()=>{
		if( open ) {
			window.HSAccordion.show(current)
		}
	})
</script>

<li class={expandable ? 'hs-accordion' : ''} bind:this={current} id={id} on:click>
	<a {href}
		class={`${selected.name === id || open ? 'bg-gray-100' : ''} cursor-pointer hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white`}
		>
		<slot name='icon' />
		<slot name='name'>{name}</slot>

		{#if expandable}
			<svg
				class='hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400'
				width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path d='M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11'
							stroke='currentColor' stroke-width='2' stroke-linecap='round'></path>
			</svg>

			<svg
				class='hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400'
				width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path d='M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5' stroke='currentColor'
							stroke-width='2' stroke-linecap='round'></path>
			</svg>
		{/if}
	</a>

	<div id='account-accordion-child'
			 class='hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden'>
		<slot name='content' />
	</div>
</li>