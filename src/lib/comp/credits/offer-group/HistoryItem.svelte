<script>
	import { formatDate } from '../../../core/util';

	export let item;
</script>

<tr>
	<td class="h-px w-auto whitespace-nowrap">
		<div class="px-6 py-2 flex items-center gap-x-3">
			<div class="flex items-center gap-x-3">
				<div class="grow">
					<span class="block text-sm text-gray-800 dark:text-gray-200">{formatDate(item.createdAt)}</span>
				</div>
			</div>
		</div>
	</td>
	<td class="h-px w-auto whitespace-nowrap">
		<div class="px-6 py-2">
			<span class="font-semibold text-sm text-gray-800 dark:text-gray-200">{item.tokens}</span>
			<span class="text-xs text-gray-500">(+10%)</span>
		</div>
	</td>

	<td class="h-px w-px whitespace-nowrap">
		<div class="px-6 py-3">
			<span class="block text-sm text-gray-800 dark:text-gray-200">{item._id}</span>
		</div>
	</td>
</tr>