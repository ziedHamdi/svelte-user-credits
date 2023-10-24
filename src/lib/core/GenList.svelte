<script>
	import Gen from './Gen.svelte';
	import { getContext } from 'svelte';
	import { ELEMENT_BUILDER } from '../ioc/elementBuilderContext';

	export let data;
	export let comp;
	export let cls;

	let elementBuilder = getContext(ELEMENT_BUILDER)

	let element, clazz, props, rest;
	$: {
		({ element, _class: clazz, ...props } = $elementBuilder.buildListBlockProps(comp, data, cls));
		rest = $$props; // Capture undeclared attributes
	}
</script>

{#if data}
	<svelte:element this={element} class={clazz} {...props} {...rest}>
		{#each data.items as item, index (index)}
			{#if item}
				<li class='flex space-x-2'>
					<Gen data={item} comp="span" cls="text-gray-800 dark:text-gray-400" />
				</li>
			{/if}
		{/each}
	</svelte:element>
{/if}
