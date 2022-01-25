import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;
const handleClick = (e) => {
  console.log("click ", e);
};
const Options = () => {
  return (
    // <Title style={{ textAlign: "center", margin: "25px 0px" }}>Menu</Title>
    <Menu
      onClick={() => handleClick()}
      style={{ width: "100%" }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
    >
      <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <Menu.Item key="11">Option 11</Menu.Item>
        <Menu.Item key="12">Option 12</Menu.Item>
      </SubMenu>
      <SubMenu key="sub5" icon={<SettingOutlined />} title="Navigation Three">
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <Menu.Item key="11">Option 11</Menu.Item>
        <Menu.Item key="12">Option 12</Menu.Item>
      </SubMenu>
      <SubMenu key="sub6" icon={<SettingOutlined />} title="Navigation Three">
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <Menu.Item key="11">Option 11</Menu.Item>
        <Menu.Item key="12">Option 12</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default Options;
