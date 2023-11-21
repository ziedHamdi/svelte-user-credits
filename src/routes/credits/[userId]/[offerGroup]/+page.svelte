<script>
	import Consumption from '../../../../lib/comp/credits/offer-group/Consumption.svelte';

	export let data;

</script>

<Consumption history={data.history}/>