import {Drawer, TextField} from "@mui/material";
import React from "react";
import {Grid, Box, Typography, Container} from "@mui/material";
import InputPassword from "../../../common/Input/InputPassword";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button";
import {useFormik} from "formik";
import moment from "moment";
import {setSingleEmployee} from "../../../redux/slices/Employee/EmployeeSlice";
import {useDispatch} from "react-redux";

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
      FirstName: ESItems !== null ? ESItems?.FirstName : "",
      LastName: ESItems !== null ? ESItems?.LastName : "",
      Email: ESItems !== null ? ESItems?.Email : "",
      JoiningDate:
        ESItems && ESItems.JoiningDate
          ? moment(ESItems.JoiningDate).format("YYYY-MM-DD")
          : "",

      Address: ESItems !== null ? ESItems?.Address : "",
      Phone: ESItems !== null ? ESItems?.Phone : "",
      Designation: ESItems !== null ? ESItems?.Designation : "",
      // Profile_Image: "",
      // managerId: "",
    },
    onSubmit: async (values) => {
      const formattedDate = moment(values.JoiningDate).format("DD/MM/YYYY");

      const data = {
        ...values,
        JoiningDate: formattedDate,
      };

      if (ESItems !== null) {
        UpdateEmployeeHandle(data);
      } else {
        EmployeeHandleSubmit(data);
      }
    },
  });
  // const managers = [
  //   {id: 1, name: "Manager 1"},
  //   {id: 2, name: "Manager 2"},
  //   {id: 3, name: "Manager 3"},
  // ];
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
                      {...formik.getFieldProps("FirstName")}
                      placeholder={"Please enter your FirstName"}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Employee LastName"
                      {...formik.getFieldProps("LastName")}
                      placeholder={"Please enter your LastName"}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Employee Email"
                      {...formik.getFieldProps("Email")}
                      type="email"
                      placeholder={"Please enter your Email"}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Employee Phone"
                      type="text"
                      {...formik.getFieldProps("Phone")}
                      placeholder={"Please enter your Phone"}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Employee JoiningDate"
                      type="date"
                      {...formik.getFieldProps("Joining_Date")}
                      placeholder={"Please enter your Joining_Date"}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Employee Designation"
                      type="text"
                      {...formik.getFieldProps("Designation")}
                      placeholder={"Please enter your Designation"}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Employee Address"
                      type="text"
                      {...formik.getFieldProps("Address")}
                      placeholder={"Please enter your Address"}
                    />
                  </Grid>
                  {/* <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Profile Image"
                      onChange={(event) => {
                        formik.setFieldValue(
                          "Profile_Image",
                          event.currentTarget.files[0]
                        );
                      }}
                      type="file"
                      placeholder={"Please enter your  Image"}
                    />
                  </Grid> */}
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Employee Password"
                      {...formik.getFieldProps("Password")}
                      placeholder={"Please enter Employee Password"}
                    />
                  </Grid>
                  {/* <Grid item xs={12} sm={6}>
                    <TextField
                      select
                      {...formik.getFieldProps("managerId")}
                      placeholder="Select Manager *"
                    >
                      <option value="">
                        <em>Select Manager</em>
                      </option>
                      {managers.map((manager) => (
                        <option key={manager.id} value={manager.id}>
                          {manager.name}
                        </option>
                      ))}
                    </TextField>
                  </Grid> */}
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
