<script lang="ts">
	import { seoTags } from '$lib/resume-source'
	import Emoji from '$lib/components/emoji/Emoji.svelte'
	import { formatDate } from '$lib/utils'
	const {
		now: { title: pageTitle, description: pageDescription }
	} = seoTags
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
</svelte:head>

<h1 class="mb-6">Now <Emoji emoji="📝" label="writing" /></h1>

<h2>Published at: <time>{formatDate('2024-11-30')}</time></h2>
<br />
<div class="pl-4">
	<p>
		I'm implementing new pages like now(which you are reading at the moment) and a <b>
			blog structure</b
		>. I'm also refactoring CSS classes to use <b>Tailwind</b> and
		<b>daisyUI</b>. I learned a lot about Svelte, SvelteKit in this journey.
	</p>
	<br />
	<p>
		I have a lot of ideas for the blog and this portfolio, but I'm still thinking about the best way
		to implement them. I like to create new pages like About me, Projects, Contact. I'll write about
		my thoughts on the blog, so stay tuned! I believe in taking things one step at a time and
		improving each day, even if it's just 1%—whether that's reading a few pages of a book, spending
		15 minutes on learning, or building something new. Also I lik to create a lot of interactive
		elements using Three.js and Svelte. Let's see what I can do with it in the future.
	</p>
	<br />
	<p>
		I inspired this page by my friends portfolio, take a look at his website at <a
			href="https://www.alimo.dev/now"
			rel="noopener noreferrer"
			class="link"
			target="_blank">Alimo</a
		>.
	</p>
</div>
