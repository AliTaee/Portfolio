<script lang="ts">
	import { seoTags, domain, me } from '$lib/resume-source'
	import BlogCard from '$lib/components/blog-card/BlogCard.svelte'
	import Emoji from '$lib/components/emoji/Emoji.svelte'
	export let data

	const {
		blog: { pageTitle, pageDescription }
	} = seoTags
	const { shortAbout: description, title } = me
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />

	<meta property="og:type" content="article" />
	<meta property="og:url" content={`${domain}/blog`} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:site_name" content={title} />
	<meta property="og:image" content="/favicon.png" />

	<meta name="twitter:site" content="@McBride1105" />
	<meta name="twitter:creator" content="@McBride1105" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image:src" content="/favicon.png" />
	<meta name="twitter:widgets:new-embed-design" content="on" />

	<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
	<meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
</svelte:head>

<h1 class="mb-6">Latest Posts <Emoji emoji="✍️" label="writing" /></h1>
<div class="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
	{#each data.posts as post}
		<BlogCard {post} />
	{/each}
</div>
