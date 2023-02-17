import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { ConfigProvider, theme, Typography } from "antd";
const { Title, Paragraph } = Typography;
const { defaultAlgorithm, darkAlgorithm } = theme;
import { LoadingOutlined } from "@ant-design/icons";
import { Space, Spin } from "antd";

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

export default function Home() {
  const [darkTheme, setDarkTheme] = useState(false, () => {});

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

    // 세션 정보 조회
    if (typeof window != "undefined") {
      console.log(JSON.parse(sessionStorage.getItem("session")));
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
        <Typography>
          <Title>소개</Title>
          <Paragraph>
            In the process of internal desktop applications development, many
            different design specs and implementations would be involved, which
            might cause designers and developers difficulties and duplication
            and reduce the efficiency of development.
          </Paragraph>
        </Typography>
      </ConfigProvider>
    </LayoutContainer>
  );
}
