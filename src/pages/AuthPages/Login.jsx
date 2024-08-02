import React, { useState } from "react";
import { Suspense, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { setLoader } from "../../redux/slices/loaderSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { setLogin } from "../../redux/slices/authslices/authslice";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import Loader from "../../common/Loader";
import LoginTitle from "../../components/AuthComponent/Login/LoginTitle";
import LoginForm from "../../components/AuthComponent/Login/LoginForm";
import { GoogleLoginAuth, loginauth } from "../../apiservice/auth";
import Button from "../../common/Button";
import axios from "axios";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // handle submit
  const handleSubmit = async (values) => {
    try {
      dispatch(setLoader(true));
      const response = await loginauth(values);
      console.log(response, "response");
      if (response?.data?.success) {
        dispatch(setLoader(false));
        dispatch(setLogin(response?.data?.data));
        toast.success(response?.data?.message);
        window.location.href = "/dashboard";
      } else {
        toast.error(response?.data?.message);
      }
    } catch (error) {
      dispatch(setLoader(false));
      toast.error(error?.response?.data?.message);
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

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      dispatch(setLoader(true));
      const response = await GoogleLoginAuth(tokenResponse);
      console.log(response,"response")
      if (response?.data?.success) {
        console.log(response?.data?.message);
        dispatch(setLoader(false));
        window.location.href = "/dashboard";
      }
    },
  });

  useEffect(() => {
    isAuth();
  }, [0]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <div className="login_wrapper">
          <div className="login_box">
            <LoginTitle />
            <LoginForm handleSubmit={handleSubmit} />
            <Button onClick={() => login()}>Google Login</Button>
          </div>
        </div>
      </Suspense>
    </>
  );
}

export default Login;
