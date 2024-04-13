<script>
	import { me } from '../resume-source.ts'

	import Emoji from '../components/emoji/Emoji.svelte'
	import Card from '../components/card/Card.svelte'

	const { name, about, title, profileImage } = me
</script>

<svelte:head>
	<title>{name} Portfolio</title>
</svelte:head>

<main
	class="main intro container flex flex-col justify-center items-center md:flex-row-reverse md:justify-between"
>
	<section class="intro__welcome mb-6 md:mb-0">
		<h1 class="intro__title text-2xl font-bold">
			Hello World, I'm{' '}
			<span class="capitalize">{name}</span>
			<span class="hand-wave">
				<Emoji emoji="👋" label="Hand waving" />
			</span>
		</h1>
		<p>{about}</p>
	</section>
	<Card desc={title} title={name} image={profileImage} />
</main>

<style lang="scss">
	.intro {
		&__welcome {
			width: 69%;
			padding: var(--padding_mx);
		}
		&__title {
			font-weight: 400;
		}
		&__card {
			width: 30%;
		}
	}

	@media only screen and (max-width: 768px) {
		.intro {
			&__welcome {
				width: 90%;
				padding: 0;
			}

			&__title {
				font-size: 24px;
				text-align: center;
			}

			&__card {
				width: 100%;
			}
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
