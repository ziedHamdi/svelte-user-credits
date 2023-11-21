<script>
	import Consumption from '../../../../lib/comp/credits/offer-group/Consumption.svelte';
	import Navigation from '../../../../lib/comp/common/Navigation.svelte';
	import Header from '../../../../lib/example/components/credits/history/Header.svelte';

	export let data;

</script>

<Consumption history={data.history}>
	<Header slot='header' userCredits={data.credits}/>
	<Navigation slot='footer' rows={data.history}/>
</Consumption>