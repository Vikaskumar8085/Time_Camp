import React from "react";
import { Link } from "react-router-dom";
import Input from "../../../common/Input/Input";
import { useFormik } from "formik";
import { validate } from "./signupvalidation";
import InputPassword from "../../../common/Input/InputPassword";
import Button from "../../../common/Button";
function SignUpForm({ hsubmit }) {
  const formik = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      Term: "",
    },
    validate,
    onSubmit: (values) => {
      hsubmit(values);
      formik.resetForm();
    },
  });

  return (
    <div className="register_form">
      <form onSubmit={formik.handleSubmit}>
        <Input
          labelText={"First Name"}
          type="text"
          placeholder="Please enter your name"
          autocomplete="off"
          {...formik.getFieldProps("FirstName")}
        />
        {formik.touched.FirstName && formik.errors.FirstName ? (
          <div style={{ color: "red", marginTop: "5px" }}>
            {formik.errors.FirstName}
          </div>
        ) : null}
        <Input
          labelText={"Last Name"}
          type="text"
          placeholder={"Please enter your last name"}
          autocomplete="off"
          {...formik.getFieldProps("LastName")}
        />
        {formik.touched.LastName && formik.errors.LastName ? (
          <div style={{ color: "red", marginTop: "5px" }}>
            {formik.errors.LastName}
          </div>
        ) : null}
        <Input
          labelText={"Email"}
          type="Email"
          autocomplete="off"
          placeholder={"Please enter Your email"}
          {...formik.getFieldProps("Email")}
        />
        {formik.touched.Email && formik.errors.Email ? (
          <div style={{ color: "red", marginTop: "5px" }}>
            {formik.errors.Email}
          </div>
        ) : null}
        <InputPassword
          labelText={"Password"}
          type="password"
          autocomplete="off"
          placeholder={"Please Enter your Password"}
          {...formik.getFieldProps("Password")}
        />
        {formik.touched.Password && formik.errors.Password ? (
          <div style={{ color: "red", marginTop: "5px" }}>
            {formik.errors.Password}
          </div>
        ) : null}
        <div style={{ display: "flex" }}>
          <input
            autocomplete="off"
            type="checkbox"
            {...formik.getFieldProps("Term")}
            name="Term"
          />
          &nbsp;
          <p className="mx-2">
            I agree with all <Link to="">Term & Condition</Link>
          </p>
        </div>

        {formik.touched.Term && formik.errors.Term ? (
          <div style={{ color: "red", marginTop: "5px" }}>
            {formik.errors.Term}
          </div>
        ) : null}
        <Button type={"submit"}>Submit</Button>
      </form>

      <div className="register_footer">
        <h1>
          Alerady Register !please <Link to="/login">click here</Link>
        </h1>
      </div>
    </div>
  );
}

export default SignUpForm;
