import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { firebaseConfig } from "./../../../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLocalService } from "./../../../service/localService";
import { setUserLogin } from "./../../../Reduxtoolkit/userSlice";
import { UserData } from "./../../../service/localService";

export default function FormLogin() {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const [form] = Form.useForm();
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [passwordIncorrect, setPasswordIncorrect] = useState(false);
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const onFinish = (values: any) => {
    db.ref("users")
      .push({ values })
      .then((result) => {
        result.ref.once("value").then((snapshot) => {
          const userData = snapshot.val() as unknown;
          message.success("Login Success :((");
          dispatch(setUserLogin(userData as UserData));
          userLocalService.set(userData as UserData);
          setTimeout(() => {
            navigate("/profile");
          }, 1000);
        });
      })
      .catch((err) => {});
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    const passwordError = errorInfo.errorFields.find(
      (field: any) => field.name[0] === "password"
    );
    setShowForgotPassword(!!passwordError);
    setPasswordIncorrect(true);
  };

  const handleForgotPasswordClicks = () => {
    setTimeout(() => {
      navigate("/forgotpassword");
    }, 1000);
  };
  const handleForgotPasswordClick = () => {
    setTimeout(() => {
      navigate("/forgotpassword");
    }, 1000);
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
                  className="mt-5 flex flex-col"
                  form={form}
                  {...layout}
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    label="Tên đăng nhập *"
                    name="username"
                    rules={[
                      {
                        required: true,
                        // message: "Please input your email!",
                      },
                    ]}
                  >
                    <Input placeholder="Nhập tên đăng nhập" />
                  </Form.Item>

                  <Form.Item
                    label="Mật khẩu *"
                    name="password"
                    rules={[
                      {
                        required: true,
                        // message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password placeholder="Nhập mật khẩu" />
                  </Form.Item>
                  {passwordIncorrect ? (
                    <label className=" text-orange-400">
                      * Sai mật khẩu hoặc tên đăng nhập
                    </label>
                  ) : (
                    <a
                      className=" text-orange-400 mr-24 "
                      href="/#"
                      onClick={handleForgotPasswordClicks}
                    >
                      * Quên mật khẩu
                    </a>
                  )}
                  <Form.Item {...tailLayout}>
                    <Button
                      htmlType="submit"
                      className="bg-amber-600 text-white mt-2 "
                    >
                      Đăng nhập
                    </Button>
                  </Form.Item>

                  {showForgotPassword && (
                    <a
                      className=" text-orange-400 ml-52 "
                      href="/#"
                      onClick={handleForgotPasswordClick}
                    >
                      Quên mật khẩu *
                    </a>
                  )}
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
                    <h3 className="text-2xl text-orange-400 font-normal">
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
