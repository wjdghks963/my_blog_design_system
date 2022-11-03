import Home from "../../pages/index";
import React from "react";
import { ComponentStory } from "@storybook/react";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Pages/Home",
  component: Home,
  parameters: {
    docs: {
      description: {
        component: "이곳은 그냥 홈입니다.",
      },
    },
  },
};

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  data: {
    categories: [],
    popularPosts: [],
    recentPosts: [],
  },
};
