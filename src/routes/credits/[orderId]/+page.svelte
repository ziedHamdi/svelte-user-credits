<script>
	import Billing from '../../../lib/comp/credits/Billing.svelte';

	export let data;
</script>

<div>
	{data.order.name} purchased successfully
	<Billing userCredits={data.credits}/>
</div>