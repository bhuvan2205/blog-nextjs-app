export function wait(duration: number) {
	return new Promise((resolve) => {
		setTimeout(resolve, duration);
	});
}

export function validatePost(formData: FormData) {
	const errors: { title?: string; body?: string; userId?: string } = {};
	const title = formData.get("title") as string;
	const body = formData.get("body") as string;
	const userId = Number(formData.get("userId"));
	let isValid = true;

	if (title === "") {
		errors.title = "Required";
		isValid = false;
	}

	if (body === "") {
		errors.body = "Required";
		isValid = false;
	}

	if (isNaN(userId)) {
		errors.userId = "Required";
		isValid = false;
	}

	return [isValid ? { title, body, userId } : undefined, errors] as const;
}
