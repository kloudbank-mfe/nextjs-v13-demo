import MainLayout from "../presentation/template/MainLayout.js";
import { getMenus } from "../../store/menus.js";
import { useRouter } from "next/router";

import { ConfigProvider, theme } from "antd";
const { defaultAlgorithm, darkAlgorithm } = theme;

export default function LayoutContainer({ darkTheme, setDarkTheme, children }) {
  const menus = getMenus();

  const router = useRouter();
  if (typeof window != "undefined") {
    menus.forEach((item) => {
      router.prefetch(item.key);
    });
  }
  const routePage = (e) => {
    router.push(e.key);
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
