import PostWithThumnail from "@components/Home/PostWithThumnail";
import React from "react";
import { ComponentStory, Story } from "@storybook/react";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Home/PostWithThumnail",
  component: PostWithThumnail,
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
