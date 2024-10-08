import {Box, Container, Drawer, Grid, Typography} from "@mui/material";
import {useFormik} from "formik";
import React from "react";
import Button from "../../../common/Button";
import Input from "../../../common/Input/Input";

function CompanyAddDrawer({IsOpen, setOpen, CValue}) {
  const formik = useFormik({
    initialValues: {
      Company_Name: CValue ? CValue.Company_Name : "",
      Company_Email: CValue ? CValue.Company_Email : "",
      Address: CValue ? CValue.Address : "",
      Postal_Code: CValue ? CValue.Postal_Code : "",
      Phone: CValue ? CValue.Phone : "",
      Company_Logo: null, // Start with no file
      Employee_No: CValue ? CValue.Employee_No : "",
      Established_date: CValue ? CValue.Established_date : "",
      Company_Website: CValue ? CValue.Company_Website : "",
      Tax_Number: CValue ? CValue.Tax_Number : "",
    },
    onSubmit: (values) => {
      console.log(values);
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
              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Company Name"
                      placeholder="Please enter the company name"
                      {...formik.getFieldProps("Company_Name")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Company Email"
                      placeholder="Please enter the company email"
                      {...formik.getFieldProps("Company_Email")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Address"
                      placeholder="Please enter the company address"
                      {...formik.getFieldProps("Address")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Postal Code"
                      placeholder="Please enter the postal code"
                      {...formik.getFieldProps("Postal_Code")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Phone"
                      placeholder="Please enter the phone number"
                      {...formik.getFieldProps("Phone")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <div>
                      <label>Company Logo</label>
                      {/* Display existing logo if available */}
                      {CValue?.Company_Logo && (
                        <img
                          src={CValue.Company_Logo}
                          alt="Company Logo"
                          style={{width: 100, height: 100, marginBottom: 8}}
                        />
                      )}
                      {/* File input for uploading a new logo */}
                      <input
                        type="file"
                        onChange={(event) => {
                          const file = event.currentTarget.files[0];
                          formik.setFieldValue("Company_Logo", file);
                          // Create a URL for the selected file
                          if (file) {
                            const fileURL = URL.createObjectURL(file);
                            formik.setFieldValue("Company_Logo_URL", fileURL); // Store the URL for display
                          }
                        }}
                      />
                      {/* Display the selected file name */}
                      {formik.values.Company_Logo && (
                        <div>
                          <span>
                            Selected File: {formik.values.Company_Logo.name}
                          </span>
                        </div>
                      )}
                      {/* Display the uploaded file as an image if it's selected */}
                      {formik.values.Company_Logo && (
                        <img
                          src={URL.createObjectURL(formik.values.Company_Logo)}
                          alt="Selected Logo"
                          style={{width: 100, height: 100, marginTop: 8}}
                        />
                      )}
                    </div>
                  </Grid> 
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Employee No"
                      placeholder="Please enter the employee number"
                      {...formik.getFieldProps("Employee_No")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Established Date"
                      type="date"
                      placeholder="Please enter the established date"
                      {...formik.getFieldProps("Established_date")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Company Website"
                      placeholder="Please enter the company website"
                      {...formik.getFieldProps("Company_Website")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Tax Number"
                      placeholder="Please enter the tax number"
                      {...formik.getFieldProps("Tax_Number")}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button type="submit">Submit</Button>
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
