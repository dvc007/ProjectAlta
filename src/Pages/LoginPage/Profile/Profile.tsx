import React from "react";

export default function Profile() {
  return (
    <div className="px-6 py-6 mx-auto h-96">
      <div className="w-full px-3 mt-0 ">
        <div className=" relative z-20 flex min-w-0 break-words rounded-2xl border-0 border-solid bg-white bg-clip-border ml-96 justify-around items-center text-center content-center">
          <div className="">
            <img
              className="w-40 h-40 mx-auto rounded-full"
              src={require("./../../../image/Avatar.png")}
              alt=""
            />
            <div className="font-medium dark:text-white mt-7">
              <div className="text-sm  font-bold text-gray-700 dark:text-gray-400">
                Lê Quỳnh Ái Vân
              </div>
            </div>
          </div>

          <div className="form">
            <form className="bg-white  px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
                  Tên người dùng
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                />

                <label className="mt-6 block text-gray-700 text-sm font-bold mb-2 text-left">
                  Số điện thoại
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                />

                <label className="mt-6  block text-gray-700 text-sm font-bold mb-2 text-left">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                />
              </div>
            </form>
          </div>

          <div className="">
            <form className="bg-white  px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
                  Tên đăng nhập
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                />

                <label className="mt-6 block text-gray-700 text-sm font-bold mb-2 text-left">
                  Mật khẩu
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                />

                <label className="mt-6  block text-gray-700 text-sm font-bold mb-2 text-left">
                  Vai trò
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
