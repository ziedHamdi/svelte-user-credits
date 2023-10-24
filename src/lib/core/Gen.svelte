<script>
	import { getContext } from 'svelte';
	import { ELEMENT_BUILDER } from '../ioc/elementBuilderContext';
	import GenTree from './GenTree.svelte';

	export let data;
	export let comp;
	export let cls;

	let elementBuilder = getContext(ELEMENT_BUILDER);
	let rest;
	let elementProperties;
	$: {
		elementProperties = $elementBuilder.buildElementProps(comp, data, cls);
		rest = $$props; // Capture undeclared attributes
	}
</script>

{#if data}
	<GenTree {elementProperties} {...rest} />
{/if}