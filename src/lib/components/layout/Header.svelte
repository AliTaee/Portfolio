<script lang="ts">
	import { page } from '$app/stores'
	import { afterUpdate } from 'svelte'

	import { me } from '$lib/resume-source'
	import { routes } from '$lib/routes'
	import NightTheme from '$lib/components/toggle-theme/Toggle-theme.svelte'

	let current_url = $page.url.pathname.split('/').filter(Boolean).shift() || '/'

	afterUpdate(() => {
		current_url = $page.url.pathname.split('/').filter(Boolean).shift() || '/'
	})
	const { name } = me
</script>

<header class="header flex justify-center mb-6">
	<div class="container mx-auto flex justify-between items-center p-4">
		<nav class="main-nav flex items-center h-full">
			<ul class="list-none flex m-0 p-0">
				{#each routes as route}
					<li class="mr-2 last:mr-0">
						<a
							class="header__link text-white p-2 {route.href === current_url
								? 'header__link--active'
								: ''}"
							href={route.href === '/' ? '/' : `/${route.href}`}
						>
							{route.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
		<div class="flex justify-center gap-4">
			<a class="text-2xl text-white pt-1" href="/">
				{name}
			</a>
			<NightTheme />
		</div>
	</div>
</header>

<style lang="css">
	.header {
		background: var(--primary);
	}
	.header__link {
		position: relative;
	}
	.header__link::before {
		position: absolute;
		content: '';
		display: inline-block;
		width: 0;
		height: 2px;
		bottom: 0;
		left: 0;
		background: white;
		transition: width 0.3s;
	}
	.header__link--active::before {
		width: 100%;
	}
	.header__link:hover::before {
		width: 100%;
	}
</style>
