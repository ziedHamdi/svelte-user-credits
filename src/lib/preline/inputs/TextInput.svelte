<script>
	import InvalidInput from '../../icons/InvalidInput.svelte';
	import { createEventDispatcher } from 'svelte';
	import log from 'loglevel';
	import newUniqueId from 'locally-unique-id-generator'

	const dispatch = createEventDispatcher();

	export let type, name = type, id = newUniqueId(), value = '', placeholder = '', label = name, errorText = `invalid ${name}`,
		hasError = false, required = false;
	let seePass = false;
	/**
	 * There's a bug in te colors, yellow and orange don't work for border colors
	 * @type {{bd: string, dark: {bd: string}}}
	 */
	export let colors = { bd: 'blue-500', dark: { bd: 'gray-700' } };

	function togglePassVisible() {
		log.debug('clicked!!!');
		seePass = !seePass;
		type = seePass ? 'text' : 'password';
	}
</script>

<div>
	<div class='flex justify-between items-center'>
		<label for={id} class='block text-sm mb-2 dark:text-white'>{label}</label>
		<slot name='labelComplement' />
	</div>
	<div class='relative'>
		<input {type} {name} id={id} {value} {placeholder}
					 class={`py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-${colors.bd} focus:ring-${colors.bd} dark:bg-gray-800 dark:border-${colors.dark?.bd ?? colors.bd} dark:text-gray-400`}
					 {required} aria-describedby='email-error' on:keypress on:keyup on:keydown on:input on:focus on:blur>
		{#if hasError}
			<div class='absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3'>
				<InvalidInput />
			</div>
		{:else if (type == 'password' || seePass)}
			<div class='absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer' on:click={togglePassVisible}>
				<span class='material-symbols-outlined'>
					{seePass ? 'visibility' : 'visibility_off'}
				</span>
			</div>
		{/if}
	</div>
	<p class={hasError ? 'text-xs text-red-600 mt-2' : 'hidden'} id={id+'-error'}>{errorText}</p>
</div>