<script lang="ts">
	import { asset, resolve } from '$app/paths';
	import { site } from '$lib/site';
	import { Button } from 'flowbite-svelte';
	import {
		ArrowRightOutline,
		BowlFoodOutline,
		CalendarWeekOutline,
		CheckPlusCircleOutline,
		CheckCircleOutline,
		ClipboardListOutline,
		EnvelopeOutline,
		GiftBoxOutline,
		HeartOutline,
		MapPinAltOutline,
		UsersGroupOutline
	} from 'flowbite-svelte-icons';

	const heroImage = asset('/images/pantry-volunteers.jpg');
	const logoImage = asset(site.logoPath);
	const donationIcons = [HeartOutline, CheckPlusCircleOutline, BowlFoodOutline] as const;

	const impactStats = [
		{ value: 'Food', label: 'support for local households' },
		{ value: 'Supplies', label: 'personal care and healthcare basics' },
		{ value: 'Neighbors', label: 'volunteers, donors, and partners' }
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
		image: `${site.url}/images/pantry-volunteers.jpg`,
		sameAs: [site.facebookUrl]
	};

	const scriptClose = '</' + 'script>';
	const jsonLdMarkup = `<script type="application/ld+json">${JSON.stringify(jsonLd).replaceAll('<', '\\u003c')}${scriptClose}`;

	function handleVolunteerSubmit(event: SubmitEvent) {
		event.preventDefault();

		const form = event.currentTarget as HTMLFormElement;
		const data = new FormData(form);
		const lines = [
			'Volunteer interest form',
			'',
			`Name: ${data.get('name') || ''}`,
			`Email: ${data.get('email') || ''}`,
			`Phone: ${data.get('phone') || ''}`,
			`Availability: ${data.get('availability') || ''}`,
			`Interests: ${data.get('interests') || ''}`,
			'',
			`Message: ${data.get('message') || ''}`
		];

		window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Volunteer interest')}&body=${encodeURIComponent(lines.join('\n'))}`;
	}
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

<main id="top">
	<section
		class="relative overflow-hidden bg-slate-950 text-white"
		style={`background-image: linear-gradient(90deg, rgba(6, 24, 20, 0.88), rgba(6, 24, 20, 0.6), rgba(6, 24, 20, 0.18)), url('${heroImage}'); background-size: cover; background-position: center;`}
	>
		<div
			class="mx-auto grid min-h-[68svh] max-w-7xl content-center px-4 py-14 sm:min-h-[74svh] sm:px-6 sm:py-20 lg:px-8"
		>
			<div class="max-w-3xl">
				<img
					class="mb-6 h-16 w-auto rounded-lg bg-white p-2 sm:h-20"
					src={logoImage}
					alt={site.name}
				/>
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
						href={resolve('/contact/')}
						color="green"
						size="lg"
						class="w-full rounded-lg sm:w-auto"
					>
						Contact the pantry
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

	<section id="about" class="scroll-mt-24 bg-[#f8faf7] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
		<div class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
			<div>
				<p class="text-sm font-bold tracking-wide text-green-700 uppercase">About and mission</p>
				<h2 class="mt-3 text-2xl font-black text-balance text-slate-950 sm:text-4xl">
					A clear place to explain who the pantry serves and why the work matters.
				</h2>
			</div>
			<div class="grid gap-5">
				<p class="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{site.mission}</p>
				<div class="grid gap-4 sm:grid-cols-3">
					<div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
						<BowlFoodOutline class="mb-4 size-8 text-green-700" />
						<h3 class="font-bold text-slate-950">Food support</h3>
						<p class="mt-2 leading-7 text-slate-600">
							Pantry staples and food assistance for White Lake area households.
						</p>
					</div>
					<div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
						<HeartOutline class="mb-4 size-8 text-green-700" />
						<h3 class="font-bold text-slate-950">Community care</h3>
						<p class="mt-2 leading-7 text-slate-600">
							A welcoming, practical resource for neighbors, donors, and volunteers.
						</p>
					</div>
					<div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
						<ClipboardListOutline class="mb-4 size-8 text-green-700" />
						<h3 class="font-bold text-slate-950">Room to grow</h3>
						<p class="mt-2 leading-7 text-slate-600">
							Mission details, eligibility notes, and additional history can be added later.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="donate" class="scroll-mt-24 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
		<div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
			<div>
				<p class="text-sm font-bold tracking-wide text-amber-700 uppercase">Donations</p>
				<h2 class="mt-3 text-2xl font-black text-balance text-slate-950 sm:text-4xl">
					Support the pantry without online payments.
				</h2>
				<p class="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
					This section outlines monetary, healthcare, and food donations while keeping payment
					processing off the website for now.
				</p>
				<div class="mt-8 flex flex-col gap-3 sm:flex-row">
					<Button
						tag="a"
						href={`mailto:${site.email}?subject=${encodeURIComponent('Donation question')}`}
						color="yellow"
						class="w-full rounded-lg sm:w-auto"
					>
						<EnvelopeOutline class="me-2 size-5" />
						Ask about donating
					</Button>
					<Button
						tag="a"
						href={resolve('/contact/')}
						color="alternative"
						class="w-full rounded-lg sm:w-auto"
					>
						<MapPinAltOutline class="me-2 size-5" />
						Drop-off details
					</Button>
				</div>
			</div>

			<div class="grid gap-4">
				<div class="grid gap-4 md:grid-cols-3">
					{#each site.donationMethods as method, index (method.title)}
						{@const Icon = donationIcons[index] ?? GiftBoxOutline}
						<div class="rounded-lg border border-amber-200 bg-amber-50 p-5">
							<Icon class="mb-4 size-8 text-amber-700" />
							<h3 class="text-lg font-bold text-slate-950">{method.title}</h3>
							<p class="mt-3 leading-7 text-slate-700">{method.text}</p>
						</div>
					{/each}
				</div>
				<div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
					<h3 class="text-lg font-bold text-slate-950 sm:text-xl">Current items to donate</h3>
					<ul class="mt-4 grid gap-3 sm:grid-cols-2">
						{#each site.donationNeeds as need (need)}
							<li class="flex gap-3 leading-7 text-slate-700">
								<CheckCircleOutline class="mt-1 size-5 shrink-0 text-green-700" />
								<span>{need}</span>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</section>

	<section
		id="volunteer"
		class="scroll-mt-24 bg-green-950 px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8"
	>
		<div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
			<div>
				<p class="text-sm font-bold tracking-wide text-green-200 uppercase">Volunteer</p>
				<h2 class="mt-3 text-2xl font-black text-balance sm:text-4xl">
					Invite people to give time where it helps most.
				</h2>
				<p class="mt-4 text-base leading-7 text-green-50 sm:text-lg sm:leading-8">
					Volunteers help keep shelves organized, prepare grocery boxes, support donation drives,
					and make fundraising events easier to run.
				</p>
				<div class="mt-7 grid gap-3">
					{#each site.volunteerNeeds as need (need)}
						<div class="flex gap-3 rounded-lg bg-white/10 p-4 ring-1 ring-white/15">
							<UsersGroupOutline class="mt-1 size-6 shrink-0 text-green-200" />
							<p class="leading-7 font-semibold text-green-50">{need}</p>
						</div>
					{/each}
				</div>
			</div>

			<form
				class="rounded-lg bg-white p-5 text-slate-900 shadow-sm sm:p-6"
				onsubmit={handleVolunteerSubmit}
			>
				<h3 class="text-xl font-black text-slate-950">Volunteer interest form</h3>
				<div class="mt-5 grid gap-4 sm:grid-cols-2">
					<label class="grid gap-2 text-sm font-semibold text-slate-700">
						Name
						<input
							class="rounded-lg border border-slate-300 px-3 py-3 font-normal"
							name="name"
							type="text"
							autocomplete="name"
							required
						/>
					</label>
					<label class="grid gap-2 text-sm font-semibold text-slate-700">
						Email
						<input
							class="rounded-lg border border-slate-300 px-3 py-3 font-normal"
							name="email"
							type="email"
							autocomplete="email"
							required
						/>
					</label>
					<label class="grid gap-2 text-sm font-semibold text-slate-700">
						Phone
						<input
							class="rounded-lg border border-slate-300 px-3 py-3 font-normal"
							name="phone"
							type="tel"
							autocomplete="tel"
						/>
					</label>
					<label class="grid gap-2 text-sm font-semibold text-slate-700">
						Availability
						<input
							class="rounded-lg border border-slate-300 px-3 py-3 font-normal"
							name="availability"
							type="text"
							placeholder="Weekdays, events, as needed"
						/>
					</label>
					<label class="grid gap-2 text-sm font-semibold text-slate-700 sm:col-span-2">
						Message
						<textarea
							class="min-h-28 rounded-lg border border-slate-300 px-3 py-3 font-normal"
							name="message"
							placeholder="Share anything helpful about your availability or experience"
						></textarea>
					</label>
				</div>
				<button
					class="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-green-700 px-5 py-3 font-bold text-white transition hover:bg-green-800 sm:w-auto"
					type="submit"
				>
					<EnvelopeOutline class="me-2 size-5" />
					Send volunteer interest
				</button>
			</form>
		</div>
	</section>

	<section id="events" class="scroll-mt-24 bg-[#f8faf7] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
		<div class="mx-auto max-w-7xl">
			<div class="max-w-3xl">
				<p class="text-sm font-bold tracking-wide text-blue-700 uppercase">Events</p>
				<h2 class="mt-3 text-2xl font-black text-balance text-slate-950 sm:text-4xl">
					A place to post fundraisers, food drives, and community updates.
				</h2>
				<p class="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
					As fundraising events are confirmed, this area can show dates, locations, volunteer needs,
					and donation requests.
				</p>
			</div>
			<div class="mt-8 grid gap-4 md:grid-cols-2">
				{#each site.events as event (event.title)}
					<article class="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
						{#if event.imagePath}
							<img
								class="aspect-[4/3] w-full bg-slate-100 object-cover object-top"
								src={asset(event.imagePath)}
								alt={event.imageAlt}
								loading="lazy"
							/>
						{/if}
						<div class="p-5 sm:p-6">
							<CalendarWeekOutline class="mb-5 size-9 text-blue-700" />
							<p class="text-sm font-bold tracking-wide text-blue-700 uppercase">{event.date}</p>
							<h3 class="mt-2 text-xl font-bold text-slate-950">{event.title}</h3>
							{#if event.time || event.location}
								<p class="mt-3 leading-7 font-semibold text-slate-800">
									{#if event.time}{event.time}{/if}
									{#if event.time && event.location}<br />{/if}
									{#if event.location}{event.location}{/if}
								</p>
							{/if}
							<p class="mt-3 leading-7 text-slate-600">{event.text}</p>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</section>
</main>
