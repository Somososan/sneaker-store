<script lang="ts">
import type { Product } from '$lib/types';

	import Filter from './filter.svelte';
import ProductCard from './product-card.svelte';

	export let collection_overide: string = undefined;

	export let sex_overide: string = undefined;

	let products:Array<Product> = new Array;
</script>

<div>
	<Filter {collection_overide} {sex_overide}/>
	<div></div>
	<div class="products">
		{#each products as product}
			<ProductCard {product} />
		{/each}
	</div>
</div>
