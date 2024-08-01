import React, { Suspense } from "react";
import { Container, Grid, Typography } from "@mui/material";
import ForgetForm from "../../components/AuthComponent/ForgetPassword/ForgetForm";
import { setLoader } from "../../redux/slices/loaderSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { ForgetPasswordUser } from "../../apiservice/auth";

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
      <div className="forget-password-wrapper">
        <Container>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <div className="forget-password-box">
                <Typography
                  variant="h6"
                  sx={{
                    margin: "10px 0px",
                    fontSize: "15px",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  Forget Password
                </Typography>

                <ForgetForm hsubmit={hsubmit} />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default ForgetPassword;
