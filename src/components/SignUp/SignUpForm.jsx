import React from "react";
import { Link } from "react-router-dom";
import Button from "../../common/Button";
import Input from "../../common/Input/Input";
import { useFormik } from "formik";

function SignUpForm() {
  const formik = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      term: Boolean,
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="register_form">
      <form onSubmit={formik.handleSubmit}>
        <Input
          labelText={"First Name"}
          type="text"
          placeholder="Please enter your name"
          {...formik.getFieldProps("FirstName")}
        />
        <Input
          labelText={"Last Name"}
          type="text"
          placeholder={"Please enter your last name"}
          {...formik.getFieldProps("LastName")}
        />
        <Input
          labelText={"Email"}
          type="Email"
          placeholder={"Please enter Your email"}
          {...formik.getFieldProps("Email")}
        />

        <Input
          labelText={"Password"}
          type="password"
          placeholder={"Please Enter your Password"}
          {...formik.getFieldProps("Password")}
        />

        <div style={{ display: "flex" }}>
          <input
            type="checkbox"
            {...formik.getFieldProps("term")}
            name="term"
            id=""
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
