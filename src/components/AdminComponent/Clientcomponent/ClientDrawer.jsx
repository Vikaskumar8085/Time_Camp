import { Drawer } from "@mui/material";
import React from "react";
import { Grid, Box, Typography, Container } from "@mui/material";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button";
import { useFormik } from "formik";
import { validate } from "./clientdrawerValidation";
import { useDispatch } from "react-redux";
import { SetSingleClientsFunc } from "../../../redux/slices/AdminSlice/adminSlice";

function ClientDrawer({
  setOpen,
  IsOpen,
  ClienthandleSubmit,
  CItems,
  ClientEditHandle,
}) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      Company_Name: CItems !== null ? CItems?.Company_Name : "",
      Client_Name: CItems !== null ? CItems?.Client_Name : "",
      Client_Email: CItems !== null ? CItems?.Client_Email : "",
      Client_Phone: CItems !== null ? CItems?.Client_Phone : "",
      Client_Postal_Code: CItems !== null ? CItems?.Client_Postal_Code : "",
      Client_Address: CItems !== null ? CItems?.Client_Address : "",
      GstNumber: CItems !== null ? CItems?.GstNumber : "",
    },
    validate: validate,
    onSubmit: async (value) => {
      // if (CItems !== null) {
        // ClientEditHandle(value);
      // } else {
        ClienthandleSubmit(value);
        formik.resetForm();
      // }
    },
  });
  return (
    <>
      <Drawer
        open={IsOpen}
        onClose={() => {
          setOpen(false);
          // dispatch(SetSingleClientsFunc(null));
        }}
        anchor={"right"}
      >
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
                <Typography variant="h6" component={"h1"}>Add Client
                  {/* {CItems !== null ? "Edit Client" : "Add Client"} */}
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
                      <div style={{ color: "red", marginLeft: "5px" }}>
                        {formik.errors.Company_Name}
                      </div>
                    ) : null}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Client Name"
                      placeholder={"Please enter your Client Name"}
                      {...formik.getFieldProps("Client_Name")}
                    />
                    {formik.touched.Client_Name && formik.errors.Client_Name ? (
                      <div style={{ color: "red", marginLeft: "5px" }}>
                        {formik.errors.Client_Name}
                      </div>
                    ) : null}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Client Email"
                      type="email"
                      placeholder={"Please enter your Client_Email"}
                      {...formik.getFieldProps("Client_Email")}
                    />
                    {formik.touched.Client_Email &&
                    formik.errors.Client_Email ? (
                      <div style={{ color: "red", marginLeft: "5px" }}>
                        {formik.errors.Client_Email}
                      </div>
                    ) : null}
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText=" Client Address"
                      type="text"
                      placeholder={"Please enter your Client Address"}
                      {...formik.getFieldProps("Client_Address")}
                    />
                    {formik.touched.Client_Address &&
                    formik.errors.Client_Address ? (
                      <div style={{ color: "red", marginLeft: "5px" }}>
                        {formik.errors.Client_Address}
                      </div>
                    ) : null}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Client_Phone"
                      type="text"
                      {...formik.getFieldProps("Client_Phone")}
                      placeholder={"Please enter your Postal Code"}
                    />
                    {formik.touched.Client_Phone &&
                    formik.errors.Client_Phone ? (
                      <div style={{ color: "red", marginLeft: "5px" }}>
                        {formik.errors.Client_Phone}
                      </div>
                    ) : null}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText=" Client_Postal_Code"
                      type="text"
                      {...formik.getFieldProps("Client_Postal_Code")}
                      placeholder={"Please enter your Client Postal Code"}
                    />
                    {formik.touched.Client_Postal_Code &&
                    formik.errors.Client_Postal_Code ? (
                      <div style={{ color: "red", marginLeft: "5px" }}>
                        {formik.errors.Client_Postal_Code}
                      </div>
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
                      <div style={{ color: "red", marginLeft: "5px" }}>
                        {formik.errors.GstNumber}
                      </div>
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
