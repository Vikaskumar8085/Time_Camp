import React from "react";
import Input from "../../common/Input/Input";
import Button from "../../common/Button";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function LoginForm() {
  const [isPass, setIsPass] = React.useState(false);

  // const typevalue = isPass ? "password" : "text";
  // const Icon = isPass ?<FaEye /> :<FaEyeSlash/>
  return (
    <>
      <div className="login_form">
        {/* <i onClick={()=>{setIsPass(!isPass)}}> {Icon}</i> */}
        <form action="">
          <Input
            name={"Email"}
            type="email"
            labelText="Email"
            placeholder="Please Enter Your Email "
          />
          <Input
            name={"Password"}
            type={"password"}
            labelText="Password"
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
