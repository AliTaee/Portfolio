<script lang="ts">
	import { formatDate } from '$lib/utils'
	import { domain, me } from '$lib/resume-source'
	import ButtonLink from '$lib/components/button-link/ButtonLink.svelte'
	import ReadingPositionIndicator from '$lib/components/reading-Indicator/ReadingPositionIndicator.svelte'
	import Giscus from '@giscus/svelte'

	export let data

	const { name } = me
	const { content, meta, postURL } = data
	const { title, description, image, imageAlt, imageAppreciation, date, categories } = meta

	const GISCUS_REPO_ID = import.meta.env.VITE_GISCUS_REPO_ID
	const GISCUS_CATEGORY_ID = import.meta.env.VITE_GISCUS_CATEGORY_ID
</script>

<svelte:head>
	<title>{title}</title>

	<link rel="canonical" href={`${domain}${postURL}`} />
	<meta name="description" content={description} />

	<meta property="og:type" content="article" />
	<meta property="og:url" content={`${domain}${postURL}`} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:site_name" content={`${name} portfolio`} />
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

<ReadingPositionIndicator />

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
			<span class="mb-2 inline-block">Tags:</span>
			<div class="flex flex-wrap gap-4 mb-6">
				{#each categories as category}
					<ButtonLink href={`/blog/categories/${category}`} label={category} />
				{/each}
			</div>
		{/if}

		<!-- Post -->
		<svelte:component this={content} />

		<Giscus
			id="comments"
			repo="AliTaee/Portfolio"
			repoId={GISCUS_REPO_ID}
			category="Announcements"
			categoryId={GISCUS_CATEGORY_ID}
			mapping="specific"
			term={postURL}
			reactionsEnabled="1"
			emitMetadata="0"
			inputPosition="top"
			theme="dark"
			lang="en"
			loading="lazy"
		/>
	</div>
</article>
