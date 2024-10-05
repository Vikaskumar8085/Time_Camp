import React, { useState } from "react";
import { Suspense, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { setLoader } from "../../redux/slices/loaderSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { setLogin } from "../../redux/slices/authslices/authslice";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import Loader from "../../common/Loader";
import LoginTitle from "../../components/AuthComponent/Login/LoginTitle";
import LoginForm from "../../components/AuthComponent/Login/LoginForm";
import { GoogleLoginAuth, loginauth } from "../../apiservice/auth";
import GoogleIcons from "../../assest/icons/loginIcons/google.png";
import Button from "../../common/Button";
import { loginResourseapicall } from "../../apiservice/auth/resourseservice";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };
  // handle submit
  const handleSubmit = async (values) => {
    if (role === "Employee") {
      try {
        dispatch(setLoader(true));
        const response = await loginResourseapicall(values);
        if (response.success) {
          setRole("");
          dispatch(setLoader(false));
          console.log(response.data);
          navigate("/Employee-dashboard");
        } else {
          dispatch(setLoader(false));
          setRole("");
          console.log(response.error);
        }
      } catch (error) {
        console.log(error?.message);
        dispatch(setLoader(false));
      }
    } else if (role === "Contractor") {
      try {
        dispatch(setLoader(true));
        const response = await loginResourseapicall(values);
        if (response.success) {
          setRole("");
          dispatch(setLoader(false));
          navigate("/Contractor-dashboard");
          console.log(response.data);
        } else {
          dispatch(setLoader(false));
          setRole("");
          console.log(response.data);
        }
      } catch (error) {
        console.log(error?.message);
      }
    } else {
      try {
        dispatch(setLoader(true));
        const response = await loginauth(values);
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
    }
  };

  // check authentication
  const isAuth = () => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      dispatch(setLoader(true));
      const response = await GoogleLoginAuth(tokenResponse);
      if (response?.data?.success) {
        dispatch(setLogin(response?.data?.message));
        dispatch(setLoader(false));
        navigate("/dashboard");
      }
    },
  });

  useEffect(() => {
    isAuth();
  }, [0]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <div className="login_wrapper">
          <div className="login_box">
            <LoginTitle />
            <LoginForm handleSubmit={handleSubmit} />
            <Button onClick={() => login()} className={"btn-google-auto"}>
              <img src={GoogleIcons} alt="no-image" />
              <span> Login with google </span>
            </Button>

            <div>
              <input
                type="radio"
                id="employee"
                name="role"
                value="Employee"
                onChange={handleRoleChange}
              />
              <label htmlFor="employee">Employee</label>
            </div>
            <div>
              <input
                type="radio"
                id="contractor"
                name="role"
                value="Contractor"
                onChange={handleRoleChange}
              />
              <label htmlFor="contractor">Contractor</label>
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
}

export default Login;
