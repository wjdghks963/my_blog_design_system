import Resume from "pages/resume";
import React from "react";
import { ComponentStory } from "@storybook/react";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Pages/Resume",
  component: Resume,
  parameters: {
    docs: {
      description: {
        component: "이곳은 그냥 이력서입니다.",
      },
    },
  },
};

const Template: ComponentStory<typeof Resume> = (args) => <Resume />;

export const Normal = Template.bind({});
