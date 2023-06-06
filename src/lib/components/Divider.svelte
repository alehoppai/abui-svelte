<script lang="ts">
	export let dark = false
</script>

<div class="w-full h-px" class:dark />

<style lang="postcss">
	div {
		@apply bg-slate-300/50;

		&.dark {
			@apply bg-slate-700/50;
		}
	}
</style>
