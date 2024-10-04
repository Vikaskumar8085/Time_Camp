import React, {useState, useEffect} from "react";
import {TextField, Grid, Typography, Container, MenuItem} from "@mui/material";
import axios from "axios";
import Button from "../../../common/Button";

const TaskForm = () => {
  const [task, setTask] = useState({
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
    Attachment: null, // Changed to null for file upload
    Description: "",
  });

  const [projects, setProjects] = useState([]);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/api/projects"); // Replace with your API endpoint
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    const fetchResources = async () => {
      try {
        const response = await axios.get("/api/resources"); // Replace with your API endpoint
        setResources(response.data);
      } catch (error) {
        console.error("Error fetching resources:", error);
      }
    };

    fetchProjects();
    fetchResources();
  }, []);

  const handleChange = (e) => {
    const {name, type, value, checked, files} = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in task) {
      formData.append(key, task[key]);
    }

    try {
      const response = await axios.post("/api/tasks", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Task created:", response.data);
      // Optionally reset the form or handle the response as needed
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Typography variant="h4" gutterBottom>
          Create New Task
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Task Name"
              name="Task_Name"
              value={task.Task_Name}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Project Code"
              name="Project_Code"
              value={task.Project_Code}
              onChange={handleChange}
              required
              fullWidth
            >
              {projects.map((project) => (
                <MenuItem key={project.id} value={project.code}>
                  {project.code}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Milestone Name"
              name="Milestone_Name"
              value={task.Milestone_Name}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Resource Email"
              name="Resource_Email"
              value={task.Resource_Email}
              onChange={handleChange}
              required
              fullWidth
            >
              {resources.map((resource) => (
                <MenuItem key={resource.id} value={resource.email}>
                  {resource.email}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Task Description"
              name="Task_description"
              value={task.Task_description}
              onChange={handleChange}
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
              value={task.Start}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="date"
              label="End Date"
              name="End"
              value={task.End}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Estimated Time (in hours)"
              name="Estimated_time"
              value={task.Estimated_time}
              onChange={handleChange}
              fullWidth
              placeholder="e.g., 2.5 for 2 hours 30 minutes"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="date"
              label="Due Date"
              name="Due_date"
              value={task.Due_date}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Completed Time"
              name="Completed_time"
              value={task.Completed_time}
              onChange={handleChange}
              fullWidth
              placeholder="Completed time in hours"
            />
          </Grid>
          <Grid item xs={12}>
            <input
              type="file"
              name="Attachment"
              onChange={handleChange}
              required // Make optional based on your requirements
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              name="Description"
              value={task.Description}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
        </Grid>
        <Button>Create Task</Button>
      </form>
    </Container>
  );
};

export default TaskForm;
