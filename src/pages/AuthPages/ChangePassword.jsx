import React, { lazy, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import InputPassword from "../../common/Input/InputPassword";
import Button from "../../common/Button";
const CPForm = lazy(() => import("../../components/AuthComponent/ChangePassword/CPForm"));

function ChangePassword() {
  const ChangePasswordHandleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="CPassword_wrapper">
        <Container>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <div className="CPassword_box">
                <Typography
                  variant="h6"
                  sx={{
                    margin: "10px 0px",
                    fontSize: "15px",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  Reset Password
                </Typography>

                <CPForm
                  ChangePasswordHandleSubmit={ChangePasswordHandleSubmit}
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default ChangePassword;
