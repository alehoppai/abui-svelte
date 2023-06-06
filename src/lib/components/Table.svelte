<script lang="ts">
	export let dark = false
	export let data: {
		headers: string[]
		rows: string[][]
	} = { headers: [], rows: [] }
</script>

<table class:dark>
	<thead>
		<tr>
			{#each data.headers as header}
				<th>{header}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each data.rows as row}
			<tr>
				{#each row as cell}
					<td>{cell}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style lang="postcss">
	table {
		@apply w-full border-collapse bg-slate-100 text-slate-900 rounded-md;
	}

	thead {
		@apply rounded-t-md;
	}

	thead > tr {
		@apply divide-x divide-slate-500;
	}

	th {
		@apply font-semibold p-2 bg-slate-900 text-slate-100;
	}
	th:first-child {
		@apply rounded-tl-md;
	}
	th:last-child {
		@apply rounded-tr-md;
	}

	td {
		@apply p-2;
	}

	tbody {
		@apply divide-y divide-slate-300;
	}
	tbody > tr {
		@apply divide-x divide-slate-300;
	}

	.dark {
		@apply bg-slate-900 text-slate-100;
	}
</style>
