import { useState, useEffect } from "react";
import LayoutContainer from "../components/container/LayoutContainer";
import { ConfigProvider, theme, Typography } from "antd";
const { Title, Paragraph } = Typography;
const { defaultAlgorithm, darkAlgorithm } = theme;

export default function Home() {
  const [darkTheme, setDarkTheme] = useState(false, () => {});

  // 테마 상태 변경 callback (로컬 스토리지)
  function setDarkThemeCallback() {
    localStorage.setItem("darkTheme", !darkTheme);
    setDarkTheme(!darkTheme);
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
          <Title>소개 </Title>
          <Paragraph style={{}}>{process.env.NEXT_PUBLIC_CONTENTS}</Paragraph>
        </Typography>
      </ConfigProvider>
    </LayoutContainer>
  );
}
