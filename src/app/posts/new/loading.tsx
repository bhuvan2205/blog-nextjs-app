import { SkeletonPostForm } from "@/components/PostForm";
import React from "react";

export default function Loading() {
	return (
		<>
			<h1 className="page-title">New Post</h1>
            <SkeletonPostForm />
		</>
	);
}
