import React from "react";
import { Layout } from "antd";
import DateSider from "../components/DateSider";
import Nav from "../components/Nav";

const { Content } = Layout;

export default () => {
  return (
    <Layout>
      <Nav></Nav>
      <Layout>
        <DateSider></DateSider>
        <Layout style={{ padding: "24px 24px 24px" }}>
          <Content
            style={{
              background: "#fff",
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
