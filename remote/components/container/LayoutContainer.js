import { useContext } from "react";
import MainLayout from "../presentation/template/MainLayout.js";
import LayoutContext from "../../store/shared-context";
import { getMenus } from "../../store/menus.js";
import { useRouter } from "next/router";

import { ConfigProvider, theme } from "antd";
const { defaultAlgorithm, darkAlgorithm } = theme;

export default function LayoutContainer({ darkTheme, setDarkTheme, children }) {
  const menus = getMenus();

  const router = useRouter();
  const { layoutStore, setLayoutStore } = useContext(LayoutContext);

  const routePage = (e) => {
    // 라우팅 사용
    router.push(e.key);
    // LayoutContext 사용
    setLayoutStore({ ...layoutStore, path: e.key });
    console.log("메뉴 클릭 :" + e.key);
  };
  return (
    <ConfigProvider
      theme={{
        algorithm: darkTheme ? darkAlgorithm : defaultAlgorithm,
        token: { borderRadius: 2 },
      }}
    >
      <MainLayout
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
        menus={menus}
        routePage={routePage}
      >
        {children}
      </MainLayout>
    </ConfigProvider>
  );
}
