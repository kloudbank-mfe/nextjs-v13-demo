import React from "react";
import Header from "../components/presentation/atom/Header";
import { ConfigProvider, theme, Layout } from "antd";
const { defaultAlgorithm, darkAlgorithm } = theme;

import "../styles/global.scss";
import "../styles/theme-dark.scss";
import "../styles/theme-default.scss";

export default {
  title: "atom/Header",
  component: Header,
  argTypes: {
    darkTheme: { control: "boolean" },
  },
};

const Template = (args) => (
  <ConfigProvider
    theme={{
      algorithm: args.darkTheme ? darkAlgorithm : defaultAlgorithm,
      token: { borderRadius: 2 },
    }}
  >
    <Layout className={`demo-layout ${args.darkTheme ? "dark" : "default"}`}>
      <Header {...args}></Header>
    </Layout>
  </ConfigProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  darkTheme: true,
};
