import compareLocaleDate from "@libs/client/CompareLocaleDate";
import { useRouter } from "next/router";
import { PostWithId } from "pages/blogs";

import TagSpan from "./TagSpan";

export default function MiniPost({ data }: { data: PostWithId }) {
  const router = useRouter();
  const date = compareLocaleDate(data.updatedAt, data.createdAt);

  const moveToPost = (id: number) => {
    return router.push(`/blogs/post/${id}`);
  };

  return (
    <div
      onClick={() => moveToPost(data.id)}
      className="flex flex-col gap-3 w-2/3 border-solid border-black border-2 rounded-md p-5  shadow-xl cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-black dark:border-white dark:shadow-neutral-600"
    >
      <div className="flex flex-row justify-between">
        <span>Title - {data.title}</span>
        <div className="hidden md:flex flex-row gap-4 ">
          {data.tags.map((tag, index, arr) => {
            if (index < 3) {
              return <TagSpan key={index} tag={tag.tag} />;
            } else if (index > 3 && index < 5) {
              return (
                <TagSpan
                  key={index}
                  tag={tag.tag}
                  className={"hidden md:flex"}
                />
              );
            } else if (index > 7 && index < 10) {
              return (
                <TagSpan
                  key={index}
                  tag={tag.tag}
                  className={"hidden lg:flex"}
                />
              );
            }
          })}
        </div>
      </div>
      <span>Content - {data?.description}</span>
      <span>{date}</span>
    </div>
  );
}
