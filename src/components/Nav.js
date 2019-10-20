import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

export default () => {
  return (
    <Header>
      <div className="logo" />
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px", float: "left" }}
        theme="dark"
      >
        <Menu.Item disabled>
          <b>BLOG.IVELTHOVEN.NL</b>
        </Menu.Item>

        <Menu.Item key="1">
          <Link to="/">Blog</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/projects">Projects</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/learning">Learning Tree</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};
