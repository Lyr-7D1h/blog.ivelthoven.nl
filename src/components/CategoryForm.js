import React from "react";
import { Form, Input, Button, Select } from "antd";

const { Option } = Select;
const { TextArea } = Input;

const CategoryForm = ({ categories, form, onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        onSubmit(values);
      }
    });
  };

  const { getFieldDecorator } = form;
  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item>
        {getFieldDecorator("name", {
          rules: [{ required: true }]
        })(<Input type="text" placeholder="Name" />)}
      </Form.Item>

      <Form.Item>
        {getFieldDecorator("parent", {
          rules: []
        })(
          <Select mode="single" placeholder="Parent Category">
            {categories.map((category, i) => (
              <Option value={category.id} key={category.id}>
                {category.id} {category.name}
              </Option>
            ))}
          </Select>
        )}
      </Form.Item>

      <Form.Item>
        {getFieldDecorator("description", {
          rules: [{ required: true }]
        })(<TextArea placeholder="Description" />)}
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

export default Form.create({ name: "blog_form" })(CategoryForm);
