<script>
  import Header from "../components/layout/Header.svelte"
  import Footer from "../components/layout/Footer.svelte"
  import ScrollBackToTop from "../components/scroll-back-to-top/ScrollBackToTop.svelte"

  import '../lib/styles/global.css'
</script>

<Header />

<slot />

<ScrollBackToTop />
<Footer />
