import { CategoryBox } from "@components/Home/CategoryBox";
import React from "react";
import { ComponentStory, Story } from "@storybook/react";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Home/CategoryBox",
  component: "CategoryBox",
  parameters: {
    docs: {
      description: {
        component:
          "category가 존재하는 포스트들을 모아두는 곳입니다. 토클을 통해 아래로 내용물을 내립니다.",
      },
    },
  },
  decorators: [
    (Story: Story) => (
      <div className="border-2 border-red-400">
        <Story />
      </div>
    ),
  ],
};

const Template: ComponentStory<typeof CategoryBox> = (args) => (
  <CategoryBox {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  category: {
    category: "카데고리 입니다.",
    posts: [{ title: "카테고리에 있는 포스트", id: 1 }],
  },
};
export const ThreePosts = Template.bind({});
ThreePosts.args = {
  category: {
    category: "카데고리 입니다.",
    posts: [
      { title: "카테고리에 있는 포스트", id: 1 },
      { title: "카테고리에 있는 포스트", id: 2 },
      { title: "카테고리에 있는 포스트", id: 3 },
    ],
  },
};
