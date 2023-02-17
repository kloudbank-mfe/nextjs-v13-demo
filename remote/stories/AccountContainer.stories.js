import React from "react";
import AccountContainer from "../components/container/AccountContainer";
import "../styles/global.scss";
import "../styles/theme-dark.scss";
import "../styles/theme-default.scss";

export default {
  title: "container/AccountContainer",
  component: AccountContainer,
  argTypes: {
    accountOpen: { control: "boolean" },
  },
};

const Template = (args) => <AccountContainer {...args}></AccountContainer>;

export const Primary = Template.bind({});
Primary.args = {
  accountOpen: true,
};
