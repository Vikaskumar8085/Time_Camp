import { Drawer } from "@mui/material";
import React from "react";
import { Grid, Box, Typography, Container } from "@mui/material";
import InputPassword from "../../../common/Input/InputPassword";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button";
import { useFormik } from "formik";
import { validate } from "./clientdrawerValidation";

function ClientDrawer({ setOpen, IsOpen }) {
  const formik = useFormik({
    initialValues: {
      Client_Name: "",
      Company_Name: "",
      Email: "",
      Phone: "",
      Address: "",
      PostalCode: "",
      GstNumber: "",
    },
    validate: validate,

    onSubmit: (value) => {
      console.log(value);
    },
  });
  return (
    <>
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
                  Add Client
                </Typography>
              </div>
              {/* <Box component="form" sx={{ mt: 0 }}> */}
              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Company Name"
                      placeholder={"Please enter your Company Name"}
                      {...formik.getFieldProps("Company_Name")}
                    />
                    {formik.touched.Company_Name &&
                    formik.errors.Company_Name ? (
                      <div>{formik.errors.Company_Name}</div>
                    ) : null}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Client Name"
                      placeholder={"Please enter your Client Name"}
                      {...formik.getFieldProps("Client_Name")}
                    />
                    {formik.touched.Client_Name && formik.errors.Client_Name ? (
                      <div>{formik.errors.Client_Name}</div>
                    ) : null}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Email Address"
                      type="email"
                      placeholder={"Please enter your Email"}
                      {...formik.getFieldProps("Email")}
                    />
                    {formik.touched.Email && formik.errors.Email ? (
                      <div>{formik.errors.Email}</div>
                    ) : null}
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText=" Address"
                      type="text"
                      placeholder={"Please enter your Address"}
                      {...formik.getFieldProps("Address")}
                    />
                    {formik.touched.Address && formik.errors.Address ? (
                      <div>{formik.errors.Address}</div>
                    ) : null}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText=" Postal Code"
                      type="text"
                      {...formik.getFieldProps("PostalCode")}
                      placeholder={"Please enter your Postal Code"}
                    />
                    {formik.touched.PostalCode && formik.errors.PostalCode ? (
                      <div>{formik.errors.PostalCode}</div>
                    ) : null}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText=" Phone"
                      type="text"
                      {...formik.getFieldProps("Phone")}
                      placeholder={"Please enter your Phone Number"}
                    />
                    {formik.touched.Phone && formik.errors.Phone ? (
                      <div>{formik.errors.Phone}</div>
                    ) : null}
                  </Grid>
                  <Grid item xs={12}>
                    <Input
                      labelText=" GST Number"
                      type="text"
                      placeholder={"Please enter your Gst number"}
                      {...formik.getFieldProps("GstNumber")}
                    />
                    {formik.touched.GstNumber && formik.errors.GstNumber ? (
                      <div>{formik.errors.GstNumber}</div>
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
    </>
  );
}

export default ClientDrawer;
