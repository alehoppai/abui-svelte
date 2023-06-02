<script lang="ts">
	import type { Size, Width } from '$lib/types.js'

	export let gap: Size = 0
	export let dir: 'row' | 'col' = 'col'
	export let align: 'start' | 'center' | 'end' = 'start'
	export let justify: 'start' | 'center' | 'end' = 'start'
	export let width: Width = 'full'
</script>

<div class="flex flex-{dir} gap-{gap} justify-{justify} align-{align} w-{width}">
	<slot />
</div>
