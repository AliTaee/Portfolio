<script>
	import { me } from '../../resume-source'
	import { routes } from '../../routes/routes'
	import NightTheme from '../night-theme/NightTheme.svelte'

	const { name } = me
</script>

<header class="header flex justify-center mb-6">
	<div class="container mx-auto flex justify-between items-center p-4">
		<nav class="main-nav flex items-center h-full">
			<ul class="list-none flex m-0 p-0">
				{#each routes as route}
					<li key={route.id} class="mr-2 last:mr-0">
						<a class="header__link p-2" href={route.href}>
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

		&__link {

			&--active {
				color: var(--secondary);
			}

			&:hover {
				color: var(--secondary);
			}
		}
	}
</style>
