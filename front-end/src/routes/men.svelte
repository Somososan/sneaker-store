<script lang="ts">
	import { Sex } from '$lib/product_selector/options';
	import ProductSelector from '$lib/product_selector/product-selector.svelte';
</script>

<h1>Men</h1>
<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem adipisci, eius mollitia rem, ad
	nobis rerum tempore hic voluptas, labore placeat? Error alias libero illo explicabo non officiis
	delectus eum?
</p>

<ProductSelector option={{ sex: Sex.Men }} />
