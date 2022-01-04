<script lang="ts">
	import { page } from '$app/stores';
	import logo from './logo.svg';
</script>

<header>
	<nav>
		<ul>
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/"><img src={logo} alt="home"></a></li>
			<li class:active={$page.path === '/collections'}><a sveltekit:prefetch href="/collections">Collections</a></li>
			<li class:active={$page.path === '/men'}><a sveltekit:prefetch href="/men">Men</a></li>
			<li class:active={$page.path === '/women'}><a sveltekit:prefetch href="/women">Women</a></li>
		</ul>
	</nav>

</header>

<style>
	header {
		display: flex;
		justify-content: center;
		width: 100%;
	}

	
	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
