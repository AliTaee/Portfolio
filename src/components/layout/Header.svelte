<script>
	import { me } from '../../resume-source'
	import { routes } from '../../routes/routes'
	import NightTheme from '../night-theme/NightTheme.svelte'

	const { name } = me
</script>

<header class="header py-4">
	<div class="container mx-auto  flex flex-row-reverse justify-between items-center">
		<div class="flex justify-center">
			<span class="header__title">
				<a class="header__link" href="/">
					{name}
				</a>
			</span>
			<NightTheme />
		</div>
		<nav class="main-nav">
			<ul>
				{#each routes as route}
					<li key={route.id} class="main-nav__item">
						<a class="header__link" href={route.href}>
							{route.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<style lang="scss">
	.header {
		background: var(--primary);
		margin-bottom: var(--margin-lg);

		&__link {
			color: var(--white);
			text-decoration: none;
			padding: var(--padding_xs);

			&--active {
				color: var(--secondary);
			}

			&:hover {
				color: var(--secondary);
			}
		}
		&__title {
			font-size: 1.4em;
			line-height: 1.2;
			margin: 0;
		}

		.main-nav {
			ul {
				list-style: none;
				display: flex;
				margin: 0;
				padding: 0;
			}
			&__item {
				text-transform: capitalize;
				margin: 0 var(--margin_sm) 0 0;
			}
		}
	}
</style>
