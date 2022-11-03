import prismaclient from "@libs/server/prismaClient";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function MainPosts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const popularPosts = await prismaclient.post.findMany({
      take: 5,
      orderBy: {
        views: "desc",
      },
      include: {
        tags: true,
      },
    });

    const recentPosts = await prismaclient.post.findMany({
      take: 5,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        tags: true,
      },
    });

    const categories = await prismaclient.category.findMany({
      orderBy: { category: "desc" },
      select: {
        category: true,
        posts: {
          select: {
            title: true,
            id: true,
          },
        },
      },
    });

    return res.status(200).json({ popularPosts, recentPosts, categories });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ ok: false, errormessage: err });
  }
}
