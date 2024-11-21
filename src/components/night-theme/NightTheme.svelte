<script>
	import { onMount } from 'svelte'

	const LOCAL_STORAGE_KEY = 'theme'
	let nightTheme = true

	onMount(() => {
		let currentTheme = localStorage.getItem(LOCAL_STORAGE_KEY)

		if (currentTheme) {
			document.documentElement.setAttribute('data-theme', currentTheme)
			nightTheme = currentTheme === 'dark' ? true : false
		} else {
			localStorage.setItem(LOCAL_STORAGE_KEY, 'dark')
			document.documentElement.setAttribute('data-theme', 'dark')
			nightTheme = true
		}
	})

	function switchTheme(e) {
		if (e.target.checked) {
			document.documentElement.setAttribute('data-theme', 'dark')
			nightTheme = true
		} else {
			document.documentElement.setAttribute('data-theme', 'light')
			nightTheme = false
		}

		localStorage.setItem(LOCAL_STORAGE_KEY, e.target.checked ? 'dark' : 'light')
	}
</script>

<label class="theme-switch" for="night-theme">
	<input checked={nightTheme} type="checkbox" id="night-theme" on:change={switchTheme} />
	<div class="slider round"></div>
</label>

<style lang="css">
	.theme-switch {
		margin-left: 10px;
		display: inline-block;
		height: 34px;
		position: relative;
		width: 60px;
	}

	.theme-switch input {
		display: none;
		-webkit-tap-highlight-color: transparent;
	}

	.slider {
		background-color: var(--grey);
		bottom: 0;
		cursor: pointer;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
		transition: 0.4s;
	}

	.slider:before {
		background-color: var(--white);
		bottom: 4px;
		content: '';
		height: 26px;
		left: 4px;
		position: absolute;
		transition: 0.4s;
		width: 26px;
	}

	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}

	input:checked + .slider {
		background-color: var(--primary_dark);
	}

	input:checked + .slider:before {
		transform: translateX(26px);
	}

	[data-theme='dark'] .card {
		box-shadow: none;
	}
</style>
