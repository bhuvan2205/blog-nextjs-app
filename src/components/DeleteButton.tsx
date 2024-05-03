"use client";

import { deleteSinglePost } from "@/actions/posts";
import { useTransition } from "react";

export default function DeleteButton({ postId }: { postId: string }) {
	const [isPending, startTransition] = useTransition();
	return (
		<button
			className="btn btn-outline btn-danger"
			disabled={isPending}
			onClick={async () => {
				startTransition(await deleteSinglePost(postId));
			}}>
			Delete
		</button>
	);
}
