import { useFormik } from "formik";
import React from "react";
import { lazy } from "react";
import { validate } from "./cpassvalidation";
const InputPassword = lazy(() => import("../../../common/Input/InputPassword"));
const Button = lazy(() => import("../../../common/Button"));

function CPForm({ ChangePasswordHandleSubmit }) {
  const formik = useFormik({
    initialValues: {
      NewPassword: "",
      ConfirmPassword: "",
    },
    validate: validate,
    onsubmit: (values) => {},
  });

  return (
    <>
      {" "}
      <form onSubmit={formik.handleSubmit}>
        <InputPassword
          placeholder={"Please Enter Your New Password"}
          {...formik.getFieldProps("NewPassword")}
        />
        {formik.touched.NewPassword && formik.errors.NewPassword ? (
          <div style={{ color: "red" }}>{formik.errors.NewPassword}</div>
        ) : null}
        <InputPassword
          placeholder={"Please Enter Your Confirm Password"}
          {...formik.getFieldProps("ConfirmPassword")}
        />
        {formik.touched.ConfirmPassword && formik.errors.ConfirmPassword ? (
          <div style={{ color: "red" }}>{formik.errors.ConfirmPassword}</div>
        ) : null}
        <Button type={"submit"}>submit</Button>
      </form>
    </>
  );
}

export default CPForm;
