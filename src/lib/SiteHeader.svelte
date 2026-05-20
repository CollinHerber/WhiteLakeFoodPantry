<script lang="ts">
	import { asset, resolve } from '$app/paths';
	import { site } from '$lib/site';
	import { Button } from 'flowbite-svelte';
	import { BarsOutline, CloseOutline } from 'flowbite-svelte-icons';

	let menuOpen = $state(false);

	const navigation = [
		{ label: 'About', href: '/#about' },
		{ label: 'Donate', href: '/#donate' },
		{ label: 'Volunteer', href: '/#volunteer' },
		{ label: 'Events', href: '/#events' },
		{ label: 'Contact', href: '/contact/' }
	] as const;
</script>

<header class="sticky top-0 z-50 border-b border-green-900/10 bg-white/95 backdrop-blur">
	<nav class="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:px-6 lg:px-8">
		<a
			class="flex min-w-0 items-center gap-2 sm:gap-3"
			href={resolve('/')}
			aria-label={`${site.shortName} home`}
		>
			<img
				class="h-11 w-auto max-w-[190px] shrink-0 sm:h-12 sm:max-w-[230px]"
				src={asset(site.logoPath)}
				alt={site.name}
			/>
		</a>

		<div class="hidden items-center gap-7 md:flex">
			{#each navigation as item (item.href)}
				<a
					class="text-sm font-semibold text-slate-700 transition hover:text-green-700"
					href={resolve(item.href)}
				>
					{item.label}
				</a>
			{/each}
			<Button tag="a" href={resolve('/#donate')} color="green" size="sm" class="rounded-lg">
				Donate
			</Button>
		</div>

		<button
			class="inline-flex size-11 items-center justify-center rounded-lg border border-slate-200 text-slate-800 md:hidden"
			type="button"
			aria-label="Toggle navigation"
			aria-expanded={menuOpen}
			onclick={() => (menuOpen = !menuOpen)}
		>
			{#if menuOpen}
				<CloseOutline class="size-5" />
			{:else}
				<BarsOutline class="size-5" />
			{/if}
		</button>
	</nav>

	{#if menuOpen}
		<div class="border-t border-slate-100 bg-white px-4 py-4 md:hidden">
			<div class="mx-auto grid max-w-7xl gap-2">
				{#each navigation as item (item.href)}
					<a
						class="rounded-lg px-3 py-3.5 text-base font-semibold text-slate-700 hover:bg-green-50 hover:text-green-800"
						href={resolve(item.href)}
						onclick={() => (menuOpen = false)}
					>
						{item.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</header>
