import React, { Suspense } from "react";
import { Container, Grid, Typography } from "@mui/material";
import ForgetForm from "../../components/AuthComponent/ForgetPassword/ForgetForm";
import { setLoader } from "../../redux/slices/loaderSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { ForgetPasswordUser } from "../../apiservice/auth";
import Loader from "../../common/Loader";
import Lottie from "react-lottie-player";
import ForgetGif from "../../assest/lollitejson/ForgetPassword.json";
function ForgetPassword() {
  const dispatch = useDispatch();

  const hsubmit = async (value) => {
    try {
      dispatch(setLoader(true));
      const response = await ForgetPasswordUser(value);
      if (response) {
        console.log(response);
        dispatch(setLoader(false));
      }
    } catch (error) {
      dispatch(setLoader(false));
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <>
      <Suspense fallback={<Loader />}>
        <div className="forget-password-wrapper">
          <Container>
            <div className={"forget_password_container"}>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6} md={6} xl={6} xxl={6}>
                  <div className="forget-password-anmiation">
                    <Lottie loop animationData={ForgetGif} play />
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} xl={6} xxl={6}>
                  <div className="forget_password_box">
                    <div className="forget_password_heading">
                      <h1>Forget Password</h1>
                      <p>
                        enter your email and we'll send you a link to reset your
                        password
                      </p>
                    </div>
                    <ForgetForm hsubmit={hsubmit} />
                  </div>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </Suspense>
    </>
  );
}

export default ForgetPassword;
