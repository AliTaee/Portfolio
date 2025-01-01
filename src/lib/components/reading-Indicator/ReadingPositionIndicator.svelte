<script>
	import { onMount } from 'svelte'
	import { tweened } from 'svelte/motion'

	let progress = tweened(0, { duration: 200 })

	function updateReadingProgress() {
		const docElement = document.documentElement
		const totalHeight = docElement.scrollHeight - docElement.clientHeight
		$progress = window.scrollY / totalHeight
	}

	onMount(() => {
		window.addEventListener('scroll', updateReadingProgress)
		return () => {
			window.removeEventListener('scroll', updateReadingProgress)
		}
	})
</script>

<progress class="reading-progress" value={$progress} max="1" aria-label="Reading progress">
	{($progress * 100).toFixed(0)}%
</progress>

<style>
	.reading-progress {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 50;
	}

	progress {
		width: 100%;
		height: 4px;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		background-color: transparent;
	}

	progress::-webkit-progress-bar {
		background-color: transparent;
	}

	progress::-webkit-progress-value {
		@apply bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500;
		transition: all 0.2s ease-out;
	}

	progress::-moz-progress-bar {
		@apply bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500;
		transition: all 0.2s ease-out;
	}
</style>
