import { CategoryBox } from "@components/Home/CategoryBox";
import React from "react";
import { ComponentStory, Story } from "@storybook/react";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Home/CategoryBox",
  component: "CategoryBox",
  argTypes: {
    isClicked: { control: { type: "boolean" } },
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

export const Normal1 = Template.bind({});
Normal1.args = {
  category: {
    category: "카데고리 입니다.",
    posts: [{ title: "카테고리에 있는 포스트", id: 1 }],
  },
};
export const Normal3 = Template.bind({});
Normal3.args = {
  category: {
    category: "카데고리 입니다.",
    posts: [
      { title: "카테고리에 있는 포스트", id: 1 },
      { title: "카테고리에 있는 포스트", id: 2 },
      { title: "카테고리에 있는 포스트", id: 3 },
    ],
  },
};
