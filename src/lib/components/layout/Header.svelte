<script lang="ts">
	import { page } from '$app/stores'
	import { afterUpdate, onMount } from 'svelte'

	import { me } from '$lib/resume-source'
	import { routes } from '$lib/routes'
	import NightTheme from '$lib/components/toggle-theme/Toggle-theme.svelte'

	let current_url = $page.url.pathname.split('/').filter(Boolean).shift() || '/'
	let dropdownOpen = false

	afterUpdate(() => {
		current_url = $page.url.pathname.split('/').filter(Boolean).shift() || '/'
	})
	const { name } = me

	function handleClickOutsideDropdown(event: MouseEvent) {
		const dropdown = document.querySelector('header')
		if (dropdown && !dropdown.contains(event.target as Node)) {
			dropdownOpen = false
		}
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutsideDropdown)
		return () => document.removeEventListener('click', handleClickOutsideDropdown)
	})
</script>

<header class="bg-primary flex justify-center mb-6">
	<div class="container mx-auto flex justify-between items-center p-4">
		<nav class="main-nav flex flex-col justify-start md:flex-row md:items-center h-full">
			<div class="dropdown md:hidden">
				<button
					tabindex="0"
					aria-label="Open site menu"
					class="btn btn-ghost btn-circle"
					on:click={() => (dropdownOpen = !dropdownOpen)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="#fefefe"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h7"
						/>
					</svg>
				</button>
			</div>
			<ul class="list-none flex-col flex m-0 p-0 md:flex md:flex-row" class:hidden={!dropdownOpen}>
				{#each routes as route}
					<li class="mb-4 last:mb-0 md:mr-2 md:last:mr-0">
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
			<a class="text-base md:text-2xl text-white pt-3 md:pt-1" href="/">
				{name}
			</a>
			<NightTheme />
		</div>
	</div>
</header>

<style lang="css">
	.header__link {
		position: relative;
	}
	.header__link::before {
		position: absolute;
		content: '';
		display: inline-block;
		bottom: -20px;
		left: 35%;
		transform: rotate(90deg);
		font-size: 1.4em;
		opacity: 0;
		transition: opacity 0.5s ease-in-out;
	}
	.header__link--active::before {
		content: ':}';
		opacity: 1;
	}
	.header__link:hover::before {
		content: ':}';
		opacity: 1;
	}
</style>
