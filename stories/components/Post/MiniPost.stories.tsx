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
