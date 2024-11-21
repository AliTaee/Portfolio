<script>
	/**
	 * @type {string}
	 */
	export let title = ''
</script>

<span class="chip">{title}</span>

<style lang="css">
	.chip {
		background-color: var(--heading-color);
		color: var(--badge-color);
		border-radius: var(--border_radius);
		margin: 0 6px 6px 0;
		text-transform: capitalize;
		padding: 6px 8px;
	}
</style>
