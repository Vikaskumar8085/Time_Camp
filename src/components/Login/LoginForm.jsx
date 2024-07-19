import React from "react";
import Input from "../../common/Input/Input";
import Button from "../../common/Button";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function LoginForm() {
  const [isPass, setIsPass] = React.useState(false);

  const formik = useFormik({
    initialValues: {
         Email: "",
      Password: "",
    },
    
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  // const typevalue = isPass ? "password" : "text";
  // const Icon = isPass ?<FaEye /> :<FaEyeSlash/>
  return (
    <>
      <div className="login_form">
        {/* <i onClick={()=>{setIsPass(!isPass)}}> {Icon}</i> */}
        <form  onSubmit={formik.handleSubmit}>
          <Input
            name={"Email"}
            type="email"
            labelText="Email"
            placeholder="Please Enter Your Email "
            {...formik.getFieldProps('Email')}
          />
          <Input
            name={"Password"}
            type={"password"}
            labelText="Password"
            {...formik.getFieldProps('Password')}
            placeholder="Please Enter Your Password "
          />
          <Button type="submit">Submit</Button>
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
