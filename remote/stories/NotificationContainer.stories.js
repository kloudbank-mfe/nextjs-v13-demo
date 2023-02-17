import React from "react";
import NotificationContainer from "../components/container/NotificationContainer";
import "../styles/global.scss";
import "../styles/theme-dark.scss";
import "../styles/theme-default.scss";

export default {
  title: "container/NotificationContainer",
  component: NotificationContainer,
  argTypes: {
    notificationOpen: { control: "boolean" },
  },
};

const Template = (args) => (
  <NotificationContainer {...args}></NotificationContainer>
);

export const Primary = Template.bind({});
Primary.args = {
  notificationOpen: true,
};
