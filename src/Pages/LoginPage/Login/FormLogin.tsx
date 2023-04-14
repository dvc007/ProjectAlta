import React from "react";
import { Button, Form, Input, message } from "antd";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { firebaseConfig } from "./../../../firebase";

export default function FormLogin() {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const [form] = Form.useForm();

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
    <section>
      <div className="h-full">
        <div className="w-full">
          <div className="rounded-lg shadow-lg">
            <div className="flex justify-around">
              <div className="w-2/5 px-5 py-8 bg-stone-100">
                <div className="flex justify-center items-center">
                  <img
                    src={require("../../../image/Logo alta.png")}
                    style={{ width: 160 }}
                    alt="logo"
                  />
                </div>
                <Form
                  className="mt-5 flex flex-col"
                  form={form}
                  {...layout}
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    label="Nhập email *"
                    name="email"
                    rules={[
                      { required: true, message: "Please input your email!" },
                    ]}
                  >
                    <Input placeholder="Nhập địa chỉ email" />
                  </Form.Item>

                  <Form.Item
                    label="Mật khẩu *"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password placeholder="Nhập mật khẩu" />
                  </Form.Item>

                  <Form.Item {...tailLayout}>
                    <Button
                      htmlType="submit"
                      className="bg-amber-600 text-white "
                    >
                      Đăng nhập
                    </Button>
                  </Form.Item>
                </Form>
              </div>
              <div className="w-3/5 px-5 py-8">
                <div className="text-white flex">
                  <div className="text-center">
                    <img
                      src={require("../../../image/login.png")}
                      style={{ width: 550 }}
                      alt="logo"
                    />
                  </div>
                  <div className="text-black mt-48">
                    <h3 className="text-2xl text-orange-200 font-normal">
                      Hệ thống
                    </h3>
                    <h1 className="text-3xl text-orange-600 font-extrabold">
                      QUẢN LÝ XẾP HÀNG
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
