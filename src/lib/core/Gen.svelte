<script>
	import { buildElementProps } from '../ioc/GeneratorPropsBuilder';

	export let data;
	export let comp;
	export let cls;

	let element, clazz, value, props, rest;
	$: {
		({ comp: element, _class: clazz, value, ...props } = buildElementProps(comp, data, cls));
		rest = $$props; // Capture undeclared attributes
	}
</script>

{#if data}
	{props.prefixElement ?? ''}
	<svelte:element this={element} class={clazz} {...props} {...rest}>{value}</svelte:element>
	{props.suffixElement ?? ''}
{/if}