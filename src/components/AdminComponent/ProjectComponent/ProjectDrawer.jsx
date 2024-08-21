import { Container, Box, Grid, Typography, Drawer } from "@mui/material";
import { useFormik } from "formik";
import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import Button from "../../../common/Button";
import Input from "../../../common/Input/Input";
import { setSingelProject } from "../../../redux/slices/ProjectSlice/projectslice";
import projectvalidation from "./ProjectValidation";

function ProjectDrawer({
  IsOpen,
  setIsOpen,
  PhandleSubmit,
  PItems,
  EPhandleSubmit,
}) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      Project_Name: PItems ? PItems.Project_Name : "",
      Project_Code: PItems ? PItems?.Project_Code : "",
      Client_Name: PItems ? PItems?.Client_Name : "",
      Start_Date: PItems ? moment(PItems.Start_Date).format("MM/DD/YYYY") : "",
      End_Date: PItems ? moment(PItems?.End_Date).format("MM/DD/YYYY") : "",
      Project_Type: PItems ? PItems?.Project_Type : "",
      Project_Managers: PItems ? PItems?.Project_Managers : "",
      Role: PItems ? PItems?.Role : "",
      Employee: PItems ? PItems?.Employee : "",
    },
    validate: projectvalidation,
    onSubmit: (values) => {
      try {
        if (PItems !== null) {
          EPhandleSubmit(values);
        } else {
          PhandleSubmit(values);
        }
      } catch (error) {
        console.log(error?.message, "errorm");
      }
    },
  });
  const handleClose = () => {
    setIsOpen(false);
    dispatch(setSingelProject(null));
  };

  return (
    <Drawer anchor="right" open={IsOpen} onClose={handleClose}>
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: 2,
            p: 2,
          }}
        >
          <Typography variant="h6" component={"h1"}>
            {PItems !== null ? "Edit Project " : "Add Project"}
          </Typography>

          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Input
                  labelText="Project Name"
                  {...formik.getFieldProps("Project_Name")}
                  placeholder={"Please enter your Project Name"}
                />
                {formik.touched.Project_Name && formik.errors.Project_Name && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "4px",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    {formik.errors.Project_Name}
                  </div>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Input
                  labelText="Project Code"
                  {...formik.getFieldProps("Project_Code")}
                  placeholder={"Please enter your Project Code"}
                />
                {formik.touched.Project_Code && formik.errors.Project_Code && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "4px",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    {formik.errors.Project_Code}
                  </div>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Input
                  labelText="Client Name"
                  {...formik.getFieldProps("Client_Name")}
                  placeholder={"Please enter your Client Name"}
                />
                {formik.touched.Client_Name && formik.errors.Client_Name && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "4px",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    {formik.errors.Client_Name}
                  </div>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Input
                  labelText="Start Date"
                  type="date"
                  {...formik.getFieldProps("Start_Date")}
                  placeholder={"Please enter your Start Date"}
                />
                {formik.touched.Start_Date && formik.errors.Start_Date && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "4px",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    {formik.errors.Start_Date}
                  </div>
                )}
              </Grid>

              <Grid item xs={12} sm={6}>
                <Input
                  labelText="End Date"
                  type="date"
                  {...formik.getFieldProps("End_Date")}
                  placeholder={"Please enter End Date"}
                />
                {formik.touched.End_Date && formik.errors.End_Date && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "4px",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    {formik.errors.End_Date}
                  </div>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Input
                  labelText="Project Type"
                  {...formik.getFieldProps("Project_Type")}
                  placeholder={"Please enter Project Type"}
                />
                {formik.touched.Project_Type && formik.errors.Project_Type && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "4px",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    {formik.errors.Project_Type}
                  </div>
                )}
              </Grid>

              <Grid item xs={12} sm={6}>
                <Input
                  labelText="Project Managers"
                  type="text"
                  {...formik.getFieldProps("Project_Managers")}
                  placeholder={"Please enter your Project Managers"}
                />
                {formik.touched.Project_Managers &&
                  formik.errors.Project_Managers && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginTop: "4px",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      {formik.errors.Project_Managers}
                    </div>
                  )}
              </Grid>

              <Grid item xs={12} sm={6}>
                <Input
                  labelText="Role"
                  {...formik.getFieldProps("Role")}
                  placeholder={"Please enter Role"}
                />
                {formik.touched.Role && formik.errors.Role && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "4px",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    {formik.errors.Role}
                  </div>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Input
                  labelText="Employee"
                  type="text"
                  {...formik.getFieldProps("Employee")}
                  placeholder={"Please enter your Employee Name"}
                />
                {formik.touched.Employee && formik.errors.Employee && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "4px",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    {formik.errors.Employee}
                  </div>
                )}
              </Grid>

              <Grid item xs={12}>
                <Button type="submit">Add Project</Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </Drawer>
  );
}

export default ProjectDrawer;
