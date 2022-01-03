<script lang="ts">
	import { page } from '$app/stores';
	import { Option, Collection, Sex } from '$lib/product_selector/options';
	import ProductSelector from '$lib/product_selector/product-selector.svelte';

	let collection: Collection = { name: $page.params.collection, sex: Sex.Both };
	let option: Option = { collection };
</script>

<h1>{$page.params.collection}</h1>
<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem adipisci, eius mollitia rem, ad
	nobis rerum tempore hic voluptas, labore placeat? Error alias libero illo explicabo non officiis
	delectus eum?
</p>

<ProductSelector {option} />
