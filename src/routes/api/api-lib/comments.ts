import { v4 as uuidv4 } from 'uuid';

type Comments = {
	id: string;
	comments: string;
};

const comments: Comments[] = [
	{
		id: uuidv4(),
		comments: 'That is my first comment'
	},

	{
		id: uuidv4(),
		comments: 'That is my second comment'
	},
	{
		id: uuidv4(),
		comments: 'That is my third comment'
	},
	{
		id: uuidv4(),
		comments: 'That is my fourth comment'
	},
	{
		id: uuidv4(),
		comments: 'That is my fifth comment'
	}
];
export default comments;
