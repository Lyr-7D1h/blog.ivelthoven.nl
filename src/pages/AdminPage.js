import React, { useEffect, useState } from "react";
import requestor from "../helpers/requestor";
import notification from "../helpers/notification";
import { Layout, Divider, Typography } from "antd";

import Nav from "../components/Nav";
import BlogForm from "../components/BlogForm";
import CategoryForm from "../components/CategoryForm";

const { Title } = Typography;

export default () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    requestor("GET", "blog/category")
      .then(categories => {
        setCategories(categories);
      })
      .catch(err => {
        notification.error(err.message);
      });
  }, []);

  const postBlog = () => {};

  const postCategory = data => {
    requestor("POST", "blog/category", data)
      .then(() => {
        notification.success("Created");
      })
      .catch(err => {
        notification.error("Could not create", err.message);
      });
  };

  return (
    <Layout>
      <Nav selected="4" />
      <Layout>
        <Layout style={{ padding: "24px 24px 24px" }}>
          <Title level={2}>Blogs</Title>
          {/* <BlogForm categories={categories} onSubmit={postBlog} /> */}
          <Divider />
          <Title level={2}>Category</Title>
          <CategoryForm categories={categories} onSubmit={postCategory} />
        </Layout>
      </Layout>
    </Layout>
  );
};
