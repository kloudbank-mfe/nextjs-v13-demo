import { useState } from "react";
import { Layout } from "antd";
import Sidebar from "../atom/Sidebar";
import Header from "../atom/Header";
import AccountContainer from "../../container/AccountContainer";
import NotificationContainer from "../../container/NotificationContainer";

const { Content } = Layout;

export default function MainLayout({
  darkTheme,
  setDarkTheme,
  menus,
  routePage,
  children,
}) {
  const [notificationOpen, setNotificationOpen] = useState(false, () => {});
  const [accountOpen, setAccountOpen] = useState(false, () => {});

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
          changeTheme={setDarkTheme}
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
