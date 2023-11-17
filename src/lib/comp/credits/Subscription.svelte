<script>
	import Tag from '../common/Tag.svelte';

	export let purchase;

	function formatDate(date) {
		if( !date )
			return null;
		return new Intl.DateTimeFormat('en-US').format(new Date(date))
	}

	function progressColor(value) {
		if( value > 50 )
			return 'teal'
		if( value > 20 )
			return 'amber'
		return 'red'
	}
</script>

<tr>
	<td class="h-px w-px whitespace-nowrap">
		<div class="ps-6 py-3">
			<label for="hs-at-with-checkboxes-1" class="flex">
				<input type="checkbox" class="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-at-with-checkboxes-1">
				<span class="sr-only">Checkbox</span>
			</label>
		</div>
	</td>
	<td class="h-px w-px whitespace-nowrap">
		<div class="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
			<div class="flex items-center gap-x-3">
				<div class="grow">
					<span class="block text-sm font-semibold text-gray-800 dark:text-gray-200">{purchase.name}</span>
					<span class="block text-sm text-gray-500">{purchase.cycle}</span>
				</div>
			</div>
		</div>
	</td>
	<td class="h-px w-72 whitespace-nowrap">
		<div class="px-6 py-3">
			<span class="block text-sm font-semibold text-gray-800 dark:text-gray-200">{purchase.total}</span>
			<span class="block text-sm text-gray-500">({purchase.quantity}x)</span>
		</div>
	</td>
	<td class="h-px w-px whitespace-nowrap">
		<Tag status={purchase.statusSummary} label={purchase.status}/>
	</td>
	<td class="h-px w-px whitespace-nowrap">
		<div class="px-6 py-3">
			<div class="flex items-center gap-x-3">
				<span class="text-xs text-gray-500">{Math.round(purchase.consumption?.percentage)}%</span>
				<!-- preload used colors -->
				<div class="flex w-full h-1.5 bg-teal-700 bg-amber-700 bg-red-700 bg-gray-200 rounded-full overflow-hidden dark:bg-teal-200 dark:bg-amber-200 dark:bg-red-200 dark:bg-gray-700">
					<div class={`flex flex-col justify-center overflow-hidden bg-${progressColor(purchase.consumption?.percentage)}-700 dark:bg-${progressColor(purchase.consumption?.percentage)}-200`} role="progressbar" style={`width: ${purchase.consumption?.percentage}%`} aria-valuenow={purchase.consumption?.value} aria-valuemin={purchase.consumption?.min} aria-valuemax={purchase.consumption?.max}></div>
				</div>
			</div>
		</div>
	</td>
	<td class="h-px w-px whitespace-nowrap">
		<div class="px-6 py-3">
			<span class="block text-sm font-semibold text-gray-800 dark:text-gray-200">{formatDate(purchase.expires) ?? '-'}</span>
			<span class="block text-sm text-gray-500">{formatDate(purchase.starts)}</span>
		</div>
	</td>
	<td class="h-px w-px whitespace-nowrap">
		<div class="px-6 py-1.5">
			<a class="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
				Edit
			</a>
		</div>
	</td>
</tr>
