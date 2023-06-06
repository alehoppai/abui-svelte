<script lang="ts">
	import { Icon, ClipboardDocumentList } from 'svelte-hero-icons'

	export let dark = false

	let code: HTMLElement | null = null

	const saveToClipboard = () => {
		navigator.clipboard.writeText(code!.innerText)
	}
</script>

<div>
	<pre
		class:dark
		class="prettyprint"
		style="padding-block: 0.375rem; padding-left: 0.5rem; padding-right: 3rem;"><code
			bind:this={code}><slot /></code
		></pre>

	<button on:click={saveToClipboard}>
		<Icon src={ClipboardDocumentList} size="32" class="absolute top-0 left-0" />
	</button>
</div>

<style lang="postcss">
	div {
		@apply relative;

		&:hover {
			@apply cursor-pointer;
		}
	}

	pre {
		@apply font-mono bg-slate-100 text-slate-900 rounded;

		&.dark {
			@apply bg-slate-900 text-slate-100;
		}
	}

	button {
		@apply absolute top-1 right-2 w-8 h-8;
	}
</style>
