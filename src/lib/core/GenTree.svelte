<script>
	import { getContext } from 'svelte';
	import { ELEMENT_BUILDER } from '../ioc/elementBuilderContext';
	import GenTree from './GenTree.svelte';
	import { FRAGMENT } from '../ioc/IElementProperties';

	export let elementProperties;
	let element;
	let clazz;
	let value;
	let props;
	let children;

	({ element, _class: clazz, value, children, ...props } = elementProperties);
	if (!element)
		console.log(elementProperties);
	let elementBuilder = getContext(ELEMENT_BUILDER);
</script>

{#if element}
	{#if element == FRAGMENT}
		{#if children}
			{#each children as child (child)}
				<GenTree elementProperties={child} />
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
					<GenTree elementProperties={child} />
				{/each}
			{/if}
		</svelte:element>
	{/if}
{/if}


