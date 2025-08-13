import { error } from '@sveltejs/kit';
import type { PageLoad } from '../routes/products/[id]/$types';

export const load: PageLoad = ({ params }) => {
	if (typeof params.id === 'string') {
		return {
			title: `${params.id}`,
			content: `Product id: ${params.id}`
		};
	}

	return error(404, 'Not found');
};
