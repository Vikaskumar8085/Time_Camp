import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SiginUp = () => {
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

          <div className="register_form">
            <form action="">
              <div className="mb-3">
                <label htmlFor="Name" > Name</label>
                <input type="text" placeholder="Please Enter your Name" />
              </div>
              <div className="mb-3">
                <label htmlFor="Email" > Email</label>
                <input type="text" placeholder="Please Enter your Email" />
              </div>
              <div className="mb-3">
                <label htmlFor="Password" > Password</label>
                <input type="text" placeholder="Please Enter your Password" />
              </div>

              <div className="mb-3">
                <button type="submit" >submit</button>
              </div>

            </form>

            <div className="register_footer">
              <h1>Alerady Register !please <Link to="/login">click here</Link></h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiginUp;
