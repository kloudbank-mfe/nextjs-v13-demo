import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faRobot, faHome } from "@fortawesome/free-solid-svg-icons";
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
  getItem("Temp", "/temp", <FontAwesomeIcon icon={faCamera} />),
  getItem("Users", "/userinfo", <TeamOutlined />, [
    getItem("Paging", "/userinfo/pagination", <UserOutlined />),
  ]),
  getItem("Botkube", "/botkube", <FontAwesomeIcon icon={faRobot} />, [
    getItem("Paging", "/botkube/pagination", <FileOutlined />),
    getItem("Virtual List", "/botkube/virtual-list", <FileOutlined />),
  ]),
];

export const getMenus = () => menus;
