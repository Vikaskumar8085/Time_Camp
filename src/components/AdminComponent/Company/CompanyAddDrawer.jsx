import {Box, Container, Drawer, Grid, Typography} from "@mui/material";
import {useFormik} from "formik";
import React from "react";
import Button from "../../../common/Button";
import Input from "../../../common/Input/Input";
import InputPassword from "../../../common/Input/InputPassword";

function CompanyAddDrawer({IsOpen, setOpen, CValue}) {
  const formik = useFormik({
    initialValues: {
      Company_Name: CValue ? CValue.Company_Name : "",
      Company_Email: CValue ? CValue.Company_Email : "",
      Address: CValue ? CValue.Address : "",
      Postal_Code: CValue ? CValue?.Postal_Code : "",
      Phone: CValue ? CValue?.Phone : "",
      Company_Logo: CValue ? CValue.Company_Logo : "",
      Employee_No: CValue ? CValue?.Employee_No : "",
      Established_date: CValue ? CValue?.Established_date : "",
      CompanyWesite: CValue ? CValue?.CompanyWesite : "",
      Tex_Number: CValue ? CValue?.Tex_Number : "",
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
                  Add Company
                </Typography>
              </div>
              {/* <Box component="form" sx={{ mt: 0 }}> */}
              <form>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Company_Name"
                      placeholder={"Please enter your FirstName"}
                      {...formik.getFieldProps("Company_Name")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Company Email"
                      placeholder={"Please enter your LastName"}
                      {...formik.getFieldProps("Company_Email")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText=" Address"
                      type="Address"
                      placeholder={"Please enter your Email"}
                      {...formik.getFieldProps("Address")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Postal Code"
                      placeholder={"Please enter your password"}
                      {...formik.getFieldProps("Postal_Code")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Phone "
                      placeholder={"Please enter your password"}
                      {...formik.getFieldProps("Phone")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Company Logo"
                      placeholder={"Please enter your password"}
                      {...formik.getFieldProps("Company_Logo")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Employee No"
                      placeholder={"Please enter your Employee No"}
                      {...formik.getFieldProps("Employee_No")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Established date"
                      placeholder={"Please enter your password"}
                      {...formik.getFieldProps("Established_date")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="CompanyWesite"
                      placeholder={"Please enter your password"}
                      {...formik.getFieldProps("CompanyWesite")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Tex_Number"
                      placeholder={"Please enter your password"}
                      {...formik.getFieldProps("Tex_Number")}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button type={"submit"}>Submit</Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Container>
        </div>
      </Drawer>
    </>
  );
}

export default CompanyAddDrawer;
