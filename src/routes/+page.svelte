<script>
	import { me, seoTags } from '$lib/resume-source'

	import Emoji from '$lib/components/emoji/Emoji.svelte'
	import Card from '$lib/components/card/Card.svelte'

	const { name, about, title, profileImage } = me
	const {
		home: { pageTitle, pageDescription }
	} = seoTags
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
	<meta name="twitter:image:src" content="/favicon.png" />
	<meta property="og:image" content="/favicon.png" />
</svelte:head>

<div class="min-h-[inherit] flex justify-center items-center">
	<div class="flex flex-col items-center w-full lg:flex-row-reverse 2xl:w-8/12 mx-auto">
		<section class="p-0 md:p-8 w-full mb-6 md:mb-0">
			<h1 class="font-normal max-md:text-2xl">
				Hello World
				<span class="hand-wave">
					<Emoji emoji="👋" label="Hand waving" />
				</span>
			</h1>
			<p class="text-wrap mt-4">{@html about}</p>
		</section>
		<section>
			<Card desc={title} title={name} image={profileImage} />
		</section>
	</div>
</div>

<style lang="css">
	.hand-wave {
		animation-name: wave-animation;
		animation-duration: 2.5s;
		animation-iteration-count: infinite;
		transform-origin: 70% 70%;
		display: inline-block;
	}

	@keyframes wave-animation {
		0% {
			transform: rotate(0deg);
		}
		10% {
			transform: rotate(14deg);
		}
		20% {
			transform: rotate(-8deg);
		}
		30% {
			transform: rotate(14deg);
		}
		40% {
			transform: rotate(-4deg);
		}
		50% {
			transform: rotate(10deg);
		}
		60% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>
