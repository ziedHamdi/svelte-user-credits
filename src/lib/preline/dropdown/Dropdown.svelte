<script>
	import Dropdown from './Dropdown';
	import log from 'loglevel';

	if (typeof window !== 'undefined') {
		if (!window.HSDropdown) {
			log.debug('initializing Dropdown');
			window.HSDropdown = new Dropdown();
			window.HSDropdown.init();
		}
	}
	export let cls =''
</script>

<div class={`${cls} hs-dropdown relative inline-flex [--placement:bottom-right]`} on:click>
	<button id='hs-dropdown-with-header' type='button'
					class='hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800'>
		<slot name='button' />
	</button>

	<div
		class='hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700'
		aria-labelledby='hs-dropdown-with-header'>
		<slot name='header'/>
		<div class='mt-2 py-2 first:pt-0 last:pb-0'>
			<slot name='itemList'/>
		</div>
	</div>
</div>