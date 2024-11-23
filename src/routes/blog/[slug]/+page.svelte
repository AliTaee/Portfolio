<script lang="ts">
	import { formatDate } from '$lib/utils'
	import { url, title } from '$lib/blog-config'
	export let data
</script>

<svelte:head>
	<title>{data.meta.title}</title>

	<link rel="canonical" href={`${url}${data.meta.url}`} />
	<meta name="description" content={data.meta.description} />

	<meta property="og:type" content="article" />
	<meta property="og:url" content={`${url}${data.meta.url}`} />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:site_name" content={title} />
	<meta property="og:image" content={data.meta.image} />

	<meta name="twitter:site" content="@YouTwitterHandle" />
	<meta name="twitter:creator" content="@YouTwitterHandle" />
	<meta name="twitter:title" content={data.meta.title} />
	<meta name="twitter:description" content={data.meta.description} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image:src" content={data.meta.image} />
	<meta name="twitter:widgets:new-embed-design" content="on" />

	<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
	<meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
</svelte:head>

<article class="mb-16">
	<hgroup class="flex flex-col items-center">
		<img
			src={data.meta.image}
			alt={data.meta.imageAlt}
			class="h-96 object-cover w-full rounded-md"
		/>
		<div class="flex flex-col items-start md:flex-row md:items-center justify-between w-full py-4">
			<div class="flex flex-col items-start">
				<h1 class="gradient-heading">
					{data.meta.title}
				</h1>
				<p class="text-end text-sm">
					Published at <time>{formatDate(data.meta.date)}</time>
				</p>
			</div>
			<p class="pt-4 md:pt-0">
				{@html data.meta.imageAppreciation}
			</p>
		</div>
	</hgroup>

	<div class="prose dark:prose-invert mx-auto">
		<!-- Tags -->
		{#if data.meta.categories}
			<div class="flex flex-wrap gap-4 mb-6">
				{#each data.meta.categories as category}
					<a
						href={`/blog/categories/${category}`}
						class="chip variant-filled-secondary no-underline">&num;{category}</a
					>
				{/each}
			</div>
		{/if}

		<!-- Post -->
		<svelte:component this={data.content} />
	</div>
</article>
