import React, { useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import InputPassword from "../../common/Input/InputPassword";
import Button from "../../common/Button";

function ChangePassword() {
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
                  Change Password
                </Typography>
                <form action="">
                  <InputPassword
                    placeholder={"Please Enter Your Old Password"}
                  />
                  <InputPassword
                    placeholder={"Please Enter Your New Password"}
                  />
                  <Button type={"submit"}>submit</Button>
                </form>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default ChangePassword;
