<script lang="ts">
	import { page } from '$app/stores';
	const { reviewId, id } = $page.params;

	if (!reviewId) throw new Error('Invalid reviewId');
</script>

<h1>REVIEW/PRODUCTS DETAIL</h1>
<div>Details about REVIEW-id: {reviewId} od product-id: {id}</div>
