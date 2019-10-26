import React, { useState, useEffect } from "react";
import requestor from "../helpers/requestor";
import notification from "../helpers/notification";
import { Layout } from "antd";

import DateSider from "../components/DateSider";
import Nav from "../components/Nav";
import BlogCard from "../components/BlogCard";
import SubNav from "../components/SubNav";
import BlogForm from "../components/BlogForm";

export default () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryNames, setCategoryNames] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(document.cookie.split(new RegExp(";|="))[1] === "true");

    requestor("GET", "blog/category")
      .then(data => {
        setCategoryNames(data.map(category => category.name));
        setCategories(data);
      })
      .catch(err => {
        notification.error("Could not fetch Blogs", err.message);
      });

    requestor("GET", "blog")
      .then(data => {
        setBlogs(data);
      })
      .catch(err => {
        notification.error("Could not fetch Blogs", err.message);
      });
  }, []);

  return (
    <Layout>
      <Nav selected="1" />
      <Layout>
        <DateSider dates={[new Date(), new Date()]} />
        <Layout>
          <SubNav items={categoryNames} />
          <div style={{ padding: "24px 24px 24px" }}>
            {loggedIn && (
              <Layout>
                <BlogForm categories={categories} />
              </Layout>
            )}
            CONTENT
            {blogs && blogs.map((blog, i) => <BlogCard blog={blog} key={i} />)}
          </div>
        </Layout>
      </Layout>
    </Layout>
  );
};
