import { Box, Container, Drawer, Grid, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import Button from "../../../common/Button";
import Input from "../../../common/Input/Input";
import InputPassword from "../../../common/Input/InputPassword";

function CompanyAddDrawer({ IsOpen, setOpen }) {
  const formik = useFormik({
    initialValues: {
      Company_Name: "",
      Company_Email: "",
      Address: "",
      Postal_Code: "",
      Phone: "",
      Company_Logo: "",
      Employee_No: "",
      Established_date: "",
      CompanyWesite: "",
      Tex_Number: "",
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
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Company Email"
                      placeholder={"Please enter your LastName"}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText=" Address"
                      type="email"
                      placeholder={"Please enter your Email"}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Postal Code"
                      placeholder={"Please enter your password"}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Phone "
                      placeholder={"Please enter your password"}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Company Logo"
                      placeholder={"Please enter your password"}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Employee No"
                      placeholder={"Please enter your password"}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Established date"
                      placeholder={"Please enter your password"}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="CompanyWesite"
                      placeholder={"Please enter your password"}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="  Tex_Number"
                      placeholder={"Please enter your password"}
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
