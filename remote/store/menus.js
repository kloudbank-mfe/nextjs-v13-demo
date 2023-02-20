import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faHome, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FileOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

// server side data fetch 생략
const menus = [
  getItem("Home", "/", <FontAwesomeIcon icon={faHome} />),
  getItem("Users", "/userinfo", <TeamOutlined />),// [
    // getItem("Paging", "/userinfo", <UserOutlined />),
  // ]),
  getItem("Botkube", "/botkube", <FontAwesomeIcon icon={faRobot} />, [
    getItem("Botkube List", "/botkube/pagination", <FileOutlined />),
    getItem("Agent List", "/botkube/virtual-list", <FileOutlined />),
  ]),
  getItem("Temp", "/temp", <FontAwesomeIcon icon={faTrash} />, [
    getItem("page1", "/temp/page1", <FileOutlined />),
    getItem("page2", "/temp/page2", <FileOutlined />),
  ]),
];

export const getMenus = () => menus;
