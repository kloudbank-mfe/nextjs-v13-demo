import React from "react";
import LayoutContainer from "../components/container/LayoutContainer";
import "../styles/global.scss";
import "../styles/theme-dark.scss";
import "../styles/theme-default.scss";

export default {
  title: "container/LayoutContainer",
  component: LayoutContainer,
  argTypes: {
    darkTheme: { control: "boolean" },
  },
};

const Template = (args) => (
  <LayoutContainer {...args}>
    <div>TEST</div>
  </LayoutContainer>
);

export const Primary = Template.bind({});
Primary.args = {
  darkTheme: true,
};
