import React, { useState, useEffect } from "react";
import requestor from "../helpers/requestor";
import notification from "../helpers/notification";
import { Layout } from "antd";

import DateSider from "../components/DateSider";
import Nav from "../components/Nav";
import BlogCard from "../components/BlogCard";

export default () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    requestor("GET", "blog")
      .then(data => {
        setBlogs(data);
      })
      .catch(err => {
        notification.err("Could not fetch Blogs", err.message);
      });
  }, []);

  console.log(blogs);
  return (
    <Layout>
      <Nav selected="1" />
      <Layout>
        <DateSider></DateSider>
        <Layout style={{ padding: "24px 24px 24px" }}>
          {blogs && blogs.map((blog, i) => <BlogCard blog={blog} key={i} />)}
        </Layout>
      </Layout>
    </Layout>
  );
};
