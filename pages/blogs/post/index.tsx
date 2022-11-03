import React, { useState } from "react";
import ImageForm from "@components/Post/ImageForm";
import dynamic from "next/dynamic";
import { useRef } from "react";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { useMutation } from "@libs/client/useMutation";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export interface IPostJson {
  title: string;
  markdown: string | undefined;
  tags?: string[] | void;
  description: string;
  category?: string;
}

type MutationResult = { ok: boolean };

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

export default function Post() {
  const router = useRouter();
  const tagsRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLInputElement>(null);
  const [markdown, setMarkdwon] = useState<string | undefined>("");
  const [post, { data }] = useMutation<MutationResult>("/api/blogs/post");
  const { data: session } = useSession();

  const splitTags = (): string[] | void => {
    let { value } = tagsRef?.current!;

    if (value === "") return;
    const splitArr = value.split(", ");
    const set = splitArr.filter((el, index) => {
      return splitArr.indexOf(el) === index;
    });
    return set;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const postJson: IPostJson = {
      title: titleRef.current?.value!,
      markdown,
      description: descriptionRef.current?.value!,
      tags: splitTags(),
      category: categoryRef.current?.value!,
    };

    if (session?.user?.email !== process.env.MY_EMAIL) {
      if (process.env.NODE_ENV === "production") {
        return alert("email 확인해주세요");
      }
    }

    post(postJson);

    if (data?.ok === false) {
      alert("인터넷 오류");
    } else {
      router.replace("/");
    }
  };

  return (
    <>
      <form className="items-center justify-center flex flex-col ">
        <div className="flex mt-5 gap-10 mb-10">
          <div>
            <span>Title - </span>
            <input
              className="outline-none border-2 border-solid border-black focus:border-gray-300 p-1"
              type="text"
              ref={titleRef}
              required
            />
          </div>
          <div>
            <span>Tags - </span>
            <input
              className="outline-none border-2 border-solid border-black focus:border-gray-300 p-1"
              type="text"
              ref={tagsRef}
              placeholder="tag들은 , 로 분리함"
              required
            />
          </div>
          <div>
            <span>Description - </span>
            <input
              className="outline-none border-2 border-solid border-black focus:border-gray-300 p-1"
              type="text"
              ref={descriptionRef}
              placeholder="줄거리 입력"
              required
            />
          </div>

          <div>
            <span>Category - </span>
            <input
              className="outline-none border-2 border-solid border-black focus:border-gray-300 p-1"
              type="text"
              ref={categoryRef}
              placeholder="카테고리 입력"
              required
            />
          </div>
        </div>
        <MDEditor
          className="w-4/5 prose"
          value={markdown}
          onChange={(value) => setMarkdwon(value)}
        />

        <button
          onClick={handleSubmit}
          className="text-center w-1/3 my-10 ring-2 ring-offset-2 ring-gray-400 py-2 block hover:bg-gray-400 hover:text-green-50"
        >
          Submit
        </button>
      </form>
      {session?.user?.email === process.env.MY_EMAIL ? <ImageForm /> : null}
    </>
  );
}
