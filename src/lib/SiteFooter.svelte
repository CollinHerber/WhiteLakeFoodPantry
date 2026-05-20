<script lang="ts">
	import { resolve } from '$app/paths';
	import { site } from '$lib/site';
</script>

<footer class="border-t border-slate-200 bg-white px-4 py-8 sm:px-6 lg:px-8">
	<div
		class="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between"
	>
		<p class="font-semibold text-slate-800">{site.name}</p>
		<div class="flex flex-wrap gap-x-5 gap-y-2">
			<a class="font-semibold text-green-700 hover:text-green-800" href={resolve('/contact/')}
				>Contact</a
			>
			<a class="font-semibold text-green-700 hover:text-green-800" href={resolve('/#donate')}
				>Donate</a
			>
			<a class="font-semibold text-green-700 hover:text-green-800" href={resolve('/#volunteer')}
				>Volunteer</a
			>
		</div>
	</div>
</footer>
