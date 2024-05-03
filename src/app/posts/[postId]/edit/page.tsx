import { PostForm } from "@/components/PostForm";
import { UserSelectOptions } from "@/components/userSelectOptions";
import { getPost } from "@/db/posts";
import { getUsers } from "@/db/users";
import { notFound } from "next/navigation";

export default async function EditPostPage({
	params: { postId },
}: {
	params: { postId: string };
}) {
	const [post, users] = await Promise.all([getPost(postId), getUsers()]);

	if (!post) {
		return notFound();
	}

	return (
		<>
			<h1 className="page-title">Edit Post</h1>
			<PostForm post={post} userSelectOptions={<UserSelectOptions users={users} />} />
		</>
	);
}
