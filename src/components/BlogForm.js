import React from "react";
import requestor from "../helpers/requestor";
import notification from "../helpers/notification";
import { Form, Input, Button, Select } from "antd";

const { Option } = Select;
const { TextArea } = Input;

const BlogForm = ({ categories, form, onSubmit }) => {
  // const handleSubmit = e => {
  //   e.preventDefault();

  //   form.validateFields((err, values) => {
  //     if (!err) {
  //       onSubmit(values);
  //     }
  //   });
  // };

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      console.log(values);
      if (!err) {
        requestor("POST", "blog/category", values)
          .then(() => {
            notification.success("Created");
          })
          .catch(err => {
            notification.error("Could not create", err.message);
          });
      }
    });
  };

  const { getFieldDecorator } = form;
  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item>
        {getFieldDecorator("title", {
          rules: [{ required: true }]
        })(<Input type="text" placeholder="Title" />)}
      </Form.Item>

      <Form.Item>
        {getFieldDecorator("category", {
          rules: [{ required: true }]
        })(
          <Select mode="multiple" placeholder="Category">
            {categories.map((categories, i) => (
              <Option value={categories.id} key={i}>
                {categories.name}
              </Option>
            ))}
          </Select>
        )}
      </Form.Item>

      <Form.Item>
        {getFieldDecorator("content", {
          rules: [{ required: true }]
        })(<TextArea placeholder="Content" rows="10" />)}
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          block
        >
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Form.create({ name: "blog_form" })(BlogForm);
