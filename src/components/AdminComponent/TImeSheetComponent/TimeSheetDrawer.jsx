import { Box, Container, Drawer, Grid, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button";
import moment from "moment";
import { useDispatch } from "react-redux";
import { setSingleTimesheet } from "../../../redux/slices/Timesheet/TimesheetSlice";

function TimeSheetDrawer({
  IsOpen,
  setIsOpen,
  AddTimesheets,
  TSItems,
  updatetimesheetservice,
}) {
  const dispatch = useDispatch();

  // Define regex patterns
  const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/; // HH:MM format
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD format

  // Custom validation function
  const validate = (values) => {
    const errors = {};

    if (!values.ProjectName) {
      errors.ProjectName = "Project Name is required";
    }

    if (!values.Company) {
      errors.Company = "Company is required";
    }

    if (!values.Task_Description) {
      errors.Task_Description = "Task Description is required";
    }

    if (!values.Description) {
      errors.Description = "Description is required";
    }

    if (!values.Bill_Status) {
      errors.Bill_Status = "Bill Status is required";
    }

    if (!values.Resource) {
      errors.Resource = "Resource is required";
    }

    if (!values.StartTime || !timeRegex.test(values.StartTime)) {
      errors.StartTime = "Start Time is required and must be in HH:MM format";
    }

    if (!values.Endtime || !timeRegex.test(values.Endtime)) {
      errors.Endtime = "End Time is required and must be in HH:MM format";
    }

    if (!values.Approvel) {
      errors.Approvel = "Approval is required";
    }

    if (!values.CreateDate || !dateRegex.test(values.CreateDate)) {
      errors.CreateDate =
        "Create Date is required and must be in YYYY-MM-DD format";
    }

    if (!values.Approvel_Date || !dateRegex.test(values.Approvel_Date)) {
      errors.Approvel_Date =
        "Approval Date is required and must be in YYYY-MM-DD format";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      ProjectName: TSItems ? TSItems?.ProjectName : "",
      Company: TSItems ? TSItems?.Company : "",
      Task_Description: TSItems ? TSItems?.Task_Description : "",
      Description: TSItems ? TSItems?.Description : "",
      Bill_Status: TSItems ? TSItems?.Bill_Status : "",
      Resource: TSItems ? TSItems?.Resource : "",
      StartTime: TSItems ? TSItems?.StartTime : "",
      Endtime: TSItems ? TSItems?.Endtime : "",
      Approvel: TSItems ? TSItems?.Approvel : "",
      CreateDate:
        TSItems && TSItems?.CreateDate
          ? moment(TSItems?.CreateDate).format("YYYY-MM-DD")
          : "",
      Approvel_Date:
        TSItems && TSItems?.Approvel_Date
          ? moment(TSItems?.Approvel_Date).format("YYYY-MM-DD")
          : "",
      Hours: TSItems ? TSItems?.Hours : moment().format("HH:MM"),
    },
    validate,
    onSubmit: (values) => {
      if (TSItems === null) {
        AddTimesheets(values);
        formik.resetForm();
      } else {
        updatetimesheetservice(values);
      }
    },
  });

  return (
    <Drawer
      anchor="right"
      open={IsOpen}
      onClose={() => {
        setIsOpen(false);
        dispatch(setSingleTimesheet(null));
      }}
    >
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
            Add TimeSheet
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
                <Button type={"submit"}>Add Employee</Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </Drawer>
  );
}

export default TimeSheetDrawer;
