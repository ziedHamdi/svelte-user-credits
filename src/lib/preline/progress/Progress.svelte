<script>
	/**
	 * Found about how to draw arcs in SVG here: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
	 * Official documentation here: https://www.w3.org/TR/SVG/paths.html#PathDataEllipticalArcCommands
	 * Example here: https://blog.logrocket.com/build-svg-circular-progress-component-react-hooks/
	 */
	//radial/circular progress inspired from : https://nikitahl.com/circle-progress-bar-css
	import { onMount } from 'svelte';
	import RadialProgress from './RadialProgress.svelte';
	import log from 'loglevel';

	export let max, current, fg = '#808080', size = '1.3em', pill = false, bg = null;
	if (!(fg.length === 7 && fg.startsWith('#')) && !(fg != null && fg.startsWith('var('))) {
		log.error('fg parameter must be a #rrggbb color or a var() value (without transparency): \'' + fg + '\' invalid ');
		fg = '#808080';
	}

	$: progress = current / max * 100;
	$: emptyBg = !(fg != null && fg.startsWith('var(')) ? fg + '5f' : '#fff';//add transparency

</script>


{#if pill}
	<div
		class='progress-pill flex flex-col flex-nowrap justify-end w-2 h-3 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700 cursor-pointer'
		on:click>
		<div class='indicator overflow-hidden' role='progressbar' style={`height: ${progress}%; background-color:${fg}`}
				 aria-valuenow=${progress} aria-valuemin='0' aria-valuemax={max}></div>
	</div>
{:else}
	<RadialProgress {progress} indicatorColor={fg} trackColor={emptyBg} on:click/>
{/if}

