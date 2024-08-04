import React, { lazy, Suspense, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch } from "react-redux";
import { registerauth } from "../../apiservice/auth";
import toast from "react-hot-toast";
import { setLoader } from "../../redux/slices/loaderSlice";
import { useNavigate } from "react-router-dom";
import Loader from "../../common/Loader";
const SignUpForm = lazy(() =>
  import("../../components/AuthComponent/SignUp/SignUpForm")
);

const SiginUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    console.log(values);
    try {
      dispatch(setLoader(true));
      const response = await registerauth(values);
      console.log(response, "asdfalsdfjl");
      if (response?.data?.success) {
        dispatch(setLoader(false));
        toast.success(response?.data?.message);
        navigate("/login");
      } else {
        console.log(response);
      }
      dispatch(setLoader(false));
      navigate("/login");
    } catch (error) {
      dispatch(setLoader(false));
      toast.error(error?.response?.data?.message);
      navigate("/signup");
    }
  };

  // check authentication
  const isAuth = () => {
    if (sessionStorage.getItem("token")) {
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    isAuth();
  }, [0]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Helmet>
          <title>Sign Up</title>
        </Helmet>
        <div className="Register_wrapper">
          <div className="Register_box">
            <div className="Register_RightSide">
              <div className="Register_title">
                <h1>Register</h1>
              </div>
              <SignUpForm hsubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default SiginUp;
