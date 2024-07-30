import React, { lazy } from "react";
import { useFormik } from "formik";
import { validate } from "./forgetpasswordvalidation";
const Input = lazy(() => import("../../../common/Input/Input"));
const Button = lazy(() => import("../../../common/Button"));

function ForgetForm({ hsubmit }) {
  const formik = useFormik({
    initialValues: {
      Email: "",
    },
    validate: validate,
    onSubmit: (values) => {
     hsubmit(values)
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Input
          placeholder={"Please Enter Email"}
          {...formik.getFieldProps("Email")}
        />
        {formik.touched.Email && formik.errors.Email ? (
          <div style={{ color: "red" }}>{formik.errors.Email}</div>
        ) : null}
        <Button type={"submit"} style={{width:"100%"}}>submit</Button>
      </form>
    </>
  );
}

export default ForgetForm;
