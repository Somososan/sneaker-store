<script lang="ts">
	import type { Product } from '$lib/types';

	export let product: Product;

	let discount = product.past_price - (product.current_price / product.past_price) * 100;
</script>

<div>
	<img src={'./img/products/' + product.uuid + '/full/0.jpg'} alt="product" />
	<h2>{product.name}</h2>
	<div class="price">
		<p>{product.current_price}</p>
		<b>{discount}</b>
		<s>{product.past_price}</s>
	</div>
    <a href={"/product/"+product.uuid}>View</a>
</div>
