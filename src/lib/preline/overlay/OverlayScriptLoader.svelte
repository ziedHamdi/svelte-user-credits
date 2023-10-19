<script>
	/**
	 * This component loads the overlay feature, include it in each component that triggers an overlay opening.
	 * It expects a component with a class <code>hs-overlay</code>
	 *
	 * It can also attach an event listener if it finds a component with an attribute <code>data-hs-overlay</code> who's value is the css selector for the overlay <code>hs-overlay</code> component
	 * Example: <span data-hs-overlay='#hs-modal-signIn'>Sign in</span> : because data-hs-overlay specifies the value <b>#hs-modal-signIn</>b>, the component with that id will be open on click
	 *
	 * Typical code would be like follows:
	 * < - script ->
	 *   	onMount(() => {
	 * if (open) {
	 *	window.HSOverlay.open(overlay);
	 * }
	 * });< -/script ->
	 * <main>
	 * <OverlayScriptLoader />
	 * <div bind:this={overlay} class='hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto'>
	 * </main>
	 */
	import Overlay from './Overlay';
	import log from 'loglevel';

	if (typeof window !== 'undefined') {
		if (!window.HSOverlay) {
			log.debug('initializing HSOverlay');
			window.HSOverlay = new Overlay();
			window.HSOverlay.init();
		}
	}

</script>