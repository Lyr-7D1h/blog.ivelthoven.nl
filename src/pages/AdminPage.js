import React, { useState } from "react";
import notification from "../helpers/notification";
import { Layout, Modal } from "antd";
import { Redirect } from "react-router-dom";

import Nav from "../components/Nav";
import LoginForm from "../components/LoginForm";

import { baseUrl } from "../config.json";

export default () => {
  // const [categories, setCategories] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  // useEffect(() => {
  //   requestor("GET", "blog/category")
  //     .then(categories => {
  //       setCategories(categories);
  //     })
  //     .catch(err => {
  //       notification.error(err.message);
  //     });
  // }, []);

  // const postBlog = () => {};

  // const postCategory = data => {
  //   requestor("POST", "blog/category", data)
  //     .then(() => {
  //       notification.success("Created");
  //     })
  //     .catch(err => {
  //       notification.error("Could not create", err.message);
  //     });
  // };

  const submitHandler = values => {
    if (values.username && values.password) {
      var xhr = new XMLHttpRequest();

      xhr.addEventListener("load", () => {
        if (xhr.status === 200) {
          notification.success("Logged In");
          setIsVisible(false);
        } else {
          notification.error(`Request failed`, `${xhr.statusText}`);
        }
      });

      xhr.open("POST", baseUrl + "auth");

      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader(
        "Authorization",
        "Basic " + btoa(`${values.username}:${values.password}`)
      );

      xhr.send();
    }
  };

  return (
    <Layout>
      <Nav selected="-1" />
      <Layout>
        <Modal
          title="LOGIN"
          visible={isVisible}
          onCancel={() => {
            setIsVisible(false);
          }}
          okButtonProps={{ className: "hidden" }}
          cancelButtonProps={{ className: "hidden" }}
        >
          <LoginForm onSubmit={submitHandler} />
        </Modal>
        {/* TODO: Create Admin Page */}
        {isVisible || <Redirect to="/" />}
      </Layout>
    </Layout>
  );
};
