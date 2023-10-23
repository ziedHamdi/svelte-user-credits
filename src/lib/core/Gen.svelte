<script>
	import { getContext } from 'svelte';
	import { ELEMENT_BUILDER } from '../ioc/elementBuilderContext';

	export let data;
	export let comp;
	export let cls;

	let elementBuilder = getContext(ELEMENT_BUILDER)
	let element, clazz, value, props, rest;
	$: {
		({ comp: element, _class: clazz, value, ...props } = $elementBuilder.buildElementProps(comp, data, cls));
		rest = $$props; // Capture undeclared attributes
	}
</script>

{#if data}
	{props.prefixElement ?? ''}
	<svelte:element this={element} class={clazz} {...props} {...rest}>{value}</svelte:element>
	{props.suffixElement ?? ''}
{/if}