import React from "react";
import { Helmet } from "react-helmet-async";
import LoginTitle from "../../components/Login/LoginTitle";
import LoginForm from "../../components/Login/LoginForm";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="login_wrapper">
        <div className="login_box">

          <div className="login_title">
            <h1>Login</h1>
          </div>

          <div className="login_form">
            <form action="">
              <div className="mb-3">
                <label htmlFor="Email" > Email</label>
                <input type="text" placeholder="Please Enter your Name" />
              </div>
              <div className="mb-3">
                <label htmlFor="Password" > Password</label>
                <input type="text" placeholder="Please Enter your Password" />
              </div>
              <div className="mb-3">
                <button type="submit" >submit</button>              </div>
            </form>
            <div className="login_footer">
              <h1>if your not register please <Link to="/signup">click here</Link></h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
