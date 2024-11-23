<script>
	import { me, seoTags } from '$lib/resume-source'

	import Emoji from '$lib/components/emoji/Emoji.svelte'
	import Card from '$lib/components/card/Card.svelte'

	const { name, about, title, profileImage } = me
	const {
		home: { title: pageTitle, description: pageDescription }
	} = seoTags
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
</svelte:head>

<div class="intro flex justify-center items-center">
	<div class="flex flex-col items-center w-full lg:flex-row-reverse 2xl:w-8/12 mx-auto">
		<section class="intro__welcome w-full mb-6 md:mb-0">
			<h1 class="intro__title">
				Hello World
				<span class="hand-wave">
					<Emoji emoji="👋" label="Hand waving" />
				</span>
			</h1>
			<p>{about}</p>
		</section>
		<section>
			<Card desc={title} title={name} image={profileImage} />
		</section>
	</div>
</div>

<style lang="css">
	.intro {
		min-height: inherit;
	}
	.intro__welcome {
		padding: var(--padding_mx);
	}
	.intro__title {
		font-weight: 400;
	}

	@media only screen and (max-width: 768px) {
		.intro__welcome {
			padding: 0;
		}
		.intro__title {
			font-size: 24px;
			text-align: center;
		}
	}

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
