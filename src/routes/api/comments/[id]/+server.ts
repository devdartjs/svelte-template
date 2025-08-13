import comments from '../../api-lib/comments';

export function GET({ params }: { params: { id: string } }) {
	const { id } = params;
	console.log('id: ', id);

	// Utilizando find ao invés de filter
	const comment = comments.find((comment) => comment.id === id);
	console.log('comment:', comment);

	if (!comment) throw new Error('No comments found');

	// Retornar a resposta de forma adequada (JSON)
	return new Response(JSON.stringify(comment), {
		status: 200,
		headers: { 'Content-Type': 'application/json' }
	});
}

export async function PUT({ request, params }: { request: Request; params: { id: string } }) {
	const { id } = params;
	const body = await request.json();
	const { comments: newComment } = body;

	// Encontrar o comentário a ser atualizado
	const index = comments.findIndex((comment) => comment.id === id);

	if (index === -1) {
		throw new Error('Comment not found');
	}

	// Atualizando o comentário
	comments[index].comments = newComment;

	return new Response(JSON.stringify(comments[index]), {
		status: 200,
		headers: { 'Content-Type': 'application/json' }
	});
}

export async function PATCH({ request, params }: { request: Request; params: { id: string } }) {
	const { id } = params;
	const body = await request.json();
	const { comments: updatedComment } = body;

	// Encontrar o comentário a ser atualizado parcialmente
	const comment = comments.find((comment) => comment.id === id);

	if (!comment) {
		throw new Error('Comment not found');
	}

	// Atualizando parcialmente (apenas se o novo valor for fornecido)
	if (updatedComment) {
		comment.comments = updatedComment;
	}

	return new Response(JSON.stringify(comment), {
		status: 200,
		headers: { 'Content-Type': 'application/json' }
	});
}

export async function DELETE({ params }: { params: { id: string } }) {
	const { id } = params;

	// Encontrar o índice do comentário a ser deletado
	const index = comments.findIndex((comment) => comment.id === id);

	if (index === -1) {
		throw new Error('Comment not found');
	}

	// Remover o comentário
	const deletedComment = comments.splice(index, 1);

	return new Response(JSON.stringify(deletedComment), {
		status: 200,
		headers: { 'Content-Type': 'application/json' }
	});
}
