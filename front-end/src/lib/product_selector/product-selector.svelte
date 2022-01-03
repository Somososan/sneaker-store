<script lang="ts">
	import type { Product } from '$lib/types';

	import Filter from './filter.svelte';
	import type { Option } from './options';
	import ProductCard from './product-card.svelte';

	export let option: Option = undefined;

	let products: Array<Product> = new Array();
</script>

<div>
	<Filter {option} />
	<div />
	<div class="products">
		{#each products as product}
			<ProductCard {product} />
		{/each}
	</div>
</div>
