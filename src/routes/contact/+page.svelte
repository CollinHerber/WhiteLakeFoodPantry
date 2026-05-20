<script lang="ts">
	import { asset } from '$app/paths';
	import { site } from '$lib/site';
	import { Button } from 'flowbite-svelte';
	import {
		CalendarWeekOutline,
		EnvelopeOutline,
		FacebookSolid,
		MapPinAltOutline,
		PhoneOutline
	} from 'flowbite-svelte-icons';

	const contactCards = [
		{
			title: 'Phone',
			value: site.phone,
			href: `tel:${site.phone.replaceAll(/[^\d+]/g, '')}`,
			icon: PhoneOutline
		},
		{
			title: 'Email',
			value: site.email,
			href: `mailto:${site.email}`,
			icon: EnvelopeOutline
		},
		{
			title: 'Facebook',
			value: 'Visit the pantry Facebook page',
			href: site.facebookUrl,
			icon: FacebookSolid
		}
	];
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->

<svelte:head>
	<title>Contact {site.shortName} | Hours, Phone, Email, and Location</title>
	<meta
		name="description"
		content={`Contact ${site.name} for hours, donation drop-off, volunteer questions, and pantry location details.`}
	/>
	<link rel="canonical" href={`${site.url}/contact/`} />
</svelte:head>

<main>
	<section class="bg-[#f8faf7] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
		<div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
			<div>
				<img
					class="mb-6 h-16 w-auto rounded-lg border border-slate-200 bg-white p-2 sm:h-20"
					src={asset(site.logoPath)}
					alt={site.name}
				/>
				<p class="text-sm font-bold tracking-wide text-green-700 uppercase">Contact us</p>
				<h1 class="mt-3 text-3xl font-black text-balance text-slate-950 sm:text-5xl">
					Phone, email, hours, location, and Facebook.
				</h1>
				<p class="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
					Reach out before visiting if you have questions about pantry hours, donation drop-off,
					volunteer opportunities, or current community needs.
				</p>
			</div>

			<div class="grid gap-4">
				<div class="grid gap-4 md:grid-cols-3">
					{#each contactCards as card (card.title)}
						{@const Icon = card.icon}
						<a
							class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:border-green-300 hover:shadow-md"
							href={card.href}
							target={card.title === 'Facebook' ? '_blank' : undefined}
							rel={card.title === 'Facebook' ? 'noreferrer' : undefined}
						>
							<Icon class="mb-4 size-8 text-green-700" />
							<h2 class="text-lg font-bold text-slate-950">{card.title}</h2>
							<p class="mt-2 leading-7 font-semibold break-words text-green-700">{card.value}</p>
						</a>
					{/each}
				</div>

				<div class="grid gap-4 md:grid-cols-2">
					<section class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
						<MapPinAltOutline class="mb-5 size-9 text-blue-700" />
						<h2 class="text-xl font-bold text-slate-950">Visit in person</h2>
						<p class="mt-3 leading-7 text-slate-600">
							{site.location.name}<br />
							{site.location.address}<br />
							{site.location.locality}, {site.location.region}
							{site.location.postalCode}
						</p>
						<Button
							tag="a"
							href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.location.address}, ${site.location.locality}, ${site.location.region} ${site.location.postalCode}`)}`}
							target="_blank"
							rel="noreferrer"
							color="alternative"
							class="mt-5 rounded-lg"
						>
							Get directions
						</Button>
					</section>

					<section class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
						<CalendarWeekOutline class="mb-5 size-9 text-blue-700" />
						<h2 class="text-xl font-bold text-slate-950">Hours of operation</h2>
						<div class="mt-3 grid gap-3">
							{#each site.hours as item (item.label)}
								<p class="leading-7">
									<span class="block font-semibold text-slate-950">{item.label}</span>
									<span class="text-slate-600">{item.value}</span>
								</p>
							{/each}
						</div>
					</section>
				</div>

				<section class="rounded-lg border border-green-200 bg-green-50 p-5 sm:p-6">
					<h2 class="text-xl font-bold text-slate-950">Questions for the pantry</h2>
					<p class="mt-3 leading-7 text-slate-700">
						Use email or phone for donation questions, volunteer scheduling, current food needs, or
						event details. Facebook can be used for community updates once the final page URL is
						confirmed.
					</p>
				</section>
			</div>
		</div>
	</section>
</main>
