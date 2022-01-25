import { Col, Divider, Row } from "antd";

import "./App.css";
import Header from "./Header";
import Menu from "./Menu";

function App() {
  return (
    <Row>
      <Col
        xs={{ span: 18, offset: 3 }}
        md={{ span: 14, offset: 5 }}
        style={{
          backgroundColor: "#FE7440",
          borderRadius: "10px",
          marginTop: "50px",
        }}
      >
        <Header />
        <Divider />
        <Menu />
      </Col>
    </Row>
  );
}

export default App;
