import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
export default function FormSetPassword() {
  const navigate = useNavigate();
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    setTimeout(() => {
      navigate("/setpassword");
    }, 1000);
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
                  className="mt-11 flex flex-col"
                  form={form}
                  {...layout}
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <div className="mx-auto">
                    <label className="block w-96 text-2xl font-bold">
                      Đặt lại mật khẩu mới
                    </label>
                    <label className="block w-96">
                      Vui lòng nhập email để đặc lại mật khẩu của bạn *
                    </label>
                  </div>
                  <div className="mx-auto mt-5">
                    <Form.Item
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout} className="mt-12 mr-44">
                      <div className="flex justify-center items-center">
                        <Button
                          htmlType="submit"
                          className="bg-amber-600 text-white "
                        >
                          Xác nhận
                        </Button>
                      </div>
                    </Form.Item>
                  </div>
                </Form>
              </div>
              <div className="w-3/5 px-5 py-8">
                <div>
                  <div className="text-center">
                    <img
                      src={require("../../../image/forgetpass.png")}
                      style={{ width: 600 }}
                      alt="logo"
                    />
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
