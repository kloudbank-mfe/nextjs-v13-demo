import { Layout, Button, Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faSun,
  faMoon,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const { Header } = Layout;

const LayoutHeader = ({
  darkTheme,
  changeTheme,
  showNotification,
  showAccount,
}) => {
  return (
    <Header>
      <Row justify="space-between" align="middle">
        <Col>
          <h4 className="demo-header-title">SK C&C App Modernization Demo</h4>
        </Col>
        <Col className="demo-header-gnb">
          <Button
            className="demo-header-gnb-item"
            shape="circle"
            icon={<FontAwesomeIcon icon={darkTheme ? faSun : faMoon} />}
            onClick={changeTheme}
          ></Button>
          <Button
            className="demo-header-gnb-item"
            shape="circle"
            icon={<FontAwesomeIcon icon={faEnvelope} />}
            onClick={showNotification}
          ></Button>
          <Button
            className="demo-header-gnb-item"
            shape="circle"
            icon={<FontAwesomeIcon icon={faUser} />}
            onClick={showAccount}
          ></Button>
        </Col>
      </Row>
    </Header>
  );
};
export default LayoutHeader;
