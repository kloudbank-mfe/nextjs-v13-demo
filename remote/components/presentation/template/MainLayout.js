import { useEffect, useState } from "react";
import Sidebar from "../atom/Sidebar";
import Header from "../atom/Header";
import AccountContainer from "../../container/AccountContainer";
import NotificationContainer from "../../container/NotificationContainer";

import { ConfigProvider, theme, Layout } from "antd";

const { Content } = Layout;
const { defaultAlgorithm, darkAlgorithm } = theme;

export default function MainLayout({
  darkTheme,
  setDarkTheme,
  menus,
  routePage,
  children,
}) {
  const [notificationOpen, setNotificationOpen] = useState(false, () => {});
  const [accountOpen, setAccountOpen] = useState(false, () => {});

  const changeTheme = () => {
    setDarkTheme();
  };
  const showNotification = () => {
    setNotificationOpen((value) => !value);
  };
  const showAccount = () => {
    setAccountOpen((value) => !value);
  };

  return (
    <>
      <Layout className={`demo-layout ${darkTheme ? "dark" : "default"}`}>
        <Header
          darkTheme={darkTheme}
          changeTheme={changeTheme}
          showNotification={showNotification}
          showAccount={showAccount}
        ></Header>
        <Layout>
          <Sidebar items={menus} routePage={routePage}></Sidebar>
          <Content>
            {children}
            <NotificationContainer
              notificationOpen={notificationOpen}
              setNotificationOpen={setNotificationOpen}
            />
          </Content>
        </Layout>
      </Layout>
      <AccountContainer
        accountOpen={accountOpen}
        setAccountOpen={setAccountOpen}
      />
    </>
  );
}
