import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

export default ({ blog: { name } }) => {
  return (
    <Content
      style={{
        background: "#fff",
        padding: 24,
        margin: 0,
        minHeight: 280
      }}
    >
      {" "}
      {name}{" "}
    </Content>
  );
};
