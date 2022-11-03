import React, { useState } from "react";
import TagSpan from "@components/Post/TagSpan";
import { ComponentMeta, ComponentStory, Story } from "@storybook/react";
import { Provider } from "react-redux";
import { makeStore } from "store";

const Mockstore = ({
  tagState,
  children,
}: {
  tagState: any;
  children: any;
}) => <Provider store={makeStore()}>{children}</Provider>;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Base/TagSpan",
  component: TagSpan,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component:
          "이것은 Tag를 나타내는 component입니다. redux를 통해 클릭을 한다면 전역상태를 바꿔주거나 해당하는 상태로 /blogs 로 넘겨줍니다.",
      },
    },
  },
  decorators: [
    (Story: Story) => {
      const [tag, setTag] = useState("dsad");
      return (
        <Mockstore tagState={[{ tag: "ss" }]}>
          <div onClick={() => setTag(tag)}>
            <Story />
          </div>
        </Mockstore>
      );
    },
  ],
} as ComponentMeta<typeof TagSpan>;

const Template: ComponentStory<typeof TagSpan> = (args) => (
  <TagSpan {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  tag: "이것은 태그 네임입니다.",
  tagName: "dk",
  className: "",
  clickOk: true,
  goBlog: false,
};
