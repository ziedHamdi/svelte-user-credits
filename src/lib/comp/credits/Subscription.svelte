<script>
	import Tag from '../common/Tag.svelte';

	export let purchase;

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
			<span class="block text-sm text-gray-500">{purchase.quantity}</span>
		</div>
	</td>
	<td class="h-px w-px whitespace-nowrap">
		<Tag status={purchase.statusSummary} label={purchase.status}/>
	</td>
	<td class="h-px w-px whitespace-nowrap">
		<div class="px-6 py-3">
			<div class="flex items-center gap-x-3">
				<span class="text-xs text-gray-500">{purchase.credits?.percentage}%</span>
				<div class="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
					<div class="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-gray-200" role="progressbar" style="width: 25%" aria-valuenow={purchase.credits?.value} aria-valuemin={purchase.credits?.min} aria-valuemax={purchase.credits?.origin}></div>
				</div>
			</div>
		</div>
	</td>
	<td class="h-px w-px whitespace-nowrap">
		<div class="px-6 py-3">
			<span class="text-sm text-gray-500">{purchase.starts}</span>
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
