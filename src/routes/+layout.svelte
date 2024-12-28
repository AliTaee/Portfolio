<script>
	import Header from '$lib/components/layout/Header.svelte'
	import Footer from '$lib/components/layout/Footer.svelte'
	import ScrollBackToTop from '$lib/components/scroll-back-to-top/ScrollBackToTop.svelte'
	import '$lib/styles/global.css'
</script>

<Header />

<main class="container mx-auto full-height px-4">
	<slot />
</main>

<ScrollBackToTop />
<Footer />
