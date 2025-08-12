<script lang="ts">
	import { page } from '$app/stores';
	console.log($page.params.slug);

	if (!$page.params.slug) throw new Error('No slug data');

	const slugArr = $page.params.slug.split('/');
	console.log(slugArr);
</script>

<h1>Docs SLUG</h1>
{#if slugArr.length === 1}
	<h1>Feature id: <span class="text-red-700">{slugArr[0]}</span></h1>
{:else if slugArr.length === 2}
	<h1>
		Feature id: <span class="text-red-700">{slugArr[0]}</span> and concept id:
		<span class="text-blue-700">{slugArr[1]}</span>
	</h1>
{:else if slugArr.length === 3}
	<h1>
		Feature id: <span class="text-red-700">{slugArr[0]}</span>
		and concept id: <span class="text-blue-700">{slugArr[1]}</span>
		in example id: <span class="text-indigo-700">{slugArr[2]}</span>
	</h1>
{/if}
