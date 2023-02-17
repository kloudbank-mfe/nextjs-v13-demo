import { Layout } from "antd";
import React from "react";
import Sidebar from "../components/presentation/atom/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faCloud } from "@fortawesome/free-solid-svg-icons";
import { ConfigProvider, theme, Space, Spin } from "antd";
const { defaultAlgorithm, darkAlgorithm } = theme;

import "../styles/global.scss";
import "../styles/theme-dark.scss";
import "../styles/theme-default.scss";

export default {
  title: "atom/Sidebar",
  component: Sidebar,
  argTypes: {
    darkTheme: { control: "boolean" },
    items: {},
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
      <Sidebar {...args}></Sidebar>
    </Layout>
  </ConfigProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  darkTheme: true,
  items: [
    {
      key: "/temp/page1",
      label: "Option 1",
      icon: <FontAwesomeIcon icon={faCamera} />,
    },
    {
      key: "/temp/page2",
      label: "Option 2",
      icon: <FontAwesomeIcon icon={faCloud} />,
    },
  ],
};
