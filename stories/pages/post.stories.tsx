import { ComponentStory, Story } from "@storybook/react";
import Post from "../../pages/blogs/post/[id]";
import React from "react";
import { Provider } from "react-redux";
import { makeStore } from "store";
import { SessionProvider } from "next-auth/react";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Pages/Post",
  component: Post,
  parameters: {
    docs: {
      description: {
        component:
          "하나의 Post SSG를 목적으로 사용했지만 대개의 경우 ISR를 사용한다. 날자는 한국의 날자를 따른다.",
      },
    },
  },
  decorators: [
    (Story: Story) => (
      <SessionProvider>
        <Provider store={makeStore()}>
          <Story />
        </Provider>
      </SessionProvider>
    ),
  ],
};

const Template: ComponentStory<typeof Post> = (args) => <Post {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  postData: {
    views: 2132,
    tags: [
      { tag: "여기는 태그" },
      { tag: "이동이 가능한 태그" },
      { tag: "TagSpan의 컴포넌트를 재사용합니다." },
    ],
    ok: true,
    description:
      "이것은 보통의 포스트에 대한 설명입니다. 여기서는 필요하지 않습니다.",
    date: "2022년 2월 11일",
    title: "이것은 보통의 포스트이고 나는 제목입니다.",
    content: `이것은 보통의 포스트이고 나는 내용이며 Markdown Parser를 통해 보입니다. 이미지는 LCP, FCP 속도를 줄이기위해 next/image를 사용했습니다.`,
  },
};
