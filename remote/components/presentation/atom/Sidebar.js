import { useState } from "react";
import { Menu, Layout } from "antd";
const { Sider } = Layout;
import { useRouter } from "next/router";

const Sidebar = ({ items }) => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  const onMenuClick = (e) => {
    router.push(e.key);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
        onClick={onMenuClick}
      />
    </Sider>
  );
};
export default Sidebar;
