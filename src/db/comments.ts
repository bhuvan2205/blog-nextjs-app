import { unstable_cache } from "next/cache";
import prisma from "./db";
import { cache } from "react";
import { wait } from "@/utils/seed";

export const getPostComments = unstable_cache(
	cache(async (postId: string | number) => {
		await wait(2000);
		return prisma.comment.findMany({ where: { postId: Number(postId) } });
	}),
	["comments", "postId"]
);
