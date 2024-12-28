<script lang="ts">
	import { formatDate } from '$lib/utils'
	import { url as siteURL, title as siteTitle } from '$lib/blog-config'
	export let data

	const { content, meta } = data
	const { title, url, description, image, imageAlt, imageAppreciation, date, categories } = meta
</script>

<svelte:head>
	<title>{title}</title>

	<link rel="canonical" href={`${siteURL}${url}`} />
	<meta name="description" content={description} />

	<meta property="og:type" content="article" />
	<meta property="og:url" content={`${siteURL}${url}`} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:site_name" content={siteTitle} />
	<meta property="og:image" content={image} />

	<meta name="twitter:site" content="@YouTwitterHandle" />
	<meta name="twitter:creator" content="@YouTwitterHandle" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image:src" content={image} />
	<meta name="twitter:widgets:new-embed-design" content="on" />

	<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
	<meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
</svelte:head>

<article class="mb-16">
	<hgroup class="flex flex-col items-center">
		<img src={image} alt={imageAlt} class="h-96 object-cover w-full rounded-md" />
		<div class="flex flex-col items-start md:flex-row md:items-center justify-between w-full py-4">
			<div class="flex flex-col items-start">
				<h1 class="gradient-heading">
					{title}
				</h1>
				<p class="text-end text-sm">
					Published at <time>{formatDate(date)}</time>
				</p>
			</div>
			<p class="pt-4 md:pt-0">
				{@html imageAppreciation}
			</p>
		</div>
	</hgroup>

	<div class="prose dark:prose-invert mx-auto">
		<!-- Tags -->
		{#if categories}
			<div class="flex flex-wrap gap-4 mb-6">
				{#each categories as category}
					<a
						href={`/blog/categories/${category}`}
						class="chip variant-filled-secondary no-underline">&num;{category}</a
					>
				{/each}
			</div>
		{/if}

		<!-- Post -->
		<svelte:component this={content} />
	</div>
</article>
