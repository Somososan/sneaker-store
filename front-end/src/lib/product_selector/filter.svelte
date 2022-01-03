<script lang="ts">
	import {Account} from "$lib/Account"
import type { Writable } from "svelte/store";

	let collections = ['Summer', 'Spring', 'Winter', 'Autumn', 'Classic'];

	export let collection_overide: string = undefined;
	export let sex_overide: string = undefined;
	export let colors_overide: string = undefined;

	let collections_selected: Array<string> = collection_overide ? [collection_overide] : [];

	let colors = [
		'White',
		'White / Red',
		'White / Blue',
		'White / Green',
		'White / Yellow',
		'White / Orange',
		'Brown',
		'Black'
	];

	let colors_selected: Array<string> = colors_overide ? [collection_overide] : [];

	let shoesize: number = 270;

	// const account:Writable<Account.Account> = Account.account;

</script>

<form>
	{#if !collection_overide}
		<fieldset>
			<legend>Collection</legend>
			{#each collections as item}
				<label>
					<input
						type="checkbox"
						bind:group={collections_selected}
						name="collections"
						value={item}
					/>
					{item}
				</label>
			{/each}
		</fieldset>
	{/if}

	{#if !sex_overide}
		<fieldset>
			<legend>Gender</legend>
			<label>
				<input type="radio" name="gender" value="sex-men">
				Men
			</label>
			<label>
				<input type="radio" name="gender" value="sex-women">
				Women
			</label>
		</fieldset>
	{/if}
	

	
	<fieldset>
		<legend>Shoe size</legend>
		<label for="shoe-size-type"></label>
		<select name="Shoe size" id="shoe-size-type">
			<option value="cm">cm</option>
			<option value="EU">EU</option>
			<option value="UK">UK</option>
			<option value="US">US</option>
			<option value="Mondo">Mondo</option>
		</select>
		<label>
			Length
			<input type="number" name="shoe size length" id="shoe-size-length">
		</label>
		<label>
			Width
			<input type="number" name="shoe size length" id="shoe-size-width">
		</label>
	</fieldset>
	<fieldset>
		<legend>Color</legend>
		{#each colors as item}
			<label>
				<input type="checkbox" bind:group={colors_selected} name="colors" value={item} />
				{item}
			</label>
		{/each}
	</fieldset>
</form>

<style>
	form{
		max-width: 10em;
	}

	fieldset{
		width: 100%;
	}

	label{
		clear: left;
	}
</style>