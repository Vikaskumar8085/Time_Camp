import React from "react";
import {Drawer, Grid, Typography} from "@mui/material";
import {useFormik} from "formik";
import Button from "../../../common/Button";
import Input from "../../../common/Input/Input";

function TaskDrawer({IsOpen, setOpen}) {
  const formik = useFormik({
    initialValues: {
      file: null,
    },
    onSubmit: (values) => {
      console.log("File uploaded:", values.file);
      setOpen(false);
    },
  });
  return (
    <>
      <Drawer anchor="right" open={IsOpen} onClose={() => setOpen(false)}>
        <div className="task_box">
          <Typography variant="h6">Upload Task</Typography>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item md={12} lg={12} sm={12} xs={12}>
              <Input
                type="file"
                name="file"
                onChange={(event) => {
                  formik.setFieldValue("file", event.currentTarget.files[0]);
                }}
              />
              <Button type="submit">Add Task</Button>
            </Grid>
          </Grid>
        </form>
      </Drawer>
    </>
  );
}

export default TaskDrawer;
