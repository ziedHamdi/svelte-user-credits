<script>
	import { buildElementProps } from '../ioc/GeneratorPropsBuilder';

	export let data;
	export let comp;
	export let cls;

	const { comp:element, _class:clazz, value, ...props } = buildElementProps(comp, data, cls)
</script>

<svelte:element this={element} class={clazz} {...props} >{value}</svelte:element>
