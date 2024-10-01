import {
  Drawer,
  Grid,
  Typography,
  Checkbox,
  MenuItem,
  FormControl,
  FormControlLabel,
  Select,
  InputLabel,
} from "@mui/material";
import React from "react";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button";
import {useFormik} from "formik";

function TaskMilestoneDrawer({MisOpen, setisOpen}) {
  const formik = useFormik({
    initialValues: {
      Name: "",
      Description: "",
      Project: "",
      Start_date: null,
      End_date: null,
      Is_completed: false,
    },
    onSubmit: (values) => {
      // Handle form submission
      console.log("Form submitted:", values);
      setisOpen(false);
    },
  });
  return (
    <>
      <Drawer anchor="right" open={MisOpen} onClose={() => setisOpen(false)}>
        <div className="task_box">
          <Typography variant="h6">Create Mile Stone</Typography>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2} style={{padding: "16px"}}>
            <Grid item xs={12}>
              <Input
                fullWidth
                labelText="Name"
                name="Name"
                value={formik.values.Name}
                placeholder="Name"
                onChange={formik.handleChange}
                error={formik.touched.Name && Boolean(formik.errors.Name)}
                helperText={formik.touched.Name && formik.errors.Name}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                fullWidth
                labelText="Description"
                placeholder={"Description"}
                name="Description"
                value={formik.values.Description}
                onChange={formik.handleChange}
                multiline
                rows={4}
                error={
                  formik.touched.Description &&
                  Boolean(formik.errors.Description)
                }
                helperText={
                  formik.touched.Description && formik.errors.Description
                }
              />
            </Grid>
            <Grid item xs={12}>
              {/* <FormControl fullWidth required>
                <InputLabel>Project</InputLabel>
                <Select
                  name="Project"
                  value={formik.values.Project}
                  onChange={formik.handleChange}
                > */}
                  {/* {projects.map((project) => (
                    <MenuItem key={project._id} value={project._id}>
                      {project.name}
                    </MenuItem>
                  ))} */}
                {/* </Select>
              </FormControl> */}
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                fullWidth
                labelText="Start Date"
                placeholder={"Start Date"}
                type="date"
                name="Start_date"
                InputLabelProps={{shrink: true}}
                value={formik.values.Start_date}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                fullWidth
                labelText="End Date"
                type="date"
                name="End_date"
                InputLabelProps={{shrink: true}}
                value={formik.values.End_date}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="Is_completed"
                    checked={formik.values.Is_completed}
                    onChange={formik.handleChange}
                  />
                }
                label="Is Completed"
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Create Task
              </Button>
            </Grid>
          </Grid>
        </form>
      </Drawer>
    </>
  );
}

export default TaskMilestoneDrawer;
