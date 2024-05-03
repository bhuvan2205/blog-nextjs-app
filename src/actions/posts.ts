"use server";

import { createPost, deletePost, updatePost } from "@/db/posts";
import { validatePost } from "@/utils/helper";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createNewPost = async (prevState: unknown, formData: FormData) => {
	const [data, errors] = validatePost(formData);
	if (data == null) return errors;

	const post = await createPost(data);

	revalidatePath("/posts");
	revalidatePath(`/users/${post.userId}`);
	redirect(`/posts/${post.id}`);
};

export const editPost = async (
	id: number,
	prevState: unknown,
	formData: FormData
) => {
	const [data, errors] = validatePost(formData);
	if (data == null) return errors;

	const post = await updatePost(id, data);

	revalidatePath("/posts");
	revalidatePath(`/posts/${id}`);
	revalidatePath(`/users/${post.userId}`);
	redirect(`/posts/${id}`);
};

export const deleteSinglePost = async (postId: string) => {
	const post = await deletePost(postId);

	revalidatePath("/posts");
	revalidatePath(`/posts/${post.id}`);
	revalidatePath(`/users/${post.userId}`);
	redirect(`/posts`);
};
