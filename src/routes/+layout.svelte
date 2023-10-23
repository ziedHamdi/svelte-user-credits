<!-- +layout.svelte -->
<script>
	import '../app.postcss';
	import { resolverContext } from '$lib/ioc/resolverContext';
	import { Resolver } from '../lib/example/Resolver'; // Adjust the import path

	const { setResolver } = resolverContext();

	setResolver(new Resolver());
</script>

<main>
	<slot />
</main>
