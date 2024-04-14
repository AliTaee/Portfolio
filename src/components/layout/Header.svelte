<script>
	import { me } from '../../resume-source'
	import { routes } from '../../routes/routes'
	import NightTheme from '../night-theme/NightTheme.svelte'

	const { name } = me
</script>

<header class="header flex justify-center">
	<div class="container mx-auto flex justify-between items-center p-4">
		<nav class="main-nav flex items-center h-full">
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
		<div class="flex justify-center">
			<a class="text-2xl text-white" href="/">
				{name}
			</a>
			<NightTheme />
		</div>
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
