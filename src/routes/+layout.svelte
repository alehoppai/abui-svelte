<script lang="ts">
	import Heading from '$lib/components/Heading.svelte'
	import '../app.css'
	import { theme } from '$lib/theme.js'

	$theme.textColor = 'light'
</script>

<svelte:head>
	<script
		src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"
	></script>
</svelte:head>

<div class="p-2 bg-gradient-to-br from-blue-800 to-teal-900 w-full h-full min-h-screen">
	<header>
		<Heading level="1" text="AB UI" />
	</header>

	<div class="flex flex-row">
		<nav class="">
			<Heading level="3" text="Navigation" />
			<ul class="p-4 bg-slate-100 text-slate-900 rounded-xl drop-shadow-xl">
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/text">Text</a></li>
			</ul>
		</nav>

		<div class="p-4">
			<slot />
		</div>
	</div>
</div>

<style lang="postcss">
</style>
