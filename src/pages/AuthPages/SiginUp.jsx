import React from "react";
import { Helmet } from "react-helmet-async";

import SignUpForm from "../../components/SignUp/SignUpForm";

const SiginUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <div className="Register_wrapper">
        <div className="Register_box">
          <div className="Register_title">
            <h1>Register</h1>
          </div>
          <SignUpForm />
        </div>
      </div>
    </>
  );
};

export default SiginUp;
