import comments from '../api-lib/comments';

export function GET() {
	const data = JSON.stringify(comments);
	return new Response(data);
}

export function POST({ body }: { body: { id: string; comment: string } }) {
	const { id, comment } = body;
	console.log('id: ', id, 'comment:', comment);

	const existingComment = comments.find((comment) => comment.id === id);
	console.log('existingComment:', existingComment);

	if (existingComment) return alert('Comment already exists');

	const newComment = {
		id,
		comments: comment
	};

	console.log(newComment);

	const newComments = comments.push(newComment);

	return new Response(JSON.stringify(newComments), {
		status: 200,
		headers: { 'Content-Type': 'application/json' }
	});
}
