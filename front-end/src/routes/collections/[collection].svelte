<script lang="ts">
	import { page } from '$app/stores';
	import ProductSelector from '$lib/product_selector/product-selector.svelte';
</script>

<h1>{$page.params.collection}</h1>
<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem adipisci, eius mollitia rem, ad
	nobis rerum tempore hic voluptas, labore placeat? Error alias libero illo explicabo non officiis
	delectus eum?
</p>

<ProductSelector collection_overide={$page.params.collection} />
