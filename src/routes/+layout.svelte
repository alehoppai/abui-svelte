<script lang="ts">
	import Stack from '$lib/components/layout/Stack.svelte'
</script>

<header>
	<h1>ABUI</h1>
</header>

<Stack dir="row">
	<nav>
		<h3>Navigation</h3>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
		</ul>

		<h3>Components</h3>
		<h4>Layout</h4>
		<ul>
			<li><a href="/stack">Stack</a></li>
		</ul>
	</nav>
	<div>
		<slot />
	</div>
</Stack>
