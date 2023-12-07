<!-- +layout.svelte -->
<script>
	import '../app.postcss';
	import { resolverContext } from '$lib/ioc/resolverContext';
	import { Resolver } from '../example/Resolver';
	import { createFakeUser, getUserStore, userResolverContext } from '../example/Session';
	import { page } from '$app/stores';
	// import { afterNavigate } from "$app/navigation";

	// preline needs this to be called: https://preline.co/docs/frameworks-svelte.html
	// afterNavigate(() => {
	// 	HSStaticMethods.autoInit();
	// });

	const { setResolver } = resolverContext();
	userResolverContext();


	setResolver(new Resolver());
	const user = getUserStore();
	let currentRoute;
	$: currentRoute = $page.url.pathname;

	// currentRoute has to be passed as a parameter to notify the svelte that the result will change
	function selectionCssFor(currentRoute, route, exact = false) {
		if(!currentRoute)
			return ''
		let highlight = currentRoute.startsWith(route);
		if( highlight && exact )
			highlight = currentRoute === route
		return `font-medium ${highlight ? 'text-blue-600 dark:text-blue-500 hover:text-blue-400 dark:hover:text-blue-500' : 'text-gray-500 dark:text-gray-400 hover:text-gray-400 dark:hover:text-gray-500' } sm:py-6`
	}
</script>

<main>
	<header
		class='flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700'>
		<nav class='relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8'
				 aria-label='Global'>
			<div class='flex items-center justify-between'>
				<a class='flex-none text-xl font-semibold dark:text-white' href='https://user-credits.dev' aria-label='Brand'>UserCredits</a>
				<div class='sm:hidden'>
					<button type='button'
									class='hs-collapse-toggle w-9 h-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
									data-hs-collapse='#navbar-collapse-with-animation' aria-controls='navbar-collapse-with-animation'
									aria-label='Toggle navigation'>
						<svg class='hs-collapse-open:hidden w-4 h-4' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
							<path fill-rule='evenodd'
										d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z' />
						</svg>
						<svg class='hs-collapse-open:block flex-shrink-0 hidden w-4 h-4' width='16' height='16' fill='currentColor'
								 viewBox='0 0 16 16'>
							<path
								d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
						</svg>
					</button>
				</div>
			</div>
			<div id='navbar-collapse-with-animation'
					 class='hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block'>
				<div
					class='flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7'>
					<a href="https://www.buymeacoffee.com/credits" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" style="height: 40px !important;width: 180px !important;" ></a>
					<a class={selectionCssFor(currentRoute, '/', true)} aria-current='page' href='/'>Landing</a>
					<a class={selectionCssFor(currentRoute, '/offers/')}
						 href='/offers/yearly'>Offers</a>
					{#if $user?._id}
						<a class={selectionCssFor(currentRoute, '/credits')}
							  href={`/credits/${$user._id}`}>Credits</a>
					{/if}
					<a class='font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500'
						 target='_blank' href='https://medium.com/@zhamdi'>Blog</a>
					<span
						class='cursor-pointer flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-s sm:border-gray-300 sm:my-6 sm:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500'
					>
						<svg class='flex-shrink-0 w-4 h-4' xmlns='http://www.w3.org/2000/svg' width='16' height='16'
								 fill='currentColor' viewBox='0 0 16 16'>
							<path
								d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z' />
						</svg>
						{#if $user?._id}
							{$user.name}
						{:else}
							<button on:click={createFakeUser}>
							Log in
							</button>
						{/if}
					</span>
				</div>
			</div>
		</nav>
	</header>
	<slot />
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap');
    button {
        background: none;
        border: none;
        outline: none;
        box-shadow: none;
    }
</style>