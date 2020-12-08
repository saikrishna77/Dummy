import React from "react";
import { Button, Dropdown, Layout, Menu } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { AppContext } from "../../Context_Api/Context";
import "./Header.scss";
import { menu } from "../../Images/Images";
const { Header } = Layout;

const HeaderHome = () => {
  const context = React.useContext(AppContext);
  const menuFunction = (
    <Menu style={{ width: "15vw" }}>
      <Menu.Item>Profile</Menu.Item>
      <Menu.Item>Settings </Menu.Item>
      <Menu.Item>Help </Menu.Item>
      <Menu.Item
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        Logout <LogoutOutlined />
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <div
          className="trigger"
          onClick={(e) => {
            context.setcollapsed(!context.collapsed);
          }}
        >
          <img src={menu} alt="" />
        </div>
        <div className="logout">
          <Dropdown overlay={menuFunction} placement="bottomRight">
            <Button>Log Out</Button>
          </Dropdown>
          {/* <LogoutOutlined /> <p>Logout </p> */}
        </div>
      </Header>
    </div>
  );
};
export default HeaderHome;
