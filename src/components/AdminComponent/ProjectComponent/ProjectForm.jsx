import React, {useState} from "react";
import {useFormik} from "formik";
import {
  TextField,
  Button,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Chip,
  Container,
  Typography,
  Paper,
} from "@mui/material";
import moment from "moment";
import {useSelector} from "react-redux";
import {addprojects} from "../../../apiservice/admin/projectapiservice";

// Project code counter (for demo purposes; you might want to persist this in a real app)
let projectCodeCounter = 1;

const generateProjectCode = () => {
  const character = "A"; // You can modify this to use different characters if needed
  const digits = String(projectCodeCounter).padStart(3, "0"); // Ensure 3 digits
  return `${character}${digits}`;
};

const initialValues = {
  //   Company_Id: "",
  Project_Code: generateProjectCode(),
  Project_Name: "",
  Start_Date: moment().format("YYYY-MM-DD"),
  End_Date: moment().format("YYYY-MM-DD"),
  client: {clientId: "", clientName: ""},
  Project_Type: "",
  Project_Status: "InActive",
  Project_Manager: {PId: "", Project_Manager_Name: ""},
  RRIds: [],
  Role: "", // New role field
};

// Sample options

const projectManagers = [
  {id: "1", name: "Manager A"},
  {id: "2", name: "Manager B"},
];

const resources = [
  {id: "1", name: "Resource A"},
  {id: "2", name: "Resource B"},
  {id: "3", name: "Resource C"},
];

const roles = [
  {value: "business_analyst", label: "Business Analyst"},
  {value: "developer", label: "Developer"},
  {value: "tech_lead", label: "Tech Lead"},
];

const ProjectForm = () => {
  const fetchclients = useSelector((state) => state.admin.clientValue);
  const companydata = useSelector((state) => state.company.values);

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      try {
        const response = await addprojects(values);

        console.log(response, "response");

        await projectCodeCounter++;
        formik.resetForm({
          values: {...initialValues, Project_Code: generateProjectCode()},
        });
      } catch (error) {}

      // Increment the counter for the next project code
      // Reset form and generate a new project code
    },
  });

  const [resourceList, setResourceList] = useState([]);

  const handleAddResource = () => {
    const selectedResources = formik.values.RRIds.map((id) => {
      const resource = resources.find((res) => res.id === id);
      return {
        RRId: resource.id,
        RRName: resource.name,
        Role: formik.values.Role, // Include selected role
      };
    });

    const newResources = selectedResources.filter(
      (newRes) => !resourceList.some((res) => res.RRId === newRes.RRId)
    );

    if (newResources.length > 0) {
      setResourceList([...resourceList, ...newResources]);
      formik.setFieldValue("RRIds", []);
      formik.setFieldValue("Role", ""); // Reset role after adding
    } else {
      alert("All selected resources are already added!");
    }
  };

  const handleRemoveResource = (id) => {
    setResourceList(resourceList.filter((res) => res.RRId !== id));
  };

  return (
    <Container maxWidth="sm" sx={{marginTop: 4}}>
      <div elevation={3} sx={{padding: 3}}>
        <Typography variant="h4" gutterBottom align="center">
          Project Management Form
        </Typography>
        <form onSubmit={formik.handleSubmit} style={{width: "100%"}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="Project_Code"
                label="Project Code"
                variant="outlined"
                value={formik.values.Project_Code}
                onChange={formik.handleChange}
                required
                InputProps={{
                  readOnly: true, // Make it read-only since it's auto-generated
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="Project_Name"
                label="Project Name"
                variant="outlined"
                value={formik.values.Project_Name}
                onChange={formik.handleChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                name="Start_Date"
                label="Start Date"
                type="date"
                variant="outlined"
                value={formik.values.Start_Date}
                onChange={formik.handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                name="End_Date"
                label="End Date"
                type="date"
                variant="outlined"
                value={formik.values.End_Date}
                onChange={formik.handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="client-label">Client</InputLabel>
                <Select
                  labelId="client-label"
                  name="client"
                  value={formik.values.client.clientId}
                  onChange={(e) => {
                    const selectedClient = fetchclients.find(
                      (client) => client.Client_Id === e.target.value
                    );
                    formik.setFieldValue(
                      "client.clientId",
                      selectedClient.Client_Id
                    );
                    formik.setFieldValue(
                      "client.clientName",
                      selectedClient.Client_Name
                    );
                  }}
                  variant="outlined"
                  required
                >
                  {fetchclients.map((client) => (
                    <MenuItem key={client.Client_Id} value={client.Client_Id}>
                      {client.Client_Name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="manager-label">Project Manager</InputLabel>
                <Select
                  labelId="manager-label"
                  name="Project_Manager.PId"
                  value={formik.values.Project_Manager.PId}
                  onChange={(e) => {
                    const selectedManager = projectManagers.find(
                      (manager) => manager.id === e.target.value
                    );
                    formik.setFieldValue(
                      "Project_Manager.PId",
                      selectedManager.id
                    );
                    formik.setFieldValue(
                      "Project_Manager.Project_Manager_Name",
                      selectedManager.name
                    );
                  }}
                  variant="outlined"
                  required
                >
                  {projectManagers.map((manager) => (
                    <MenuItem key={manager.id} value={manager.id}>
                      {manager.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Role Field */}
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="role-label">Role</InputLabel>
                <Select
                  labelId="role-label"
                  name="Role"
                  value={formik.values.Role}
                  onChange={formik.handleChange}
                  variant="outlined"
                  required
                >
                  {roles.map((role) => (
                    <MenuItem key={role.value} value={role.value}>
                      {role.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Resource Fields */}
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="resource-label">Resources</InputLabel>
                <Select
                  labelId="resource-label"
                  name="RRIds"
                  multiple
                  value={formik.values.RRIds}
                  onChange={(e) =>
                    formik.setFieldValue("RRIds", e.target.value)
                  }
                  renderValue={(selected) => (
                    <div>
                      {selected.map((value) => {
                        const resource = resources.find(
                          (res) => res.id === value
                        );
                        return (
                          <Chip
                            key={value}
                            label={resource.name}
                            sx={{margin: 0.5}}
                          />
                        );
                      })}
                    </div>
                  )}
                  variant="outlined"
                  required
                >
                  {resources
                    .filter(
                      (res) => !resourceList.some((r) => r.RRId === res.id)
                    ) // Prevent duplicates
                    .map((res) => (
                      <MenuItem key={res.id} value={res.id}>
                        {res.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button
                onClick={handleAddResource}
                variant="contained"
                color="primary"
                fullWidth
              >
                Add Resource
              </Button>
            </Grid>

            {/* Display added resources */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Added Resources:
              </Typography>
              {resourceList.map((resource) => (
                <Grid
                  container
                  key={resource.RRId}
                  spacing={2}
                  alignItems="center"
                >
                  <Grid item xs={6}>
                    <Typography>{resource.RRName}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography>{resource.Role}</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Button
                      onClick={() => handleRemoveResource(resource.RRId)}
                      variant="outlined"
                      color="secondary"
                    >
                      Remove
                    </Button>
                  </Grid>
                </Grid>
              ))}
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default ProjectForm;
