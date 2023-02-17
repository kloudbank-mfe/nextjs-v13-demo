import { useState, useMemo, useEffect } from "react";
import { ConfigProvider, theme } from "antd";
import LayoutContext from "../store/shared-context";
import LayoutContainer from "../components/container/LayoutContainer";
import "../styles/global.scss";
import "../styles/theme-dark.scss";
import "../styles/theme-default.scss";

const { defaultAlgorithm, darkAlgorithm } = theme;

export default function App({ Component, pageProps }) {
  // 컨텍스트 상태 관리
  const [layoutStore, setLayoutStore] = useState();
  const value = useMemo(() => ({ layoutStore, setLayoutStore }), [layoutStore]);

  // 테마 상태 관리
  const [darkTheme, setDarkTheme] = useState(false, () => {});

  // 테마 상태 변경 callback (로컬 스토리지)
  function setDarkThemeCallback() {
    localStorage.setItem("darkTheme", !darkTheme);
    setDarkTheme(!darkTheme);
  }

  useEffect(() => {
    // 기존 테마 상태 불러오기 (로컬 스토리지)
    setDarkTheme(localStorage.getItem("darkTheme") === "true" ? true : false);

    // 세션 정보 조회 (세션 스토리지)
    console.log(sessionStorage.getItem("session"));

    // 전역 상태 정보 조회 (컨텍스트)
    console.log(layoutStore);
  }, []);

  return (
    <>
      {/* 컨텍스트 적용 */}
      <LayoutContext.Provider value={value}>
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
            <Component {...pageProps} />
          </LayoutContainer>
        </ConfigProvider>
      </LayoutContext.Provider>
    </>
  );
}
