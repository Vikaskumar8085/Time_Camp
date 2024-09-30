import React, {useState} from "react";
import {Suspense, useEffect} from "react";
import {Helmet} from "react-helmet-async";
import {setLoader} from "../../redux/slices/loaderSlice";
import {useDispatch, useSelector} from "react-redux";
import toast from "react-hot-toast";
import {setLogin} from "../../redux/slices/authslices/authslice";
import {useNavigate} from "react-router-dom";
import {useGoogleLogin} from "@react-oauth/google";
import Loader from "../../common/Loader";
import LoginTitle from "../../components/AuthComponent/Login/LoginTitle";
import LoginForm from "../../components/AuthComponent/Login/LoginForm";
import {GoogleLoginAuth, loginauth} from "../../apiservice/auth";
import GoogleIcons from "../../assest/icons/loginIcons/google.png";
import Button from "../../common/Button";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const employeeRef = React.useRef(null);
  const contractorRef = React.useRef(null);

  // handle submit
  const handleSubmit = async (values) => {
    if (employeeRef === "Employee" || contractorRef === "Contractor") {
      // e.preventDefault();
      const selectedTypes = [];
      if (employeeRef.current.checked) {
        selectedTypes.push("Employee");
      }
      if (contractorRef.current.checked) {
        selectedTypes.push("Contractor");
      }
      console.log("Selected Types:", selectedTypes);
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

            <label>
              <input type="checkbox" ref={employeeRef} value="employee" />
              Employee
            </label>
            <br />
            <label>
              <input type="checkbox" ref={contractorRef} value="contractor" />
              Contractor
            </label>
            <br />

            <Button onClick={() => login()} className={"btn-google-auto"}>
              <img src={GoogleIcons} alt="no-image" />
              <span> Login with google </span>
            </Button>
          </div>
        </div>
      </Suspense>
    </>
  );
}

export default Login;
