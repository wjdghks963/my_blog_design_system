import Loading from "@components/Base/Loading";
import { ComponentStory } from "@storybook/react";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Base/Loading",
  component: Loading,
  parameters: {
    docs: {
      description: {
        component: "그냥 로딩입니다.",
      },
    },
  },
};

const Template: ComponentStory<typeof Loading> = (args) => (
  <Loading {...args} />
);

export const TextColor = Template.bind({});
TextColor.args = {
  className: "text-red-500",
};
