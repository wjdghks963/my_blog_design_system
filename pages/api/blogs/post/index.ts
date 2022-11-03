import { findCategory } from "@libs/server/findCategoryId";
import { findTags } from "@libs/server/findTags";
import prismaclient from "@libs/server/prismaClient";
import type { NextApiRequest, NextApiResponse } from "next";
import { IPostJson } from "pages/blogs/post";

export default async function Post(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { title, markdown, tags, description, category }: IPostJson =
      req.body;

    try {
      // 같은 tag가 존재한다면 해당 tag id 반환
      const [tagsTag, tagsId] = await findTags(tags);
      const CategoryId = await findCategory(category ? category : "");
      const confirmCategoryId =
        CategoryId === null && category !== ""
          ? await prismaclient.category.create({
              data: {
                category: category!,
              },
              select: {
                id: true,
              },
            })
          : CategoryId;

      // 만약 해당하는 tag id가 없거나 tags, tagsTag 길이다 다르다면 추가한다.
      if (tagsTag?.length === 0 || (tags && tags.length > [tagsTag].length)) {
        let filterTags = tags?.filter((tag) => !tagsTag?.includes(tag));

        filterTags &&
          (await prismaclient.tag.createMany({
            data: filterTags?.map((tag) => ({ tag })),
            skipDuplicates: true,
          }));

        const combinedTags = [...new Set(tagsTag!.concat(filterTags!))];

        const relatedTags = await prismaclient.tag.findMany({
          where: {
            tag: { in: combinedTags },
          },
        });

        await prismaclient.post.create({
          data: {
            title: title!,
            content: markdown!,
            views: 0,
            description,
            tags: {
              connect: relatedTags.map((tag) => ({ id: +tag.id })),
            },
            category:
              category !== "" ? { connect: { id: confirmCategoryId?.id } } : {},
          },
        });
      } else {
        // 전부 있던 태그로 이루어진 post
        await prismaclient.post.create({
          data: {
            title: title!,
            content: markdown!,
            views: 0,
            description,
            tags: {
              connect: tagsId?.map((tag) => ({ id: +tag })),
            },
            category:
              category !== "" ? { connect: { id: confirmCategoryId?.id } } : {},
          },
        });
      }

      // 태그가 없는 post
      if (tags?.length === 0) {
        await prismaclient.post.create({
          data: {
            title: title!,
            content: markdown!,
            views: 0,
            description,
            category:
              category !== "" ? { connect: { id: confirmCategoryId?.id } } : {},
          },
        });
      }
    } catch (err) {
      console.log(err);

      return res
        .status(400)
        .json({ ok: false, message: `error occurred ${err}` });
    }
    return res.status(200).json({ ok: true });
  }
}
