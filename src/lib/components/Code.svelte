<script lang="ts">
	import { Icon, ClipboardDocumentList } from 'svelte-hero-icons'

	export let dark = false

	let code: HTMLElement | null = null

	const saveToClipboard = () => {
		navigator.clipboard.writeText(code!.innerText)
	}
</script>

<!-- <code class:dark><slot /></code> -->
<pre class:dark>
	<code bind:this={code}><slot /></code>
	<button on:click={saveToClipboard}>
		<Icon src={ClipboardDocumentList} size="32" class="absolute top-0 left-0" />
	</button>
</pre>

<style lang="postcss">
	pre {
		@apply font-mono bg-slate-100 text-slate-900 p-2 rounded relative;

		&.dark {
			@apply bg-slate-900 text-slate-100;
		}
	}

	button {
		@apply absolute top-2 right-2 w-8 h-8;
	}
</style>
