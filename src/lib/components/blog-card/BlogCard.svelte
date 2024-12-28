<script lang="ts">
	import { formatDate } from '$lib/utils.js'

	export let post
	const { slug, title, description, date, image, imageAlt } = post
</script>

{#key slug}
	<div class="card bg-primary shadow-xl">
		{#if image}
			<figure class="h-60">
				<img src={image} alt={imageAlt} />
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
				<a class="btn btn-secondary" href={`/blog/${slug}`}> Read More </a>
			</div>
		</div>
	</div>
{/key}
