<script>
	import { me } from '../../resume-source'
	import Emoji from '../emoji/Emoji.svelte'

	import GitHubLogo from '../../lib/assets/icons/github-mark-white.svg'

	const { name } = me
</script>

<footer class="footer mt-6 py-3">
	<div class="container mx-auto flex justify-center flex-wrap">
		Made by <Emoji emoji="❤️" label="love" /> and
		<a
			class="footer__links flex justify-center"
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
			class="footer__links flex justify-center"
			target="_blank"
			rel="noopener noreferrer"
		>
			Open Source
			<img src={GitHubLogo} alt="GitHub logo" width="20" height="20" class="ml-2 h-5" />
		</a>
	</div>
</footer>

<style lang="css">
	.footer {
		background: var(--primary);
		color: var(--white);
	}
	.footer__links {
		color: var(--secondary);
		font-weight: 500;
	}
</style>
