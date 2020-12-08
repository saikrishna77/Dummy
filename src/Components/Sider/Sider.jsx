import React from "react";
import { Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  SettingOutlined,
  LogoutOutlined,
  PlayCircleOutlined,
  UpCircleOutlined,
} from "@ant-design/icons";
import { Layout } from "antd";
import { AppContext } from "../../Context_Api/Context";
import "./Sider.scss";
import { logo } from "../../Images/Images";
import SubMenu from "antd/lib/menu/SubMenu";
const { Sider } = Layout;

const SiderHome = () => {
  const context = React.useContext(AppContext);
  return (
    <div className="Sider-main">
      <Sider
        width="300"
        trigger={null}
        collapsible
        collapsed={context.collapsed}
        className={"Sider-inside"}
      >
        <div className="logo">
          {" "}
          {context.collapsed ? (
            <img src={logo} alt="" id="image-l" />
          ) : (
            <img src={logo} alt="" />
          )}
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["home"]}>
          <Menu.Item
            key="home"
            icon={<UserOutlined />}
            onClick={(e) => {
              context.setCurrentDashboard("Home");
            }}
          >
            Home
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="Transaction">
            <Menu.Item
              key="2"
              onClick={(e) => {
                context.setCurrentDashboard({
                  tag: "T1",
                  desc: "Enter a Customer Transaction",
                });
              }}
            >
              Enter a Customer Transaction
            </Menu.Item>
            <Menu.Item
              key="3"
              onClick={(e) => {
                context.setCurrentDashboard({
                  tag: "T2",
                  desc: "Saved Transaction",
                });
              }}
            >
              Saved Transaction
            </Menu.Item>
            <Menu.Item
              key="4"
              onClick={(e) => {
                context.setCurrentDashboard({
                  tag: "T3",
                  desc: "View/Edit Consumer Transaction",
                });
              }}
            >
              View/Edit Consumer Transaction
            </Menu.Item>
            <Menu.Item
              key="5"
              onClick={(e) => {
                context.setCurrentDashboard({
                  tag: "T4",
                  desc: "Enter New Transaction",
                });
              }}
            >
              Enter New Transaction
            </Menu.Item>
            <Menu.Item
              key="6"
              onClick={(e) => {
                context.setCurrentDashboard({
                  tag: "T5",
                  desc: "International Funds Transfer - Amounts",
                });
              }}
            >
              International Funds Transfer - Amounts
            </Menu.Item>
            <Menu.Item
              key="7"
              onClick={(e) => {
                context.setCurrentDashboard({
                  tag: "T6",
                  desc:
                    "              International Funds Transfer - Fee Quote / Summary",
                });
              }}
            >
              International Funds Transfer - Fee Quote / Summary
            </Menu.Item>
            <Menu.Item
              key="8"
              onClick={(e) => {
                context.setCurrentDashboard({
                  tag: "T7",
                  desc:
                    "              International Funds Transfer - Transaction Details            ",
                });
              }}
            >
              International Funds Transfer - Transaction Details
            </Menu.Item>
            <Menu.Item
              key="9"
              onClick={(e) => {
                context.setCurrentDashboard({ tag: "T8", desc: "Complaince" });
              }}
            >
              Complaince
            </Menu.Item>
            <Menu.Item
              key="10"
              onClick={(e) => {
                context.setCurrentDashboard({
                  tag: "T9",
                  desc: " Transaction Summary",
                });
              }}
            >
              Transaction Summary
            </Menu.Item>
            <Menu.Item
              key="11"
              onClick={(e) => {
                context.setCurrentDashboard({
                  tag: "T10",
                  desc: "All Transactions",
                });
              }}
            >
              All Transaction
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub7"
            icon={<UserOutlined />}
            title="Manage my Buisness"
          >
            <Menu.Item
              key="12"
              onClick={(e) => {
                context.setCurrentDashboard({ tag: "M1", desc: "Pay a Bill" });
              }}
            >
              Pay a Bill
            </Menu.Item>
            <Menu.Item
              key="13"
              onClick={(e) => {
                context.setCurrentDashboard({
                  tag: "M2",
                  desc: "Enter Misc Company",
                });
              }}
            >
              Enter Misc Company
            </Menu.Item>
            <Menu.Item
              key="14"
              onClick={(e) => {
                context.setCurrentDashboard({
                  tag: "M3",
                  desc: "View/Edit Company Transaction",
                });
              }}
            >
              View/Edit Company Transaction
            </Menu.Item>
            <Menu.Item
              key="15"
              onClick={(e) => {
                context.setCurrentDashboard({ tag: "M4", desc: "Add Vendor" });
              }}
            >
              Add Vendor
            </Menu.Item>
            <Menu.Item
              key="16"
              onClick={(e) => {
                context.setCurrentDashboard({
                  tag: "M5",
                  desc: "Edit Vendor/Supplier List",
                });
              }}
            >
              Edit Vendor/Supplier List
            </Menu.Item>
            <Menu.Item
              key="17"
              onClick={(e) => {
                context.setCurrentDashboard({
                  tag: "M6",
                  desc: "Reconcile Bank Accounts",
                });
              }}
            >
              Reconcile Bank Accounts
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<UserOutlined />} title="Customer Accounts">
            <Menu.Item
              key="18 "
              onClick={(e) => {
                context.setCurrentDashboard({
                  tag: "CA1",
                  desc: "Add a New Customer",
                });
              }}
            >
              Add a New Customer
            </Menu.Item>
            <Menu.Item
              key="19 "
              onClick={(e) => {
                context.setCurrentDashboard({
                  tag: "CA2",
                  desc: "View/Edit Customers",
                });
              }}
            >
              View/Edit Customers
            </Menu.Item>
            <Menu.Item
              key="20 "
              onClick={(e) => {
                context.setCurrentDashboard({
                  tag: "CA3",
                  desc: "Customer Relationships Management (CRM)",
                });
              }}
            >
              Customer Relationships <br /> Management (CRM)
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<UserOutlined />} title="Reports">
            <Menu.Item
              key="21"
              onClick={(e) => {
                context.setCurrentDashboard({
                  tag: "R1",
                  desc: "Fianacial Reports",
                });
              }}
            >
              Fianacial Reports
            </Menu.Item>
            <Menu.Item
              key="22"
              onClick={(e) => {
                context.setCurrentDashboard({
                  tag: "R2",
                  desc: "Customer Reports",
                });
              }}
            >
              Customer Reports
            </Menu.Item>
            <Menu.Item
              key="23"
              onClick={(e) => {
                context.setCurrentDashboard({
                  tag: "R3",
                  desc: "Tax Accounts",
                });
              }}
            >
              Tax Accounts
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" icon={<UserOutlined />} title="Complaince">
            <Menu.Item
              key="24"
              onClick={(e) => {
                context.setCurrentDashboard({
                  tag: "C1",
                  desc: "Saved Transaction",
                });
              }}
            >
              Reports
            </Menu.Item>
            <Menu.Item
              key="25"
              onClick={(e) => {
                context.setCurrentDashboard({ tag: "C2", desc: "Forms" });
              }}
            >
              Forms
            </Menu.Item>
            <Menu.Item
              key="26"
              onClick={(e) => {
                context.setCurrentDashboard({
                  tag: "C3",
                  desc: "Exceptional Transaction",
                });
              }}
            >
              Exceptional Transaction
            </Menu.Item>
            <Menu.Item
              key="27"
              onClick={(e) => {
                context.setCurrentDashboard({
                  tag: "C4",
                  desc: "Complaince Filter Settings",
                });
              }}
            >
              Complaince Filter Settings
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub5" icon={<UserOutlined />} title="Admin">
            <Menu.Item
              key="28"
              onClick={(e) => {
                context.setCurrentDashboard({
                  tag: "A1",
                  desc: "Edit System Settings",
                });
              }}
            >
              Edit System Settings
            </Menu.Item>
            <Menu.Item
              key="29"
              onClick={(e) => {
                context.setCurrentDashboard({
                  tag: "A2",
                  desc: "Add/Edit List of Accounts",
                });
              }}
            >
              Add/Edit List of Accounts
            </Menu.Item>
            <Menu.Item
              key="30"
              onClick={(e) => {
                context.setCurrentDashboard({
                  tag: "A3",
                  desc: "View/Edit Customer Fee Schedule",
                });
              }}
            >
              View/Edit Customer Fee <br /> Schedule
            </Menu.Item>
            <Menu.Item
              key="31"
              onClick={(e) => {
                context.setCurrentDashboard({
                  tag: "A4",
                  desc: "Add User/Employee",
                });
              }}
            >
              Add User/Employee
            </Menu.Item>
            <Menu.Item
              key="32"
              onClick={(e) => {
                context.setCurrentDashboard({
                  tag: "A5",
                  desc: "View/Edit Company Information",
                });
              }}
            >
              View/Edit Company Information
            </Menu.Item>
            <Menu.Item
              key="33"
              onClick={(e) => {
                context.setCurrentDashboard({
                  tag: "A6",
                  desc: "Enter/Edit Company Information",
                });
              }}
            >
              Enter/Edit Company Information
            </Menu.Item>
            <Menu.Item
              key="34"
              onClick={(e) => {
                context.setCurrentDashboard({ tag: "A7", desc: "Audit Log" });
              }}
            >
              Audit Log
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub6" icon={<UserOutlined />} title="Help">
            <Menu.Item
              key="35"
              onClick={(e) => {
                context.setCurrentDashboard({
                  tag: "Contact",
                  desc: "Contact",
                });
              }}
            >
              Contact
            </Menu.Item>
          </SubMenu>
          <Menu.Item
            key="36"
            onClick={(e) => {
              context.setCurrentDashboard({
                tag: "dashboard",
                desc: "Dashboard",
              });
            }}
            icon={<UploadOutlined />}
          >
            Dashboard
          </Menu.Item>
        </Menu>
      </Sider>
      <div className="bottom-sider-menu">
        <SettingOutlined id="image-w" />
        <PlayCircleOutlined id="image-w" />
        <UpCircleOutlined id="image-w" />
        <LogoutOutlined id="image-w" />
      </div>
    </div>
  );
};
export default SiderHome;
