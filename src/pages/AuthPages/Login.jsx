import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import LoginTitle from "../../components/Login/LoginTitle";
import LoginForm from "../../components/Login/LoginForm";
import { loginauth } from "../../apiservice/auth";
import { setLoader } from "../../redux/slices/loaderSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { setLogin } from "../../redux/slices/authslices/authslice";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // handle submit
  const handleSubmit = async (values) => {
    try {
      dispatch(setLoader(true));
      const response = await loginauth(values);
      console.log(response, "asdfalsdfjl");
      if (response?.data?.success) {
        dispatch(setLoader(false));
        dispatch(setLogin(response?.data?.data));
        toast.success(response?.data?.message);
        navigate("/dashboard");
      } else {
        console.log(response);
      }
    } catch (error) {
      dispatch(setLoader(false));
      toast.error(error?.response?.data?.message);
      console.log(error.response);
      navigate("/login");
    }
  };

  // handle submit

  // check authentication
  const isAuth = () => {
    if (sessionStorage.getItem("isLoginStatus")) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    isAuth();
  }, [0]);

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="login_wrapper">
        <div className="login_box">
          <LoginTitle />

          <LoginForm handleSubmit={handleSubmit} />
        </div>
      </div>
    </>
  );
}

export default Login;
