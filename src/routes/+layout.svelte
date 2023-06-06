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

<div class="bg-gradient-to-br from-blue-800 to-teal-900">
	<header>
		<Heading level="1" text="AB UI" />
	</header>

	<div class="flex flex-row p-4">
		<nav class="w-1/8">
			<Heading level="3" text="Navigation" />
			<ul class="bg-slate-100 text-slate-900 rounded-xl drop-shadow-xl p-2">
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/text">Text</a></li>
			</ul>
		</nav>

		<div class="flex flex-col pl-6 items-start justify-start w-7/8">
			<slot />
		</div>
	</div>
</div>

<style lang="postcss">
	* {
		box-sizing: border-box;
	}
</style>
