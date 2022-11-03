import Layout from "@components/Base/Layout";
import { ComponentStory } from "@storybook/react";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Base/Layout",
  component: Layout,
  parameters: {
    docs: {
      description: {
        component:
          "SEO, Header, Footer를 조종하는 Layout입니다. 일반적으로 children에 페이지의 요소들을 넣습니다.",
      },
    },
  },
};

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  footer: false,
  className: "",
  children: <div>Something</div>,
};
