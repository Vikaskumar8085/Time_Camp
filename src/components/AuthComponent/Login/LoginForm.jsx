import React from "react";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button";
import {Link} from "react-router-dom";
import {useFormik} from "formik";
import InputPassword from "../../../common/Input/InputPassword";
import {validate} from "./validation";

function LoginForm({handleSubmit}) {
  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },
    // validate,
    onSubmit: (values) => {
      handleSubmit(values);
      formik.resetForm();
    },
  });

  return (
    <>
      <div className="login_form">
        <form onSubmit={formik.handleSubmit}>
          <Input
            name={"Email"}
            type="email"
            labelText="Email"
            placeholder="Please Enter Your Email "
            {...formik.getFieldProps("Email")}
            value={formik.values.Email}
          />
          {formik.touched.Email && formik.errors.Email ? (
            <div style={{color: "red", marginLeft: "5px"}}>
              {formik.errors.Email}
            </div>
          ) : null}
          <InputPassword
            name={"Password"}
            type={"password"}
            labelText="Password"
            {...formik.getFieldProps("Password")}
            placeholder="Please Enter Your Password "
          />
          {formik.touched.Password && formik.errors.Password ? (
            <div style={{color: "red", marginLeft: "5px"}}>
              {formik.errors.Password}
            </div>
          ) : null}
          <Link to={"/forget-password"} style={{}}>
            Forget Password
          </Link>
          <br />
          <Button className={"login-form-btn"} type="submit">
            Submit
          </Button>
          <div
            style={{display: "flex", justifyContent: "center", color: "white"}}
          >
            <p>or</p>
          </div>
        </form>

        <div className="login_footer">
          <h1>
            Don't have an account <Link to="/signup">sign up</Link>
          </h1>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
