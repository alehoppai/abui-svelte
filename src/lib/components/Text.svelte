<script lang="ts">
	import { theme } from '$lib/theme.js'

	export let block = false
	export let weight: 'thin' | 'normal' | 'semibold' | 'bold' = 'normal'
	export let size: 'xs' | 'sm' | 'md' | 'lg' = 'md'
	export let color: 'success' | 'warning' | 'danger' | 'info' | 'default' = 'default'
</script>

{#if block}
	<p
		class:thin={weight === 'thin'}
		class:semibold={weight === 'semibold'}
		class:bold={weight === 'bold'}
		class:xs={size === 'xs'}
		class:sm={size === 'sm'}
		class:lg={size === 'lg'}
		class:light={$theme.textColor === 'light'}
		class:success={color === 'success'}
		class:warning={color === 'warning'}
		class:danger={color === 'danger'}
	>
		<slot />
	</p>
{:else}
	<span
		class:thin={weight === 'thin'}
		class:semibold={weight === 'semibold'}
		class:bold={weight === 'bold'}
		class:xs={size === 'xs'}
		class:sm={size === 'sm'}
		class:lg={size === 'lg'}
		class:light={$theme.textColor === 'light'}
		class:success={color === 'success'}
		class:warning={color === 'warning'}
		class:info={color === 'info'}
		class:danger={color === 'danger'}><slot /></span
	>
{/if}

<style lang="postcss">
	span,
	p {
		@apply font-normal text-slate-900;
	}

	p {
		margin-block: 0.5rem;
	}

	.semibold {
		@apply font-semibold;
	}
	.bold {
		@apply font-bold;
	}
	.xs {
		@apply text-xs;
	}
	.sm {
		@apply text-sm;
	}
	.lg {
		@apply text-lg;
	}
	.light {
		@apply text-slate-100;
	}
	.success {
		@apply text-green-500;
	}
	.warning {
		@apply text-yellow-500;
	}
	.danger {
		@apply text-red-500;
	}
	.info {
		@apply text-blue-500;
	}
</style>
