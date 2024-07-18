import React from "react";
import { Helmet } from "react-helmet-async";

import { Link } from "react-router-dom";
import Input from "../../common/Input/Input";
import LoginTitle from "../../components/Login/LoginTitle";
import LoginForm from "../../components/Login/LoginForm";

function Login() {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="login_wrapper">
        <div className="login_box">
          <LoginTitle />

          <LoginForm />
        </div>
      </div>
    </>
  );
}

export default Login;
