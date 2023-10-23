<!-- +layout.svelte -->
<script>
	import '../app.postcss';
	import { resolverContext } from '$lib/ioc/resolverContext';
	import { Resolver } from '../lib/example/Resolver';
	import { elementBuilderContext } from '../lib/ioc/elementBuilderContext';
	import { ElementBuilder } from '../lib/impl/ioc/ElementBuilder'; // Adjust the import path

	const { setResolver } = resolverContext();
	const { setElementBuilder } = elementBuilderContext()

	setResolver(new Resolver());
	setElementBuilder(new ElementBuilder());
</script>

<main>
	<slot />
</main>
