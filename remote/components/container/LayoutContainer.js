import MainLayout from "../presentation/template/MainLayout.js";
import { getMenus } from "../../store/menus.js";

export default function LayoutContainer({ darkTheme, setDarkTheme, children }) {
  const menus = getMenus();
  return (
    <MainLayout darkTheme={darkTheme} setDarkTheme={setDarkTheme} menus={menus}>
      {children}
    </MainLayout>
  );
}
