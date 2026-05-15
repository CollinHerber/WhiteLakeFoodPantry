<script lang="ts">
	import { asset, resolve } from '$app/paths';
	import { site } from '$lib/site';
	import { Button } from 'flowbite-svelte';
	import {
		ArrowRightOutline,
		BarsOutline,
		BowlFoodOutline,
		BuildingOutline,
		CalendarWeekOutline,
		CheckCircleOutline,
		CloseOutline,
		EnvelopeOutline,
		GiftBoxOutline,
		HeartOutline,
		MapPinAltOutline,
		PhoneOutline,
		UsersGroupOutline
	} from 'flowbite-svelte-icons';

	let menuOpen = $state(false);

	const heroImage = asset('/images/pantry-volunteers.jpg');
	const navigation = [
		{ label: 'Get Help', href: '/#get-help' },
		{ label: 'Donate', href: '/#donate' },
		{ label: 'Volunteer', href: '/#volunteer' },
		{ label: 'Visit', href: '/#visit' }
	] as const;

	const impactStats = [
		{ value: 'Local', label: 'serving White Lake area families' },
		{ value: 'Practical', label: 'food, basics, and community support' },
		{ value: 'Welcoming', label: 'clear next steps for guests and donors' }
	];

	const serviceCards = [
		{
			title: 'Food support',
			text: 'A reliable place for neighbors to find pantry staples, household basics, and community care.',
			icon: BowlFoodOutline
		},
		{
			title: 'Donations',
			text: 'Food, funds, and practical supplies help the pantry respond to seasonal and urgent needs.',
			icon: GiftBoxOutline
		},
		{
			title: 'Volunteers',
			text: 'Flexible help keeps shelves organized, grocery boxes packed, and pantry days running smoothly.',
			icon: UsersGroupOutline
		}
	];

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'NGO',
		name: site.name,
		description: site.description,
		url: site.url,
		email: site.email,
		telephone: site.phone,
		address: {
			'@type': 'PostalAddress',
			streetAddress: site.location.address,
			addressLocality: site.location.locality,
			addressRegion: site.location.region,
			postalCode: site.location.postalCode,
			addressCountry: 'US'
		},
		image: `${site.url}/images/pantry-volunteers.jpg`
	};

	const scriptClose = '</' + 'script>';
	const jsonLdMarkup = `<script type="application/ld+json">${JSON.stringify(jsonLd).replaceAll('<', '\\u003c')}${scriptClose}`;
</script>

<svelte:head>
	<title>{site.name} | Food Pantry in {site.location.locality}, {site.location.region}</title>
	<meta name="description" content={site.description} />
	<link rel="canonical" href={`${site.url}/`} />
	<link rel="manifest" href={asset('/site.webmanifest')} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={`${site.name} | Community Food Pantry`} />
	<meta property="og:description" content={site.description} />
	<meta property="og:url" content={`${site.url}/`} />
	<meta property="og:image" content={`${site.url}/images/pantry-volunteers.jpg`} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={`${site.name} | Community Food Pantry`} />
	<meta name="twitter:description" content={site.description} />
	<meta name="twitter:image" content={`${site.url}/images/pantry-volunteers.jpg`} />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html jsonLdMarkup}
</svelte:head>

<header class="sticky top-0 z-50 border-b border-green-900/10 bg-white/95 backdrop-blur">
	<nav class="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:px-6 lg:px-8">
		<a
			class="flex min-w-0 items-center gap-2 sm:gap-3"
			href={resolve('/#top')}
			aria-label={`${site.shortName} home`}
		>
			<span
				class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-green-700 text-white sm:size-11"
			>
				<HeartOutline class="size-5 sm:size-6" />
			</span>
			<span class="min-w-0 leading-tight">
				<span class="block text-sm font-bold text-slate-950 sm:text-base">{site.shortName}</span>
				<span class="block text-xs font-medium tracking-wide text-green-700 uppercase"
					>Community pantry</span
				>
			</span>
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
			<Button tag="a" href={resolve('/#donate')} color="green" size="sm" class="rounded-lg"
				>Donate</Button
			>
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

<main id="top">
	<section
		class="relative overflow-hidden bg-slate-950 text-white"
		style={`background-image: linear-gradient(90deg, rgba(6, 24, 20, 0.86), rgba(6, 24, 20, 0.55), rgba(6, 24, 20, 0.2)), url('${heroImage}'); background-size: cover; background-position: center;`}
	>
		<div
			class="mx-auto grid min-h-[68svh] max-w-7xl content-center px-4 py-14 sm:min-h-[74svh] sm:px-6 sm:py-20 lg:px-8"
		>
			<div class="max-w-3xl">
				<p
					class="mb-4 inline-flex rounded-full bg-white/15 px-3 py-2 text-sm font-semibold text-green-50 ring-1 ring-white/25 sm:mb-5 sm:px-4"
				>
					{site.location.locality}, {site.location.region}
				</p>
				<h1
					class="max-w-3xl text-3xl leading-tight font-black text-balance sm:text-5xl lg:text-6xl"
				>
					{site.name}
				</h1>
				<p class="mt-5 max-w-2xl text-base leading-7 text-green-50 sm:mt-6 sm:text-xl sm:leading-8">
					{site.tagline}
				</p>
				<div class="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
					<Button
						tag="a"
						href={resolve('/#get-help')}
						color="green"
						size="lg"
						class="w-full rounded-lg sm:w-auto"
					>
						Get pantry details
						<ArrowRightOutline class="ms-2 size-5" />
					</Button>
					<Button
						tag="a"
						href={resolve('/#donate')}
						color="light"
						size="lg"
						class="w-full rounded-lg sm:w-auto"
					>
						Support the pantry
					</Button>
				</div>
			</div>
		</div>
	</section>

	<section class="border-y border-green-900/10 bg-white">
		<div class="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:grid-cols-3 sm:px-6 lg:px-8">
			{#each impactStats as stat (stat.value)}
				<div class="flex items-start gap-3">
					<CheckCircleOutline class="mt-1 size-5 shrink-0 text-green-700" />
					<p>
						<span class="block text-lg font-bold text-slate-950">{stat.value}</span>
						<span class="text-sm text-slate-600">{stat.label}</span>
					</p>
				</div>
			{/each}
		</div>
	</section>

	<section id="get-help" class="scroll-mt-24 bg-[#f8faf7] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
		<div class="mx-auto max-w-7xl">
			<div class="max-w-3xl">
				<p class="text-sm font-bold tracking-wide text-green-700 uppercase">
					What the pantry provides
				</p>
				<h2 class="mt-3 text-2xl font-black text-balance text-slate-950 sm:text-4xl">
					Simple information for neighbors who need food support.
				</h2>
				<p class="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
					The pantry keeps the most important details easy to find: how to get help, what to bring,
					where to go, and how the community can contribute.
				</p>
			</div>

			<div class="mt-8 grid gap-4 sm:mt-10 md:grid-cols-3">
				{#each serviceCards as card (card.title)}
					{@const Icon = card.icon}
					<div class="h-full rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
						<Icon class="mb-4 size-9 text-green-700 sm:mb-5 sm:size-10" />
						<h3 class="text-lg font-bold text-slate-950 sm:text-xl">{card.title}</h3>
						<p class="mt-3 leading-7 text-slate-600">{card.text}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section id="donate" class="scroll-mt-24 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
		<div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
			<div>
				<p class="text-sm font-bold tracking-wide text-amber-700 uppercase">Donate</p>
				<h2 class="mt-3 text-2xl font-black text-balance text-slate-950 sm:text-4xl">
					Every practical gift helps keep pantry shelves ready.
				</h2>
				<p class="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
					Donations help provide steady access to everyday food, personal care items, and seasonal
					support for neighbors in the White Lake area.
				</p>
				<div class="mt-8 flex flex-col gap-3 sm:flex-row">
					<Button
						tag="a"
						href={`mailto:${site.email}`}
						color="yellow"
						class="w-full rounded-lg sm:w-auto"
					>
						<EnvelopeOutline class="me-2 size-5" />
						Contact to donate
					</Button>
					<Button
						tag="a"
						href={resolve('/#visit')}
						color="alternative"
						class="w-full rounded-lg sm:w-auto"
					>
						<MapPinAltOutline class="me-2 size-5" />
						Find the pantry
					</Button>
				</div>
			</div>

			<div class="grid gap-3 sm:grid-cols-2 sm:gap-4">
				{#each site.donationNeeds as need (need)}
					<div class="rounded-lg border border-amber-200 bg-amber-50 p-4 sm:p-5">
						<GiftBoxOutline class="mb-4 size-7 text-amber-700" />
						<p class="leading-7 font-semibold text-slate-800">{need}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section
		id="volunteer"
		class="scroll-mt-24 bg-green-950 px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8"
	>
		<div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
			<div>
				<p class="text-sm font-bold tracking-wide text-green-200 uppercase">Volunteer</p>
				<h2 class="mt-3 text-2xl font-black text-balance sm:text-4xl">
					Make pantry days easier for everyone.
				</h2>
				<p class="mt-4 text-base leading-7 text-green-50 sm:text-lg sm:leading-8">
					Volunteers help create a calm, welcoming pantry experience, from sorting donations to
					packing grocery boxes and supporting community distribution days.
				</p>
			</div>
			<div class="grid gap-4">
				{#each site.volunteerNeeds as need (need)}
					<div class="flex gap-3 rounded-lg bg-white/10 p-4 ring-1 ring-white/15 sm:gap-4 sm:p-5">
						<UsersGroupOutline class="mt-1 size-7 shrink-0 text-green-200" />
						<p class="leading-7 font-semibold text-green-50">{need}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section id="visit" class="scroll-mt-24 bg-[#f8faf7] px-4 pt-12 pb-24 sm:px-6 sm:py-16 lg:px-8">
		<div class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
			<div class="lg:col-span-1">
				<p class="text-sm font-bold tracking-wide text-blue-700 uppercase">Visit</p>
				<h2 class="mt-3 text-2xl font-black text-slate-950 sm:text-4xl">Location and hours</h2>
				<p class="mt-4 leading-7 text-slate-600">
					Reach out before visiting if you have questions about pantry hours, donation drop-off, or
					volunteer opportunities.
				</p>
			</div>
			<div class="grid gap-5 sm:grid-cols-2 lg:col-span-2">
				<div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
					<BuildingOutline class="mb-5 size-9 text-blue-700" />
					<h3 class="text-lg font-bold text-slate-950 sm:text-xl">{site.location.name}</h3>
					<p class="mt-3 leading-7 text-slate-600">
						{site.location.address}<br />
						{site.location.locality}, {site.location.region}
						{site.location.postalCode}
					</p>
				</div>
				<div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
					<CalendarWeekOutline class="mb-5 size-9 text-blue-700" />
					<h3 class="text-lg font-bold text-slate-950 sm:text-xl">Hours</h3>
					<div class="mt-3 grid gap-3">
						{#each site.hours as item (item.label)}
							<p class="leading-7">
								<span class="block font-semibold text-slate-950">{item.label}</span>
								<span class="text-slate-600">{item.value}</span>
							</p>
						{/each}
					</div>
				</div>
				<div class="col-span-full rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
					<div class="grid gap-5 sm:grid-cols-2">
						<div class="min-w-0">
							<PhoneOutline class="mb-5 size-9 text-green-700" />
							<h3 class="text-lg font-bold text-slate-950 sm:text-xl">Contact</h3>
							<p class="mt-3 leading-7 text-slate-600">
								<a
									class="font-semibold break-words text-green-700 hover:text-green-800"
									href={`tel:${site.phone}`}
								>
									{site.phone}
								</a><br />
								<a
									class="font-semibold break-words text-green-700 hover:text-green-800"
									href={`mailto:${site.email}`}
								>
									{site.email}
								</a>
							</p>
						</div>
						<div class="rounded-lg bg-slate-100 p-4 sm:p-5">
							<MapPinAltOutline class="mb-4 size-8 text-slate-700" />
							<p class="leading-7 font-semibold text-slate-800">
								Map and directions will be shared here so guests, donors, and volunteers can find
								the pantry easily.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

<footer class="border-t border-slate-200 bg-white px-4 py-8 sm:px-6 lg:px-8">
	<div
		class="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between"
	>
		<p class="font-semibold text-slate-800">{site.name}</p>
		<p>{site.tagline}</p>
	</div>
</footer>
