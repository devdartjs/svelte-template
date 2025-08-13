type Param = {
	param: number;
};

export function match({ param }: { param: Param }) {
	return /^\d+$/.test(param.toString());
}
