<script lang="ts">
	import { Color, Sex, Collection } from './options';
	import type { Option } from './options';

	let collections: Array<Collection> = [
		{ name: 'Summer', sex: Sex.Both },
		{ name: 'Spring', sex: Sex.Both },
		{ name: 'Winter', sex: Sex.Both },
		{ name: 'Autumn', sex: Sex.Both },
		{ name: 'Classic', sex: Sex.Men }
	];

	export let option: Option = undefined;

	let collections_selected: Array<Collection> = option.collection ? [option.collection] : [];

	let colors = [
		{ base: 'White' },
		{ base: 'White', accents: ['Red'] },
		{ base: 'White', accents: ['Blue'] },
		{ base: 'White', accents: ['Green'] },
		{ base: 'White', accents: ['Yellow'] },
		{ base: 'White', accents: ['Orange'] },
		{ base: 'Brown' },
		{ base: 'Brown', accents: ['Red'] },
		{ base: 'Brown', accents: ['Blue'] },
		{ base: 'Brown', accents: ['Green'] },
		{ base: 'Brown', accents: ['Yellow'] },
		{ base: 'Brown', accents: ['Orange'] },
		{ base: 'Black' },
		{ base: 'Black', accents: ['Red'] },
		{ base: 'Black', accents: ['Blue'] },
		{ base: 'Black', accents: ['Green'] },
		{ base: 'Black', accents: ['Yellow'] },
		{ base: 'Black', accents: ['Orange'] }
	];

	let colors_selected: Array<Color> = option.color ? [option.color] : [];

	let shoesize: number = 270;



	
</script>

<form>
	{#if !option.collection}
		<fieldset>
			<legend>Collection</legend>
			{#each collections as item}
				<label>
					<input
						type="checkbox"
						bind:group={collections_selected}
						name="collections"
						value={item.name}
					/>
					{item.name}
				</label>
			{/each}
		</fieldset>
	{/if}

	{#if !option.sex}
		<fieldset>
			<legend>Gender</legend>
			<label>
				<input type="radio" name="gender" value="sex-men" />
				Men
			</label>
			<label>
				<input type="radio" name="gender" value="sex-women" />
				Women
			</label>
		</fieldset>
	{/if}

	<fieldset>
		<legend>Shoe size</legend>
		<label for="shoe-size-type" />
		<select name="Shoe size" id="shoe-size-type">
			<option value="cm">cm</option>
			<option value="EU">EU</option>
			<option value="UK">UK</option>
			<option value="US">US</option>
			<option value="Mondo">Mondo</option>
		</select>
		<label>
			Length
			<input type="number" name="shoe size length" id="shoe-size-length" value="40"/>
		</label>
		<label>
			Width
			<input type="number" name="shoe size length" id="shoe-size-width" value="8"/>
		</label>
	</fieldset>
	<fieldset>
		<legend>Color</legend>
		{#each colors as item}
			<label>
				<input type="checkbox" bind:group={colors_selected} name="colors" value={item.base} />
				{item.base}
				{#if item.accents}
					/ {item.accents}
				{/if}
			</label>
		{/each}
	</fieldset>
</form>

<style>
	form {
		max-width: 10em;
	}

	fieldset {
		width: 100%;
		border: none;
		display: flex;
		flex-direction: column;
	}

	label {
		clear: left;
	}
</style>
