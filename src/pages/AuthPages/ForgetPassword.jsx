import React, { Suspense } from "react";
import { Container, Grid, Typography } from "@mui/material";
import ForgetForm from "../../components/AuthComponent/ForgetPassword/ForgetForm";
import Loader from "../../common/Loader";

function ForgetPassword() {
  const hsubmit = (value) => {
    console.log(value, "values");
  };

  return (
    <>
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </>
  );
}

export default ForgetPassword;
