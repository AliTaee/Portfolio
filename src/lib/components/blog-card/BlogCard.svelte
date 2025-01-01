<script lang="ts">
	import { formatDate } from '$lib/utils.js'
	import ButtonLink from '$lib/components/button-link/ButtonLink.svelte'

	export let post

	const { path, meta } = post
	const { title, description, date, image, imageAlt } = meta
</script>

{#key path}
	<div class="card bg-primary drop-shadow-md">
		{#if image}
			<figure class="h-60">
				<img class="hover:scale-125 transition ease-in duration-300" src={image} alt={imageAlt} />
			</figure>
		{/if}
		<div class="card-body">
			<h2 class="gradient-heading" data-toc-ignore>
				{title}
			</h2>
			<p class="text-white">{description}</p>
			<footer class="flex justify-start items-center py-4 text-white">
				<div class="flex-auto flex justify-between items-center">
					<small>On {formatDate(date)}</small>
				</div>
			</footer>
			<div class="card-actions justify-end">
				<ButtonLink
					href={`/blog/${path}`}
					label="Read More"
					darkBackground="dark:bg-primary"
					lightBackground="bg-primary"
					lightText="text-slate-100"
				/>
			</div>
		</div>
	</div>
{/key}
