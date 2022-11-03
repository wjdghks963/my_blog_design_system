import PostWithThumnail from "@components/Home/PostWithThumnail";
import React from "react";
import { ComponentStory } from "@storybook/react";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Home/PostWithThumnail",
  component: PostWithThumnail,
  parameters: {
    docs: {
      description: {
        component:
          "이곳은 / 에서 보여주는 작은 포스트입니다. 포스트의 내용 안에 사진이 존재한다면 그 사진을 섬네일로 사용합니다.",
      },
    },
  },
};

const Template: ComponentStory<typeof PostWithThumnail> = (args) => (
  <PostWithThumnail {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  data: {
    id: 1,
    title: "포스트 제목",
    content: "dsadsa",
    description: "설명",
    tags: [{ tag: "tag" }],
    views: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  isMobile: false,
};
