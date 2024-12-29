<script lang="ts">
	/**
	 * @type {string}
	 */
	export let title = ''
	/**
	 * @type {string}
	 */
	export let desc = ''
	/**
	 * @type {string}
	 */
	export let image = ''
</script>

<div class="card gradient-bg text-white mb-7 rounded-md p-2.5">
	<img class="w-[280px] h-auto rounded-full" src={image} alt={`image of ${title}`} />
	<h2 class="my-2.5 mx-0 capitalize">{title}</h2>
	<p class="text-lg m-0">{desc}</p>
</div>

<style lang="css">
	.card {
		width: 300px;
		text-align: center;
	}
</style>
