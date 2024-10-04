import React, {useState, useEffect} from "react";
import {
  TextField,
  Grid,
  Typography,
  Container,
  Checkbox,
  FormControlLabel,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import Button from "../../../common/Button";

const MilestoneForm = () => {
  const [milestone, setMilestone] = useState({
    Project_Code: "",
    Task_Name: "",
    Milestone_Name: "",
    Description: "",
    Start_date: "",
    End_date: "",
    Is_completed: false,
  });

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch project codes from your API
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/api/projects"); // Update with your API endpoint
        setProjects(response.data); // Assuming response data is an array of project objects
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const handleChange = (e) => {
    const {name, type, value, checked} = e.target;
    setMilestone((prevMilestone) => ({
      ...prevMilestone,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/milestones", milestone, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Milestone created:", response.data);
      // Optionally reset the form or handle the response as needed
    } catch (error) {
      console.error("Error creating milestone:", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Typography variant="h4" gutterBottom>
          Create New Milestone
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              select
              label="Project Code"
              name="Project_Code"
              value={milestone.Project_Code}
              onChange={handleChange}
              required
              fullWidth
            >
              {projects.map((project) => (
                <MenuItem key={project.id} value={project.code}>
                  {project.code}{" "}
                  {/* Assuming the project has a 'code' property */}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Task Name"
              name="Task_Name"
              value={milestone.Task_Name}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Milestone Name"
              name="Milestone_Name"
              value={milestone.Milestone_Name}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              name="Description"
              value={milestone.Description}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="date"
              label="Start Date"
              name="Start_date"
              value={milestone.Start_date}
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
              name="End_date"
              value={milestone.End_date}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={milestone.Is_completed}
                  onChange={handleChange}
                  name="Is_completed"
                />
              }
              label="Is Completed"
            />
          </Grid>
        </Grid>
        <Button>Create Milestone</Button>
      </form>
    </Container>
  );
};

export default MilestoneForm;
