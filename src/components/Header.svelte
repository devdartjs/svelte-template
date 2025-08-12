<!-- src/components/Header.svelte -->
<script lang="ts">
	export let title: string = 'Meu App';
	export let showMenu: boolean = true;
</script>

<header class="header">
	<div class="container">
		<h1 class="title">{title}</h1>

		{#if showMenu}
			<nav class="nav">
				<slot name="menu">
					<!-- Menu padrão -->
					<a href="/">Home</a>
					<a href="/about">Sobre</a>
					<a href="/contact">Contato</a>
				</slot>
			</nav>
		{/if}
	</div>
</header>

<style>
	.header {
		background-color: #333;
		color: white;
		padding: 1rem;
	}
	.container {
		max-width: 1024px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.title {
		font-size: 1.5rem;
	}
	.nav a {
		color: white;
		margin-left: 1rem;
		text-decoration: none;
		font-weight: 500;
	}
	.nav a:hover {
		text-decoration: underline;
	}

	/* Responsivo simples */
	@media (max-width: 600px) {
		.container {
			flex-direction: column;
			align-items: flex-start;
		}
		.nav a {
			margin-left: 0;
			margin-right: 1rem;
		}
	}
</style>
