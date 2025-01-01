<script lang="ts">
	export let label = ''
	export let href = ''
	export let darkBackground = 'dark:bg-primary'
	export let lightBackground = 'bg-base-100'
	export let darkText = 'dark:text-slate-100'
	export let lightText = 'text-slate-900'
</script>

<a
	class="rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-0.5 duration-300 no-underline"
	{href}
>
	<span
		class={`block rounded-md ${darkBackground} ${lightBackground} px-4 py-2 ${darkText} ${lightText} duration-300`}
		>{label}</span
	>
</a>
