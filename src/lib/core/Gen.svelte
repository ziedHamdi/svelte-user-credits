<script>
	import { getContext } from 'svelte';
	import { ELEMENT_BUILDER } from '../ioc/elementBuilderContext';

	export let data;
	export let comp;
	export let cls;

	let elementBuilder = getContext(ELEMENT_BUILDER);
	let element, clazz, value, props, rest;
	$: {
		({ element, _class: clazz, value, ...props } = $elementBuilder.buildElementProps(comp, data, cls));
		rest = $$props; // Capture undeclared attributes
	}
</script>

{#if data}
	{#if props.prefixElement}
		<svelte:element this={props.prefixElement.element} class={props.prefixElement.clazz}
										{...(props.prefixElement.props)}>
			{#if props.prefixElement.value.__elem__}
				<svelte:element this={props.prefixElement.value.__elem__} {...props.prefixElement.value} />
			{/if}
		</svelte:element>
	{/if}
	<svelte:element this={element} class={clazz} {...props} {...rest}>{$elementBuilder.asString(value)}</svelte:element>
	{props.suffixElement ?? ''}
{/if}