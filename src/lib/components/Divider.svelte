<script lang="ts">
	export let dark = false
</script>

<div class:dark />

<style lang="postcss">
	div {
		@apply bg-slate-300/50 w-full h-px;

		&.dark {
			@apply bg-slate-700/50;
		}
	}
</style>
