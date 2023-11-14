<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let checked;
	export let leftLabel;
	export let rightLabel;
	export let rightLabelNote;

	function modified(e) {
		dispatch('modified', { checked: e.target.checked });
	}
</script>
<!-- Switch -->
<div class='flex justify-center items-center'>
	<form>
		<label class='min-w-[3.5rem] text-sm text-gray-500 mr-3 dark:text-gray-400'
					 for='hs-basic-with-description'>{leftLabel}</label>

		<input on:change={modified} type='checkbox' {checked} id='hs-basic-with-description' class='relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800
    before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200'
		>

		<label class='relative min-w-[3.5rem] text-sm text-gray-500 ml-3 dark:text-gray-400'
					 for='hs-basic-with-description'>
			{rightLabel}
			<span class='absolute -top-10 left-auto -right-28'>
        <span class='flex items-center'>
          <svg class='w-14 h-8 -mr-6' width='45' height='25' viewBox='0 0 45 25' fill='none'
							 xmlns='http://www.w3.org/2000/svg'>
            <path
							d='M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z'
							fill='currentColor' class='fill-gray-300 dark:fill-gray-700' />
          </svg>
          <span
						class='mt-3 inline-block whitespace-nowrap text-[11px] leading-5 font-semibold tracking-wide uppercase bg-blue-600 text-white rounded-full py-1 px-2.5'>{rightLabelNote}</span>
        </span>
      </span>
		</label>
	</form>
</div>
<!-- End Switch -->
