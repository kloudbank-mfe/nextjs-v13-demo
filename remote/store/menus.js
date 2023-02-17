import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faCloud } from "@fortawesome/free-solid-svg-icons";
// import { FileOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";

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
  getItem("Option 1", "/", <FontAwesomeIcon icon={faCamera} />),
  getItem("Option 2", "/test", <FontAwesomeIcon icon={faCloud} />),
  // getItem("Team", "sub2", <TeamOutlined />, [
  //   getItem("Team 1", "6"),
  //   getItem("Team 2", "8"),
  // ]),
];

export const getMenus = () => menus;
