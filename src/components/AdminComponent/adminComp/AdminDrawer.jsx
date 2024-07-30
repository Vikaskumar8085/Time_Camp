import React from "react";
import { Grid, Drawer, Box, Typography, Container } from "@mui/material";
import InputPassword from "../../../common/Input/InputPassword";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button";
import { useFormik } from "formik";
import { validate } from "./adminDrawerValidation";
function AdminDrawer({ IsOpen, setOpen }) {
  const formik = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      Email: "",
      Phone: "",
      Password: "",
      ConfirmPassword: "",
    },
    validate: validate,

    onSubmit: (value) => {
      console.log(value);
    },
  });
  return (
    <Drawer open={IsOpen} onClose={() => setOpen(false)} anchor={"right"}>
      <div className="ClientDrawer_box">
        <Container component="main" maxWidth="sm">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: 2,
            }}
          >
            <div className="clientDrawer_title">
              <Typography variant="h6" component={"h1"}>
                Add Admin
              </Typography>
            </div>
            {/* <Box component="form" sx={{ mt: 0 }}> */}
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Input
                    labelText="First Name"
                    placeholder={"Please enter your FirstName"}
                    {...formik.getFieldProps("FirstName")}
                  />
                  {formik.touched.FirstName && formik.errors.FirstName ? (
                    <div>{formik.errors.FirstName}</div>
                  ) : null}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input
                    labelText="Last Name"
                    placeholder={"Please enter your LastName"}
                    {...formik.getFieldProps("LastName")}
                  />
                  {formik.touched.LastName && formik.errors.LastName ? (
                    <div>{formik.errors.LastName}</div>
                  ) : null}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input
                    labelText="Phone"
                    placeholder={"Please enter your Phone"}
                    {...formik.getFieldProps("Phone")}
                  />
                  {formik.touched.Phone && formik.errors.Phone ? (
                    <div>{formik.errors.Phone}</div>
                  ) : null}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input
                    labelText="Email "
                    placeholder={"Please enter your Email"}
                    {...formik.getFieldProps("Email")}
                  />
                  {formik.touched.Email && formik.errors.Email ? (
                    <div>{formik.errors.Email}</div>
                  ) : null}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputPassword
                    labelText="Password"
                    type="Password"
                    placeholder={"Please enter your Password"}
                    {...formik.getFieldProps("Password")}
                  />
                  {formik.touched.Password && formik.errors.Password ? (
                    <div>{formik.errors.Password}</div>
                  ) : null}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputPassword
                    labelText="Confirm password"
                    type="password"
                    placeholder={"Please enter your Confirm password"}
                    {...formik.getFieldProps("ConfirmPassword")}
                  />
                  {formik.touched.ConfirmPassword &&
                  formik.errors.ConfirmPassword ? (
                    <div>{formik.errors.ConfirmPassword}</div>
                  ) : null}
                </Grid>
                <Grid item xs={12}>
                  <Button type={"submit"}>Submit</Button>
                </Grid>
              </Grid>
              {/* </Box> */}
            </form>
          </Box>
        </Container>
      </div>
    </Drawer>
  );
}

export default AdminDrawer;
