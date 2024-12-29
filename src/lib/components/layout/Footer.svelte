<script lang="ts">
	import Emoji from '$lib/components/emoji/Emoji.svelte'

	import GitHubLogo from '$lib/assets/icons/github-mark-white.svg'
</script>

<footer class="footer text-white bg-primary mt-6 py-3">
	<div class="container mx-auto flex justify-center flex-wrap">
		Made with <Emoji emoji="❤️" label="love" /> and
		<a
			class="text-secondary font-medium flex justify-center"
			href="https://kit.svelte.dev/"
			target="_blank"
			rel="noopener noreferrer"
		>
			SvelteKit
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
				alt="SvelteKit logo"
				width="20"
				height="20"
				class="ml-2 h-5"
			/>
		</a>
		<a
			href="https://github.com/AliTaee/Portfolio"
			class="text-secondary font-medium flex justify-center"
			target="_blank"
			rel="noopener noreferrer"
		>
			Open Source
			<img src={GitHubLogo} alt="GitHub logo" width="20" height="20" class="ml-2 h-5" />
		</a>
	</div>
</footer>
