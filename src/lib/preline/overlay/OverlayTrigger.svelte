<script>
	/**
	 * This component gets along with accordion, it lets you reuse the same accordion you declared for large displays but displaying it as an overlay for small screens
	 *
	 */
	import Overlay from './Overlay';
	import log from 'loglevel';

	if (typeof window !== 'undefined' ) {
		if( !window.HSOverlay ) {
			log.debug('initializing HSOverlay');
			window.HSOverlay = new Overlay();
			window.HSOverlay.init();
		}
	}

</script>

<button type='button' class='text-gray-500 hover:text-gray-600' data-hs-overlay='#application-sidebar'
				aria-controls='application-sidebar' aria-label='Toggle navigation'>
	<span class='sr-only'>Toggle Navigation</span>
	<svg class='w-5 h-5' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
		<path fill-rule='evenodd'
					d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z' />
	</svg>
</button>