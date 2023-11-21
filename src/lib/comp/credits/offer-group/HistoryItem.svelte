<script>
	import { formatDate } from '../../../core/util';

	export let item;
</script>

<tr>
	<td> </td>
	<td class="h-px w-px whitespace-nowrap">
		<div class="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
			<div class="flex items-center gap-x-3">
				<div class="grow">
					<span class="block text-sm font-semibold text-gray-800 dark:text-gray-200">{formatDate(item.createdAt)}</span>
				</div>
			</div>
		</div>
	</td>
	<td class="h-px w-72 whitespace-nowrap">
		<div class="px-6 py-3">
			<span class="block text-sm font-semibold text-gray-800 dark:text-gray-200">{item.tokens}</span>
		</div>
	</td>

	<td class="h-px w-px whitespace-nowrap">
		<div class="px-6 py-3">
			<span class="block text-sm font-semibold text-gray-800 dark:text-gray-200">{item._id}</span>
		</div>
	</td>
</tr>