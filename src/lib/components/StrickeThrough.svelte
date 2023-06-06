<script lang="ts">
	import Text from './Text.svelte'

	export let weight: 'thin' | 'normal' | 'semibold' | 'bold' = 'normal'
	export let size: 'xs' | 'sm' | 'md' | 'lg' = 'md'
	export let color: 'success' | 'warning' | 'danger' | 'info' | 'default' = 'default'
</script>

<Text {weight} {size} {color}>
	<span class="line-through"><slot /></span>
</Text>
