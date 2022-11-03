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
  parameters: {
    docs: {
      description: {
        component:
          "/blogs 에서 어떤 태그들이 있나 알려주는 navbar입니다. 태그를 클릭한다면 해당하는 태그들을 필터합니다.",
      },
    },
  },
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
