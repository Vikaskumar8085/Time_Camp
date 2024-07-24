import React from "react";
import { Link } from "react-router-dom";
import Button from "../../common/Button";
import Input from "../../common/Input/Input";
import { useFormik } from "formik";

function SignUpForm({ handleSubmit }) {
  const formik = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      term: "",
    },

    onSubmit: (values) => {
      handleSubmit(values);
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
        <Input
          labelText={"Last Name"}
          type="text"
          placeholder={"Please enter your last name"}
          autocomplete="off"
          {...formik.getFieldProps("LastName")}
        />
        <Input
          labelText={"Email"}
          type="Email"
          autocomplete="off"
          placeholder={"Please enter Your email"}
          {...formik.getFieldProps("Email")}
        />

        <Input
          labelText={"Password"}
          type="password"
          autocomplete="off"
          placeholder={"Please Enter your Password"}
          {...formik.getFieldProps("Password")}
        />

        <div style={{ display: "flex" }}>
          <input
            autocomplete="off"
            type="checkbox"
            {...formik.getFieldProps("term")}
            name="term"
            required
          />
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
  );
}

export default SignUpForm;
