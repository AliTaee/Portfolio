<script lang="ts">
	import { seoTags } from '$lib/resume-source'
	import Emoji from '$lib/components/emoji/Emoji.svelte'
	const {
		blog: { title: pageTitle, description: pageDescription }
	} = seoTags
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
</svelte:head>

<h1 class="mb-6">Blog <Emoji emoji="📝" label="writing" /></h1>
