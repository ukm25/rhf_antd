import { Col, Row } from "antd";
import Options from "./Options";

const Menu = () => {
  return (
    <Row>
      <Col md={{ span: 6 }}>
        <Options />
      </Col>
    </Row>
  );
};

export default Menu;
