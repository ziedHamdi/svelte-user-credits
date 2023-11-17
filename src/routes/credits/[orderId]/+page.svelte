<script>
	import Billing from '../../../lib/comp/credits/Billing.svelte';
	import { getContext } from 'svelte';
	import { RESOLVER } from '../../../lib/ioc/resolverContext';
	let resolver = getContext(RESOLVER); // To store the current value of resolver

	export let data;
	$: userCreditsDto = $resolver.buildDto({type:"UserCredits"}, data.credits)
</script>

<div>
	{JSON.stringify(data.order)} purchased successfully
	<Billing {userCreditsDto}/>
</div>