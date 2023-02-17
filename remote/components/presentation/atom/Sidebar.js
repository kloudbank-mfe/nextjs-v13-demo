import { useState } from "react";
import { Menu, Layout } from "antd";
const { Sider } = Layout;

const Sidebar = ({ items }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu defaultSelectedKeys={["1"]} mode="inline" items={items} />
    </Sider>
  );
};
export default Sidebar;
