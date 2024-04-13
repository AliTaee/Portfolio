<script>
     /**
	 * @type {string}
     */
     export let title = '';
    /**
	 * @type {string}
     */
    export let desc = '';
    /**
	 * @type {string}
     */
     export let image = '';
</script>

<section class="card intro__card card--small">
	<img class="card__img rounded-full" src={image} alt={`image of ${title}`} />
	<h2 class="card__title text-2xl font-bold">{title}</h2>
	<p class="card__desc text-lg">{desc}</p>
</section>

<style lang="scss">
	.card {
		background: var(--gradient);
		border-radius: var(--border_radius);
		padding: var(--padding_sm);
		margin-bottom: var(--margin-lg);
		text-align: center;
		color: var(--white);
		&__img {
			width: 230px;
			height: auto;
		}
		&__title {
			text-transform: capitalize;
			margin: var(--margin_sm) 0;
		}
		&__desc {
			margin: 0;
		}
	}

	.card--small {
		max-width: 250px;
	}
</style>
