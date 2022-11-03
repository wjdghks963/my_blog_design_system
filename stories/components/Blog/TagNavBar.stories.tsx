import React from "react";
import { ComponentStory, Story } from "@storybook/react";
import TagNavBar from "@components/Blog/TagNavBar";
import TagSpan from "@components/Post/TagSpan";
import { IPostArr } from "pages/blogs";
import { KeyedMutator } from "swr";
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
  title: "Components/Blog/TagNavBar",
  component: "TagNavBar",
  subcomponents: { TagSpan },
  argsType: {},
  decorators: [
    (Story: Story) => (
      <Mockstore tagState={[{ tag: "ss" }]}>
        <Story />
      </Mockstore>
    ),
  ],
};

const Template: ComponentStory<typeof TagNavBar> = (
  args: JSX.IntrinsicAttributes & {
    tags: { tag: string }[];
    mutate: KeyedMutator<IPostArr[]>;
  }
) => <TagNavBar {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  tags: [{ tag: "안녕" }, { tag: "하세요" }, { tag: "태그입니다." }],
};
