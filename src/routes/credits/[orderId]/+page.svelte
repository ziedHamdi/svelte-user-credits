<script>
	import Billing from '../../../lib/comp/credits/Billing.svelte';
	import { getContext } from 'svelte';
	import { RESOLVER } from '../../../lib/ioc/resolverContext';
	let resolver = getContext(RESOLVER); // To store the current value of resolver

	export let data;
</script>

<div>
	{data.order.name} purchased successfully
	<Billing userCredits={data.credits} {resolver}/>
</div>