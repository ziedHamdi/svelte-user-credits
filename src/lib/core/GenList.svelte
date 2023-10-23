<script>
	import { buildListBlockProps } from '../ioc/GeneratorPropsBuilder';
	import Gen from './Gen.svelte';

	export let data;
	export let comp;
	export let cls;

	let element, clazz, props, rest;
	$: {
		({ comp: element, _class: clazz, ...props } = buildListBlockProps(comp, data, cls));
		rest = $$props; // Capture undeclared attributes
	}
</script>

{#if data}
	<svelte:element this={element} class={clazz} {...props} {...rest}>
		{#each data.items as item, index (index)}
			{#if item}
				<li class='item'>
					<Gen data={item} comp="span" cls="text-gray-800 dark:text-gray-400" />
				</li>
			{/if}
		{/each}
	</svelte:element>
{/if}
