import { Container, Box, Grid, Typography, Drawer } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import Button from "../../../common/Button";
import Input from "../../../common/Input/Input";
import { validateForm } from "./ProjectValidation";

function ProjectDrawer({ IsOpen, setIsOpen }) {
  const formik = useFormik({
    initialValues: {
      Project_Name: "",
      Project_Code: "",
      Client_Name: "",
      Start_Date: "",
      End_Date: "",
      Project_Type: "",
      Project_Managers: "",
      Role: "",
      Employee: "",
    },
    validate: validateForm,
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    },
  });

  return (
    <>
      <Drawer anchor="right" open={IsOpen} onClose={() => setIsOpen(false)}>
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
              Add Project
            </Typography>

            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Input
                    labelText="Project Name"
                    {...formik.getFieldProps("ProjectName")}
                    placeholder={"Please enter your Project Name"}
                  />
                  {formik.touched.ProjectName && formik.errors.ProjectName && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginTop: "4px",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      {formik.errors.ProjectName}
                    </div>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input
                    labelText="Company"
                    {...formik.getFieldProps("Company")}
                    placeholder={"Please enter your Company"}
                  />
                  {formik.touched.Company && formik.errors.Company && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginTop: "4px",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      {formik.errors.Company}
                    </div>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input
                    labelText="Task Description"
                    {...formik.getFieldProps("Task_Description")}
                    placeholder={"Please enter your Task Description"}
                  />
                  {formik.touched.Task_Description &&
                    formik.errors.Task_Description && (
                      <div
                        style={{
                          color: "red",
                          fontSize: "12px",
                          marginTop: "4px",
                          fontFamily: "Arial, sans-serif",
                        }}
                      >
                        {formik.errors.Task_Description}
                      </div>
                    )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input
                    labelText="Description"
                    {...formik.getFieldProps("Description")}
                    placeholder={"Please enter your Description"}
                  />
                  {formik.touched.Description && formik.errors.Description && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginTop: "4px",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      {formik.errors.Description}
                    </div>
                  )}
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Input
                    labelText={"Bill Status"}
                    {...formik.getFieldProps("Bill_Status")}
                    placeholder={"Please enter Bill Status"}
                  />
                  {formik.touched.Bill_Status && formik.errors.Bill_Status && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginTop: "4px",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      {formik.errors.Bill_Status}
                    </div>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input
                    labelText={"Resource"}
                    {...formik.getFieldProps("Resource")}
                    placeholder={"Please enter Resource"}
                  />
                  {formik.touched.Resource && formik.errors.Resource && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginTop: "4px",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      {formik.errors.Resource}
                    </div>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input
                    labelText="StartTime"
                    type="time"
                    {...formik.getFieldProps("StartTime")}
                    placeholder={"Please enter your StartTime"}
                  />
                  {formik.touched.StartTime && formik.errors.StartTime && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginTop: "4px",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      {formik.errors.StartTime}
                    </div>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input
                    labelText="Endtime"
                    type="time"
                    {...formik.getFieldProps("Endtime")}
                    placeholder={"Please enter your Endtime"}
                  />
                  {formik.touched.Endtime && formik.errors.Endtime && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginTop: "4px",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      {formik.errors.Endtime}
                    </div>
                  )}
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Input
                    labelText={"Approvel"}
                    {...formik.getFieldProps("Approvel")}
                    placeholder={"Please enter Approvel"}
                  />
                  {formik.touched.Approvel && formik.errors.Approvel && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginTop: "4px",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      {formik.errors.Approvel}
                    </div>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input
                    labelText={"Create Date"}
                    type="date"
                    {...formik.getFieldProps("CreateDate")}
                    placeholder={"Please enter your Date"}
                  />
                  {formik.touched.CreateDate && formik.errors.CreateDate && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginTop: "4px",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      {formik.errors.CreateDate}
                    </div>
                  )}
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Input
                    labelText={"Approvel_Date"}
                    {...formik.getFieldProps("Approvel_Date")}
                    type="date"
                    placeholder={"Please Enter Approvel date"}
                  />
                  {formik.touched.Approvel_Date &&
                    formik.errors.Approvel_Date && (
                      <div
                        style={{
                          color: "red",
                          fontSize: "12px",
                          marginTop: "4px",
                          fontFamily: "Arial, sans-serif",
                        }}
                      >
                        {formik.errors.Approvel_Date}
                      </div>
                    )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input
                    labelText="Hours"
                    type="time"
                    disabled
                    {...formik.getFieldProps("Hours")}
                    placeholder={"Please enter your Hours"}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button type={"submit"}>Add Project</Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Container>
      </Drawer>
    </>
  );
}

export default ProjectDrawer;
