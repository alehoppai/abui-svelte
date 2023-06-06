<script lang="ts">
	import { theme } from '$lib/theme.js'

	export let level: '1' | '2' | '3' | '4' | '5' | '6' = '1'
	export let text: string = ''
</script>

{#if level === '1'}
	<h1 class:white={$theme.textColor === 'light'}>{text}</h1>
{:else if level === '2'}
	<h2 class:white={$theme.textColor === 'light'}>{text}</h2>
{:else if level === '3'}
	<h3 class:white={$theme.textColor === 'light'}>{text}</h3>
{:else if level === '4'}
	<h4 class:white={$theme.textColor === 'light'}>{text}</h4>
{:else if level === '5'}
	<h5 class:white={$theme.textColor === 'light'}>{text}</h5>
{:else if level === '6'}
	<h6 class:white={$theme.textColor === 'light'}>{text}</h6>
{/if}

<style lang="postcss">
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		@apply text-slate-900 py-4 w-full;
	}

	.white {
		@apply text-slate-100;
	}

	h1 {
		@apply text-6xl font-bold;
	}

	h2 {
		@apply text-5xl font-bold;
	}

	h3 {
		@apply text-4xl font-semibold;
	}

	h4 {
		@apply text-3xl font-semibold;
	}

	h5 {
		@apply text-2xl font-semibold;
	}

	h6 {
		@apply text-xl font-semibold;
	}
</style>
