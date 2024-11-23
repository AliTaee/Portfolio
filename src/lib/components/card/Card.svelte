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

<div class="card">
	<img class="card__img rounded-full" src={image} alt={`image of ${title}`} />
	<h2 class="card__title">{title}</h2>
	<p class="card__desc text-lg">{desc}</p>
</div>

<style lang="css">
	.card {
		width: 300px;
		background: var(--gradient);
		border-radius: var(--border_radius);
		padding: var(--padding_sm);
		margin-bottom: var(--margin-lg);
		text-align: center;
		color: var(--white);
	}
	.card__img {
		width: 280px;
		height: auto;
	}
	.card__title {
		text-transform: capitalize;
		margin: var(--margin_sm) 0;
	}
	.card__desc {
		margin: 0;
	}
</style>
