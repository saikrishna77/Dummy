import React, { useContext } from "react";
import { Layout } from "antd";
// import { AppContext } from "../../Context_Api/Context";
import SiderHome from "../Sider/Sider";
import "./Home.scss";
import HeaderHome from "../Header/Header";
import { AppContext } from "../../Context_Api/Context";
const { Content } = Layout;

const Home = () => {
  const context = useContext(AppContext);
  return (
    <Layout className="Home-main">
      <SiderHome />
      <Layout className="site-layout">
        <HeaderHome />
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {context.currentDashboard.desc}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
