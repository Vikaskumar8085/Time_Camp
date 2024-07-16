import React from "react";
import { Helmet } from "react-helmet-async";
import LoginTitle from "../../components/Login/LoginTitle";
import LoginForm from "../../components/Login/LoginForm";

function Login() {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="login_wrapper">
        <LoginTitle />
        <LoginForm />
      </div>
    </>
  );
}

export default Login;
