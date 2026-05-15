<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { site } from '$lib/site';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="theme-color" content="#166534" />
	<meta name="application-name" content={site.shortName} />
</svelte:head>
{@render children()}
