<!-- +layout.svelte -->
<script>
	import '../app.postcss';
	import { resolverContext } from '$lib/ioc/resolverContext';
	import { Resolver } from '../lib/example/Resolver';

	const { setResolver } = resolverContext();

	setResolver(new Resolver());
</script>

<main>
	<slot />
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap');
</style>