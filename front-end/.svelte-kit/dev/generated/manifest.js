const c = [
	() => import("..\\..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\components\\error.svelte"),
	() => import("..\\..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\collections.svelte"),
	() => import("..\\..\\..\\src\\routes\\checkout.svelte"),
	() => import("..\\..\\..\\src\\routes\\article\\[id].svelte"),
	() => import("..\\..\\..\\src\\routes\\contact.svelte"),
	() => import("..\\..\\..\\src\\routes\\about.svelte"),
	() => import("..\\..\\..\\src\\routes\\todos\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\women.svelte"),
	() => import("..\\..\\..\\src\\routes\\men.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/collections.svelte
	[/^\/collections\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/checkout.svelte
	[/^\/checkout\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/article/[id].svelte
	[/^\/article\/([^/]+?)\/?$/, [c[0], c[5]], [c[1]], (m) => ({ id: d(m[1])})],

	// src/routes/contact.svelte
	[/^\/contact\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/about.svelte
	[/^\/about\/?$/, [c[0], c[7]], [c[1]]],

	,

	// src/routes/todos/index.svelte
	[/^\/todos\/?$/, [c[0], c[8]], [c[1]]],

	,

	// src/routes/women.svelte
	[/^\/women\/?$/, [c[0], c[9]], [c[1]]],

	// src/routes/men.svelte
	[/^\/men\/?$/, [c[0], c[10]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];