import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import InputPassword from "../../common/Input/InputPassword";
import Button from "../../common/Button";

function ForgetPassword() {
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

                <form>
                  <InputPassword placeholder={"Please Enter Email"} />
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

export default ForgetPassword;
