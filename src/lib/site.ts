import { env } from '$env/dynamic/public';

const siteUrl = (
	env.PUBLIC_SITE_URL || 'https://your-github-user.github.io/WhiteLakePantry'
).replace(/\/$/, '');

export const site = {
	name: 'White Lake Area Christian Food Pantry',
	shortName: 'White Lake Pantry',
	tagline: 'Neighbors helping neighbors with dependable access to food, supplies, and care.',
	description:
		'Community pantry information for White Lake area neighbors to find help, donate food, healthcare items or funds, volunteer, and learn about pantry events.',
	url: siteUrl,
	email: 'hello@whitelakepantry.org',
	phone: '(715) 882-2781',
	facebookUrl: 'https://www.facebook.com/profile.php?id=61571713836420',
	logoPath: '/images/white-lake-pantry-logo.svg',
	location: {
		name: 'White Lake Area Christian Food Pantry',
		address: '638 Bissell St',
		locality: 'White Lake',
		region: 'WI',
		postalCode: '54491'
	},
	hours: [
		{ label: 'Pantry hours', value: '1st and 2nd Tuesday, 9:00 AM to 11:00 AM' },
		{ label: 'Donation drop-off', value: 'Call ahead or bring items during open pantry hours' },
		{ label: 'Volunteer coordination', value: 'Contact the pantry to confirm current needs' }
	],
	mission:
		'White Lake Area Christian Food Pantry helps local households access dependable food and practical support with dignity, care, and community partnership.',
	donationNeeds: [
		'Canned proteins, soups, vegetables, and fruit',
		'Peanut butter, cereal, pasta, rice, and boxed meals',
		'Personal care items, paper goods, and household basics',
		'Baby care items and family essentials',
		'Fresh or seasonal items by prior arrangement'
	],
	donationMethods: [
		{
			title: 'Monetary donations',
			text: 'Financial gifts help purchase fresh food, staple items, and urgent pantry needs. Please contact the pantry for current mailing or drop-off instructions.'
		},
		{
			title: 'Healthcare donations',
			text: 'Unopened personal care and basic health supplies can help families stretch household budgets. Call before donating medical or specialty items.'
		},
		{
			title: 'Food donations',
			text: 'Shelf-stable food, pantry staples, and seasonal food-drive items are welcome when packaging is unopened and dates are current.'
		}
	],
	volunteerNeeds: [
		'Sort and stock donated food',
		'Pack grocery boxes for pantry guests',
		'Help with pickup, delivery, and pantry events',
		'Support fundraising events and food drives'
	],
	events: [
		{
			title: 'Food for the Makers & Farmers Market',
			date: 'May 28, 2026',
			time: '4:00 - 6:00 PM',
			location: 'Makers & Farmers Market',
			imagePath: '/images/food-for-makers-farmers-market.svg',
			imageAlt:
				'Food for the Makers and Farmers Market flyer supporting White Lake Area Christian Food Pantry',
			text: 'Come hungry and support local. Beef tacos and shrimp tacos will be made to order, with proceeds going to the White Lake Area Christian Food Pantry.'
		},
		{
			title: 'Donation drives',
			date: 'Seasonal needs',
			time: '',
			location: '',
			imagePath: '',
			imageAlt: '',
			text: 'Use this area to highlight high-priority items, partner drives, and event-specific volunteer needs.'
		}
	]
};
