<script>
  /**
   * Check this example: https://preline.co/examples/features-navs.html#fn-vertical-tabs-with-overlapping-background
   * <code>selector</code> is a css selector for an element that will be associated and displayed along with this tab
   *
   * In the example above, #tabs-with-card-1 is used as a selector to display/hide the div below:
   * <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
   */
	import HSTabs from './index';
	import { onMount } from 'svelte';
	import log from 'loglevel';

	if (typeof window !== 'undefined' ) {
		if( !window.HSTabs ) {
			log.debug('initializing Tabs');
			window.HSTabs = new HSTabs();
			window.HSTabs.init()
		}
	}
	// @type(selected):{name:String, tree:[String]} (tree is the path until the selected item)
	export let selector, title, desc, selected, expandable = false, href='#', open = false;
	let current


	onMount(()=>{
		if( open ) {
			window.HSTabs.show(current)
		}
	})

  let clazz = "hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 "+ (selected ? "active" : '')
</script>

<button type="button" class={clazz} id="tabs-with-card-item-1" data-hs-tab={selector} aria-controls="tabs-with-card-1" role="tab">
            <span class="flex">
							<slot name='icon'/>
              <span class="grow ml-6">
                <span class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">{title}</span>
                <span class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">{desc}</span>
              </span>
            </span>
</button>