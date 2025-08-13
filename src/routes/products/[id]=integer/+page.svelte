<script lang="ts">
	import { page } from '$app/stores';
	const id = $page.params.id;

	if (!id) throw new Error('Invalid Id');
</script>

<h1>PRODUCT DETAIL</h1>
<div>Details about Product-id: {id}</div>
