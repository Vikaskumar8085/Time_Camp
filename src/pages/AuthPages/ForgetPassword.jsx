import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import ForgetForm from "../../components/AuthComponent/ForgetPassword/ForgetForm";



function ForgetPassword() {
  const hsubmit = (value) => {
    console.log(value, "values");
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
