<script>
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
	class="scroll-back-top"
	on:click={handleGoToTop}
	id={SCROLL_BACK_TO_TOP_ID}
	title="Go to top"
	type="button"
>
	<img src={ArrowUpIcon} alt="back to top icon" />
</button>

<style lang="css">
	.scroll-back-top {
		background: var(--primary);
		display: none;
		font-size: 18px;
		position: fixed;
		bottom: 60px;
		right: 30px;
		z-index: 999;
		cursor: pointer;
		padding: 15px;
		outline: none;
		border: none;
		border-radius: 100%;
		width: 50px;
		height: 50px;
		align-items: center;
		justify-content: center;
	}

	.scroll-back-top img {
		margin: 0;
		width: 20px;
		height: 20px;
	}
</style>
