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
		<slot name='prefix'/>
		<slot name='prefixChildren'/>
		{#if children}
			{#each children as child (child)}
				<GenTree elementProperties={child} />
			{/each}
		{/if}
		<slot name='suffix'/>
		<slot/>
	{:else}
		<svelte:element this={element} class={clazz} {...props}>
			<slot/>
			<slot name='prefix'/>
			{#if value?.__elem__}
				<svelte:element this={value.__elem__} {...value} />
			{:else}
				{$elementBuilder.asString(value)}
			{/if}
			<slot name='prefixChildren'/>
			{#if children}
				{#each children as child (child)}
					<GenTree elementProperties={child} />
				{/each}
			{/if}
			<slot name='suffix'/>
		</svelte:element>
	{/if}
{/if}


