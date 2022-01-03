/**
 * Can be made globally available by placing this
 * inside `global.d.ts` and removing `export` keyword
 */

import { v4 as uuid } from '@lukeed/uuid';

export interface Locals {
	userid: string;
}

export interface Product {
	uuid: string;
	name: string;
	collection: string;
	sizes_available: Array<number>;
	colors_available: Array<string>;
	current_price: number;
	past_price?: number;
}