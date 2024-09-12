import { Drawer } from "@mui/material";
import React from "react";
import { Grid, Box, Typography, Container } from "@mui/material";
import InputPassword from "../../../common/Input/InputPassword";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button";
import { useFormik } from "formik";
import moment from "moment";
import { setSingleEmployee } from "../../../redux/slices/Employee/EmployeeSlice";
import { useDispatch } from "react-redux";

function EmployeeDrawer({
  setOpen,
  IsOpen,
  EmployeeHandleSubmit,
  ESItems,
  UpdateEmployeeHandle,
}) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      Employee_FirstName: ESItems !== null ? ESItems?.Employee_FirstName : "",
      Employee_LastName: ESItems !== null ? ESItems?.Employee_LastName : "",
      Employee_Email: ESItems !== null ? ESItems?.Employee_Email : "",
      Employee_JoiningDate:
        ESItems && ESItems.Employee_JoiningDate
          ? moment(ESItems.Employee_JoiningDate).format("YYYY-MM-DD")
          : "",

      Employee_Address: ESItems !== null ? ESItems?.Employee_Address : "",
      Employee_Phone: ESItems !== null ? ESItems?.Employee_Phone : "",
      Employee_Designation:
        ESItems !== null ? ESItems?.Employee_Designation : "",
    },
    onSubmit: async (values) => {
      const formattedDate = moment(values.Employee_JoiningDate).format(
        "DD/MM/YYYY"
      );

      const data = {
        ...values,
        Employee_JoiningDate: formattedDate,
      };

      if (ESItems !== null) {
        UpdateEmployeeHandle(data);
      } else {
        EmployeeHandleSubmit(data);
      }
    },
  });
  return (
    <>
      <Drawer
        open={IsOpen}
        onClose={() => {
          setOpen(false);
          dispatch(setSingleEmployee(null));
        }}
        anchor={"right"}
      >
        <div className="EmployeeDrawer">
          <Container component="main" maxWidth="sm">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                mt: 2,
              }}
            >
              <div className="">
                <Typography variant="h6" component={"h1"}>
                  {ESItems === null ? "Add Employee" : "Edit Employee"}
                </Typography>
              </div>
              {/* <Box component="form" sx={{ mt: 0 }}> */}
              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Employee FirstName"
                      {...formik.getFieldProps("Employee_FirstName")}
                      placeholder={"Please enter your FirstName"}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Employee LastName"
                      {...formik.getFieldProps("Employee_LastName")}
                      placeholder={"Please enter your LastName"}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Employee Email"
                      {...formik.getFieldProps("Employee_Email")}
                      type="email"
                      placeholder={"Please enter your Email"}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Employee Phone"
                      type="text"
                      {...formik.getFieldProps("Employee_Phone")}
                      placeholder={"Please enter your password"}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Employee JoiningDate"
                      type="date"
                      {...formik.getFieldProps("Employee_JoiningDate")}
                      placeholder={"Please enter your password"}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Employee Designation"
                      type="text"
                      {...formik.getFieldProps("Employee_Designation")}
                      placeholder={"Please enter your password"}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Employee Address"
                      type="text"
                      {...formik.getFieldProps("Employee_Address")}
                      placeholder={"Please enter your password"}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Employee Password"
                      {...formik.getFieldProps("Employee_LastName")}
                      placeholder={"Please enter Employee Password"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type={"submit"}>
                      {ESItems !== null ? "Update Employee" : "Add Employee"}
                    </Button>
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

export default EmployeeDrawer;
