import { env } from '$env/dynamic/public';

const siteUrl = (
	env.PUBLIC_SITE_URL || 'https://your-github-user.github.io/WhiteLakePantry'
).replace(/\/$/, '');

export const site = {
	name: 'White Lake Food Pantry',
	shortName: 'White Lake Food Pantry',
	tagline: 'Neighbors helping neighbors with dependable access to food.',
	description:
		'A simple community food pantry website for White Lake residents to find help, donate food or funds, volunteer, and learn where the pantry is located.',
	url: siteUrl,
	email: 'hello@whitelakepantry.org',
	phone: '(000) 000-0000',
	location: {
		name: 'White Lake Food Pantry',
		address: 'White Lake, Wisconsin',
		locality: 'White Lake',
		region: 'WI',
		postalCode: '54491'
	},
	hours: [
		{ label: 'Distribution hours', value: 'Please contact the pantry for current hours' },
		{ label: 'Donation drop-off', value: 'By appointment or during open pantry hours' }
	],
	donationNeeds: [
		'Shelf-stable meals and canned proteins',
		'Breakfast items, pasta, rice, and pantry staples',
		'Personal care items and household basics',
		'Monetary gifts for fresh food and urgent needs'
	],
	volunteerNeeds: [
		'Sort and stock donated food',
		'Pack grocery boxes for pantry guests',
		'Help with pickup, delivery, and pantry events'
	]
};
