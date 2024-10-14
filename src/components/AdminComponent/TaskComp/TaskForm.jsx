import React, {useEffect} from "react";
import {TextField, Grid, Typography, Container, MenuItem} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from "yup";
import Button from "../../../common/Button";
import {fetchallresources} from "../../../apiservice/admin/employeeapiservice";
import {createtaskapicall} from "../../../apiservice/admin/taskapiservice";

const TaskForm = () => {
  const [resources, setResources] = React.useState([]);

  const fetchResourcesHandler = async () => {
    try {
      const response = await fetchallresources();
      if (response.success) {
        setResources(response.result);
      }
    } catch (error) {
      console.error(error?.message);
    }
  };

  useEffect(() => {
    fetchResourcesHandler();
  }, []);

  const formik = useFormik({
    initialValues: {
      Task_Name: "",
      Project_Code: "",
      Milestone_Name: "",
      Priority: "LOW",
      Start: "",
      End: "",
      Status: "IN_PROGRESS",
      Estimated_time: "",
      Due_date: "",
      Completed_time: "",
      Resource_Email: "",
      Task_description: "",
      Attachment: null,
      Description: "",
    },
    validationSchema: Yup.object({
      Task_Name: Yup.string().required("Required"),
      Project_Code: Yup.string().required("Required"),
      Milestone_Name: Yup.string().required("Required"),
      Resource_Email: Yup.string().required("Required"),
      Task_description: Yup.string().required("Required"),
      Start: Yup.date().required("Required"),
      End: Yup.date().required("Required"),
      Estimated_time: Yup.number().required("Required"),
      Due_date: Yup.date().required("Required"),
      Completed_time: Yup.number(),
      Description: Yup.string(),
    }),
    onSubmit: async (values) => {
      const formData = new FormData();
      for (const key in values) {
        formData.append(key, values[key]);
      }
      try {
        const response = await createtaskapicall(formData);
        // Handle response as needed
      } catch (error) {
        console.error("Error creating task:", error);
      }
    },
  });

  return (
    <Container maxWidth="sm">
      <form onSubmit={formik.handleSubmit}>
        <Typography variant="h4" gutterBottom>
          Create New Task
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Task Name"
              name="Task_Name"
              value={formik.values.Task_Name}
              onChange={formik.handleChange}
              error={
                formik.touched.Task_Name && Boolean(formik.errors.Task_Name)
              }
              helperText={formik.touched.Task_Name && formik.errors.Task_Name}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Project Code"
              name="Project_Code"
              value={formik.values.Project_Code}
              onChange={formik.handleChange}
              error={
                formik.touched.Project_Code &&
                Boolean(formik.errors.Project_Code)
              }
              helperText={
                formik.touched.Project_Code && formik.errors.Project_Code
              }
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Milestone Name"
              name="Milestone_Name"
              value={formik.values.Milestone_Name}
              onChange={formik.handleChange}
              error={
                formik.touched.Milestone_Name &&
                Boolean(formik.errors.Milestone_Name)
              }
              helperText={
                formik.touched.Milestone_Name && formik.errors.Milestone_Name
              }
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Resource Email"
              name="Resource_Email"
              value={formik.values.Resource_Email}
              onChange={formik.handleChange}
              error={
                formik.touched.Resource_Email &&
                Boolean(formik.errors.Resource_Email)
              }
              helperText={
                formik.touched.Resource_Email && formik.errors.Resource_Email
              }
              required
              fullWidth
            >
              {resources.map((item) => (
                <MenuItem key={item?.Email} value={item?.Email}>
                  {item?.Email}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Task Description"
              name="Task_description"
              value={formik.values.Task_description}
              onChange={formik.handleChange}
              error={
                formik.touched.Task_description &&
                Boolean(formik.errors.Task_description)
              }
              helperText={
                formik.touched.Task_description &&
                formik.errors.Task_description
              }
              required
              multiline
              rows={4}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="date"
              label="Start Date"
              name="Start"
              value={formik.values.Start}
              onChange={formik.handleChange}
              error={formik.touched.Start && Boolean(formik.errors.Start)}
              helperText={formik.touched.Start && formik.errors.Start}
              InputLabelProps={{shrink: true}}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="date"
              label="End Date"
              name="End"
              value={formik.values.End}
              onChange={formik.handleChange}
              error={formik.touched.End && Boolean(formik.errors.End)}
              helperText={formik.touched.End && formik.errors.End}
              InputLabelProps={{shrink: true}}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Estimated Time (in hours)"
              name="Estimated_time"
              value={formik.values.Estimated_time}
              onChange={formik.handleChange}
              error={
                formik.touched.Estimated_time &&
                Boolean(formik.errors.Estimated_time)
              }
              helperText={
                formik.touched.Estimated_time && formik.errors.Estimated_time
              }
              fullWidth
              placeholder="e.g., 2.5 for 2 hours 30 minutes"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="date"
              label="Due Date"
              name="Due_date"
              value={formik.values.Due_date}
              onChange={formik.handleChange}
              error={formik.touched.Due_date && Boolean(formik.errors.Due_date)}
              helperText={formik.touched.Due_date && formik.errors.Due_date}
              InputLabelProps={{shrink: true}}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Completed Time"
              name="Completed_time"
              value={formik.values.Completed_time}
              onChange={formik.handleChange}
              fullWidth
              placeholder="Completed time in hours"
            />
          </Grid>
          <Grid item xs={12}>
            <input
              type="file"
              name="Attachment"
              onChange={(event) => {
                formik.setFieldValue(
                  "Attachment",
                  event.currentTarget.files[0]
                );
              }}
              required // Make optional based on your requirements
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              name="Description"
              value={formik.values.Description}
              onChange={formik.handleChange}
              fullWidth
            />
          </Grid>
        </Grid>
        <Button type="submit">Create Task</Button>
      </form>
    </Container>
  );
};

export default TaskForm;
