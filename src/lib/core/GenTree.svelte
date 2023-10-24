<script>
	import { getContext } from 'svelte';
	import { ELEMENT_BUILDER } from '../ioc/elementBuilderContext';
	import GenTree from './GenTree.svelte';
	import { ElementProperties } from '../ioc/ElementProperties';

	export let element;
	export let clazz;
	export let value;
	export let props;
	export let children;

	let elementBuilder = getContext(ELEMENT_BUILDER);
</script>

{#if element}
	{#if element == ElementProperties.FRAGMENT}
		{#if children}
			{#each children as child (child)}
				<GenTree element={child.element} clazz={child.class} value={child.value} props={child.props}
								 children={child.children} />
			{/each}
		{/if}
	{:else}
		<svelte:element this={element} class={clazz} {...props}>
			{#if value?.__elem__}
				<svelte:element this={value.__elem__} {...value} />
			{:else}
				{$elementBuilder.asString(value)}
			{/if}

			{#if children}
				{#each children as child (child)}
					<GenTree element={child.element} clazz={child.class} value={child.value} props={child.props}
									 children={child.children} />
				{/each}
			{/if}
		</svelte:element>
	{/if}
{/if}


