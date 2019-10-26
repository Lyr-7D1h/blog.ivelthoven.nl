import React from "react";
import { Menu } from "antd";

export default ({ items }) => {
  return (
    <Menu
      mode="horizontal"
      defaultSelectedKeys={"-1"}
      style={{
        lineHeight: "50px",
        float: "center",
        display: "inline",
        paddingLeft: "20px"
      }}
      theme="light"
    >
      {items.map((name, index) => (
        <Menu.Item key={index}>{name}</Menu.Item>
      ))}
    </Menu>
  );
};
