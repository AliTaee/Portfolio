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

<div class="card rounded-md p-2.5">
	<img class="w-[280px] h-auto rounded-full" src={image} alt={`image of ${title}`} />
	<h2 class="card__title capitalize">{title}</h2>
	<p class="text-lg m-0">{desc}</p>
</div>

<style lang="css">
	.card {
		width: 300px;
		background: var(--gradient);
		margin-bottom: var(--margin-lg);
		text-align: center;
		color: var(--white);
	}
	.card__title {
		margin: var(--margin_sm) 0;
	}
</style>
