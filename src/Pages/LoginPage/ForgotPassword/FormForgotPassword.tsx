import React from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

export default function FormForgotPassword() {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const [form] = Form.useForm();
  const navigate = useNavigate();
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
      <div className="h-4/5">
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
                  <Input className="block w-80 mx-auto" />

                  <Form.Item {...tailLayout} className="mt-12 mr-44">
                    <div className="flex justify-center items-center">
                      <Button
                        htmlType="submit"
                        className=" text-amber-600 border-amber-400 mr-5 "
                      >
                        Hủy
                      </Button>
                      <Button
                        htmlType="submit"
                        className="bg-amber-600 text-white "
                      >
                        Tiếp tục
                      </Button>
                    </div>
                  </Form.Item>
                </Form>
              </div>
              <div className="w-3/5 px-5 py-8">
                <div>
                  <div className="text-center">
                    <img
                      src={require("../../../image/forgetpass.png")}
                      style={{ width: 700 }}
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
