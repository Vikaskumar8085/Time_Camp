import React, {useState} from "react";
import {TextField, Typography, Container, Grid, MenuItem} from "@mui/material";
import Button from "../../../common/Button";

const TimesheetForm = () => {
  const [project, setProject] = useState(""); // Project ID or name
  const [taskDescription, setTaskDescription] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [hours, setHours] = useState(0); // Default to 0

  const handleSubmit = (event) => {
    event.preventDefault();

    const timesheetData = {
      project,
      task_description: taskDescription,
      Description: description,
      start_time: startTime,
      hours,
    };

    console.log("Timesheet Data Submitted:", timesheetData);

    // Reset the form
    setProject("");
    setTaskDescription("");
    setDescription("");
    setStartTime(null);
    setHours(0);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Timesheet Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Project"
              value={project}
              onChange={(e) => setProject(e.target.value)}
              fullWidth
              required
              select
            >
              {/* Replace with actual project options from your data */}
              <MenuItem value={1}>Project 1</MenuItem>
              <MenuItem value={2}>Project 2</MenuItem>
              <MenuItem value={3}>Project 3</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Task Description"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              fullWidth
              multiline
              rows={4}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              multiline
              rows={2}
              inputProps={{maxLength: 5000}} // Limit description length
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Start Time"
              type="datetime-local"
              value={startTime ? startTime.substring(0, 16) : ""}
              onChange={(e) => setStartTime(e.target.value)}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Hours"
              type="number"
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              fullWidth
              required
              inputProps={{min: 0}}
            />
          </Grid>
          <Grid item xs={12}>
            <Button>Submit</Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default TimesheetForm;
