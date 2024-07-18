import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Button from "../../common/Button";
import Input from "../../common/Input/Input";

const SiginUp = () => {
const  handleSubmit=(e)=>{
    e.preventDefault();

  }
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
            <form onSubmit={handleSubmit}>
              <Input
                labelText={"First Name"}
                type="text"
                placeholder="Please enter your name"
              />
              <Input
                labelText={"Last Name"}
                type="text"
                placeholder={"Please enter your last name"}
              />
              <Input
                labelText={"Email"}
                type="Email"
                placeholder={"Please enter Your email"}
              />

              <Input
                labelText={"Password"}
                type="password"
                placeholder={"Please Enter your Password"}
              />

              <div style={{ display: "flex" }}>
                <input type="checkbox" name="" id="" />
                &nbsp;
                <p className="mx-2">
                  I agree with all <Link to="">Term & Condition</Link>
                </p>
              </div>

              <Button type={"submit"}>Submit</Button>
            </form>

            <div className="register_footer">
              <h1>
                Alerady Register !please <Link to="/login">click here</Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiginUp;
