import { HeaderLi } from "@components/Base/HeaderLi";
import { Story } from "@storybook/react";
import { ComponentStory } from "@storybook/react";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Base/HeaderLi",
  component: "HeaderLi",
  parameters: {
    docs: {
      description: {
        component:
          "Header에 존재하는 li입니다. name을 통해 보이는 Text를 조종할 수 있습니다.",
      },
    },
  },
  decorators: [
    (Story: Story) => (
      <div className="border-2 border-yellow-400">
        <Story />
      </div>
    ),
  ],
};

const Template: ComponentStory<typeof HeaderLi> = (args) => (
  <HeaderLi {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  name: "HOME",
};
