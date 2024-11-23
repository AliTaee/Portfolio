<script lang="ts">
	import { formatDate } from '$lib/utils.js'

	export let post
</script>

{#key post.slug}
	<div class="card bg-primary shadow-xl">
		{#if post.image}
			<figure>
				<img src={post.image} alt={post.imageAlt} />
			</figure>
		{/if}
		<div class="card-body">
			<h2 class="gradient-heading" data-toc-ignore>
				{post.title}
			</h2>
			<p class="text-white">{post.description}</p>
			<footer class="flex justify-start items-center py-4 text-white">
				<div class="flex-auto flex justify-between items-center">
					<small>On {formatDate(post.date)}</small>
				</div>
			</footer>
			<div class="card-actions justify-end">
				<a class="btn btn-secondary" href={`/blog/${post.slug}`}> Read More </a>
			</div>
		</div>
	</div>
{/key}
