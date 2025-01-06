<script lang="ts">
	import { socials } from '$lib/resume-source'
	import Emoji from '$lib/components/emoji/Emoji.svelte'
	import GitHubLogo from '$lib/assets/icons/github-mark-white.svg'
</script>

<footer class="footer text-white bg-primary mt-6 py-3">
	<div class="container mx-auto flex flex-col-reverse sm:flex-row justify-between items-center">
		<ul class="flex justify-center mt-2 sm:mt-0">
			{#each socials as social}
				<li class="mx-2">
					<a
						class="h-6 w-6"
						href={social.href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={social.label}
					>
						<span class={social.icon}></span>
					</a>
				</li>
			{/each}
		</ul>
		<div class="flex justify-center flex-wrap gap-2">
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
	</div>
</footer>
