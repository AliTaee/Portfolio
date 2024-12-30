<script lang="ts">
	import { onMount } from 'svelte'

	import ArrowUpIcon from '$lib/assets/icons/arrow-up.svg'

	const SCROLL_BACK_TO_TOP_ID = 'scrollBackToTop'

	onMount(() => {
		const ScrollBackToTop = () => {
			document.onscroll = function () {
				scrollFunction()
			}
		}
		document.addEventListener('scroll', ScrollBackToTop)
	})

	function scrollFunction() {
		const toTopButton = document.getElementById(SCROLL_BACK_TO_TOP_ID)

		if (!toTopButton) return

		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			toTopButton.style.display = 'flex'
		} else {
			toTopButton.style.display = 'none'
		}
	}

	function handleGoToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}
</script>

<button
	class="hidden text-lg fixed bottom-[60px] right-[30px] z-[999] cursor-pointer p-[15px] outline-none border-none rounded-full w-[50px] h-[50px] items-center justify-center bg-primary"
	on:click={handleGoToTop}
	id={SCROLL_BACK_TO_TOP_ID}
	title="Go to top"
	type="button"
>
	<img src={ArrowUpIcon} class="m-0 w-5 h-5" alt="back to top icon" />
</button>
