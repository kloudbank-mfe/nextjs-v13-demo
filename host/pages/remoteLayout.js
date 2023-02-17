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
  // 테마 상태 관리
  const [darkTheme, setDarkTheme] = useState(false, () => { });

  // 테마 상태 변경 callback (로컬 스토리지)
  function setDarkThemeCallback() {
    localStorage.setItem("darkTheme", !darkTheme);
    setDarkTheme(!darkTheme);
  }

  useEffect(() => {
    // 기존 테마 상태 불러오기 (로컬 스토리지)
    setDarkTheme(localStorage.getItem("darkTheme") === "true" ? true : false);

    // 세션 정보 조회 (세션 스토리지)
    console.log("세션 : " + sessionStorage.getItem("session"));
  }, []);

  return (
    <>
      {/* 테마 적용 */}
      <ConfigProvider
        theme={{
          algorithm: darkTheme ? darkAlgorithm : defaultAlgorithm,
          token: { borderRadius: 2 },
        }}
      >
        <LayoutContainer
          darkTheme={darkTheme}
          setDarkTheme={setDarkThemeCallback}
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
        </LayoutContainer>
      </ConfigProvider>
    </>
  );
}

export default RemoteAppLayout;
