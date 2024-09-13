import { Box } from "@mui/system";
import React from "react";
import Button from "../../../common/Button";
import "./ChangePass.scss";
import InputPassword from "../../../common/Input/InputPassword";
import { Grid } from "@mui/material";
import { useFormik } from "formik";

function ChangePass({ handlechangePassword }) {
  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
    },

    onSubmit: (values) => {
      console.log(values, "newfsd");
      handlechangePassword(values);
    },
  });

  return (
    <>
      <Grid container spacing={1}>
        <Grid item sm={6} md={6} xl={6} xxl={6} xs={12}>
          <div className="ChangePass_Wrapper">
            <form onSubmit={formik.handleSubmit}>
              <InputPassword
                labelText={"Old Password"}
                placeholder={"Old Password"}
                {...formik.getFieldProps("oldPassword")}
              />
              <InputPassword
                labelText={"New Password"}
                {...formik.getFieldProps("newPassword")}
                placeholder={"New Password"}
              />
              <Button className="change_password_btn" type={"submit"}>
                Submit
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default ChangePass;
