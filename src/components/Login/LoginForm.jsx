import React from "react";
import Input from "../../common/Input/Input";
import Button from "../../common/Button";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import google from "../../assest/google.png";
import InputPassword from "../../common/Input/InputPassword";

function LoginForm({ handleSubmit }) {
  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },
    onSubmit: (values) => {
      handleSubmit(values);
      formik.resetForm();
    },
  });
  // const typevalue = isPass ? "password" : "text";
  // const Icon = isPass ?<FaEye /> :<FaEyeSlash/>
  return (
    <>
      <div className="login_form">
        {/* <i onClick={()=>{setIsPass(!isPass)}}> {Icon}</i> */}
        <form onSubmit={formik.handleSubmit}>
          <Input
            name={"Email"}
            type="email"
            labelText="Email"
            placeholder="Please Enter Your Email "
            {...formik.getFieldProps("Email")}
          />
          <InputPassword
            name={"Password"}
            type={"password"}
            labelText="Password"
            {...formik.getFieldProps("Password")}
            placeholder="Please Enter Your Password "
          />
          <Link
            to={"/forget-password"}
            style={{
              float: "right",
              margin: "5px 0px",
              textDecoration: "none ",
            }}
          >
            Forget Password
          </Link>
          <br />  
          <Button type="submit">Submit</Button>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p>or</p>
          </div>
        </form>

        <div className="login_footer">
          <h1>
            if your not register please <Link to="/signup">click here</Link>
          </h1>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
