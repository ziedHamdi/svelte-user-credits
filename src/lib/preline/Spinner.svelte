<script>
	let css = 'animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent rounded-full';
	css = $$restProps.class ?? ' text-blue-600 dark:text-white ' + css;
</script>

<div class={css} role='status' aria-label='loading'>
	<span class='sr-only'>Loading...</span>
</div>
