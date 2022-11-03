import MiniPost from "@components/Post/MiniPost";
import { ComponentStory, Story } from "@storybook/react";
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
  name: "Component/Blog/MiniPost",
  component: MiniPost,
  parameters: {
    docs: {
      description: {
        component:
          "이곳은 /blogs 페이지에서 보여지는 작은 포스트의 컴포넌트입니다. 반응형 사이즈에 따라 태그의 갯수를 줄이거나 늘립니다.",
      },
    },
  },
  argsType: {
    title: {
      name: "title",
      type: { name: "string", required: true },
      controls: { type: "text" },
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
const Template: ComponentStory<typeof MiniPost> = (args) => (
  <MiniPost {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  data: {
    id: 1,
    title: "post title",
    content: "post djdjoasjdoasjdosadjoajsdojas",
    description: "post에 대한 간략 내용",
    tags: [
      { id: 1, tag: "1st tag" },
      { id: 2, tag: "2nd tag" },
      { id: 3, tag: "3rd tag" },
      { id: 4, tag: "4th tag" },
    ],
    views: 1212,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
};
