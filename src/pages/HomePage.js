import React, { useState, useEffect } from "react";
import requestor from "../helpers/requestor";
import notification from "../helpers/notification";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

import DateSider from "../components/DateSider";
import Nav from "../components/Nav";
import BlogCard from "../components/BlogCard";

export default () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    requestor("GET", "blog/category")
      .then(data => {
        setCategories(data);
      })
      .catch(err => {
        notification.err("Could not fetch Blogs", err.message);
      });
    requestor("GET", "blog")
      .then(data => {
        setBlogs(data);
      })
      .catch(err => {
        notification.err("Could not fetch Blogs", err.message);
      });
  }, []);

  console.log(blogs);

  const subNav = (
    <Menu
      mode="horizontal"
      defaultSelectedKeys={"0"}
      style={{
        lineHeight: "64px",
        float: "center",
        display: "inline",
        paddingLeft: "20px"
      }}
      theme="light"
    >
      {/* <Menu.Item disabled>
        <b>Categories</b>
      </Menu.Item> */}
      <Menu.Item key="1">
        <Link to="/">Web</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/projects">Assembly</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/learning">Learning Tree</Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <Layout>
      <Nav selected="1" />
      <Layout>
        <DateSider></DateSider>
        <Layout>
          {subNav}
          <div style={{ padding: "24px 24px 24px" }}>
            CONTENT
            {blogs && blogs.map((blog, i) => <BlogCard blog={blog} key={i} />)}
          </div>
        </Layout>
      </Layout>
    </Layout>
  );
};
