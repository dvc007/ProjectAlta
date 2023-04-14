import React from "react";
import { Button, Form, Input, message } from "antd";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { firebaseConfig } from "./../../../firebase";
export default function FormLogin() {
  firebase.initializeApp(firebaseConfig);
  //ket noi data
  const db = firebase.database();

  const onFinish = (values: any) => {
    db.ref("users")
      .push({ values })
      .then((result) => {
        message.success("theemthanhcong");
      })
      .catch((err) => {});
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="bg-red-400">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
