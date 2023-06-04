<script lang="ts">
	export let dir: 'row' | 'col' = 'col'
	export let gap: number = 0
	export let align: 'start' | 'center' | 'end' = 'start'
	export let justify: 'start' | 'center' | 'end' = 'start'
</script>

<div
	class="stack"
	style:--gap="{gap}px"
	class:col={dir === 'col'}
	class:row={dir === 'row'}
	class:align-start={align === 'start'}
	class:align-center={align === 'center'}
	class:align-end={align === 'end'}
	class:justify-start={justify === 'start'}
	class:justify-center={justify === 'center'}
	class:justify-end={justify === 'end'}
>
	<slot />
</div>

<style lang="postcss">
	.stack {
		display: flex;
		gap: var(--gap);

		&.col {
			flex-direction: column;
		}
		&.row {
			flex-direction: row;
		}

		&.align-start {
			align-items: flex-start;
		}
		&.align-center {
			align-items: center;
		}
		&.align-end {
			align-items: flex-end;
		}

		&.justify-start {
			justify-content: flex-start;
		}
		&.justify-center {
			justify-content: center;
		}
		&.justify-end {
			justify-content: flex-end;
		}
	}
</style>
