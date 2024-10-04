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
import MilestoneForm from "./MilestoneForm";

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
        <MilestoneForm />
      </Drawer>
    </>
  );
}

export default TaskMilestoneDrawer;
