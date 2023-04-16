import React from "react";
import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./Pages/LoginPage/Login/Login";
import ForgotPassword from "./Pages/LoginPage/ForgotPassword/ForgotPassword";
import SetPassword from "./Pages/LoginPage/SetPassword/SetPassword";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/setpassword" element={<SetPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
