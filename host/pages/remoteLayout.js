import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { ConfigProvider, theme, Layout } from "antd";
const { defaultAlgorithm, darkAlgorithm } = theme;
import { LoadingOutlined } from "@ant-design/icons";
import { Space, Spin } from "antd";
const { Content } = Layout;

// Remote Layout dynamic 로딩
const LayoutContainer = dynamic(() => import("remote/Layout"), {
  ssr: false,
  loading: () => (
    <Space size="large" className="demo-spin-fullscreen">
      <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      <h4>Remote Layout Loading...</h4>
    </Space>
  ),
});

function RemoteAppLayout({ children }) {
  const [darkTheme, setDarkTheme] = useState(false, () => { });

  // 테마 상태 변경 callback (로컬 스토리지)
  function setDarkThemeCallback() {
    setDarkTheme(!darkTheme);
    localStorage.setItem("darkTheme", !darkTheme);
  }

  // 기존 테마 상태 불러오기 (로컬 스토리지)
  useEffect(() => {
    if (typeof window != "undefined") {
      setDarkTheme(localStorage.getItem("darkTheme") === "true" ? true : false);
    }
  }, []);

  return (
    <LayoutContainer darkTheme={darkTheme} setDarkTheme={setDarkThemeCallback}>
      {/* 테마 적용 */}
      <ConfigProvider
        theme={{
          algorithm: darkTheme ? darkAlgorithm : defaultAlgorithm,
          token: { borderRadius: 2 },
        }}
      >
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
          }}
        >
          {children}
        </Content>
      </ConfigProvider>
    </LayoutContainer>
  );
}

export default RemoteAppLayout;
