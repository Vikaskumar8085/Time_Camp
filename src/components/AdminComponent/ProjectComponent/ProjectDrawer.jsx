import React from "react";
import moment from "moment";
import {Container, Drawer, Grid, Box, Typography} from "@mui/material";
import {useFormik} from "formik";
import Input from "../../../common/Input/Input";
const ProjectDrawer = ({PhandleSubmit, IsOpen, handleClose}) => {
  const formik = useFormik({
    initialValues: {
      CompanyId: "",
      Project_Code: "",
      Project_Name: "",
      Start_Date: moment().format("DD/MM/YYYY"),
      End_Date: moment().format("DD/MM/YYYY"),
      client: {
        clientId: "",
      },
      Project_Hours: "",
      Project_Managers: {
        PId: "",
      },
      Project_Type: "",
      Project_Status: "",
      RoleResource: [
        {
          RRId: "",
          RRName: "",
        },
      ],
    },
    onSubmit: (values) => {
      console.log(values, "values,,,,,,,,,,,,,,,,");
      try {
        PhandleSubmit(values);
      } catch (error) {
        console.log(error?.message);
      }
    },
  });

  const handleAddResource = () => {
    formik.setFieldValue("RoleResource", [
      ...formik.values.RoleResource,
      {RRId: "", RRName: ""},
    ]);
  };

  const handleRemoveResource = (index) => {
    const newRoleResources = formik.values.RoleResource.filter(
      (_, i) => i !== index
    );
    formik.setFieldValue("RoleResource", newRoleResources);
  };
  return (
    <>
      <Drawer anchor="right" open={IsOpen} onClose={handleClose}>
        <Container component="main" maxWidth="sm">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: 2,
            }}
          >
            <div className="projectDrawer_title">
              <Typography variant="h6" component={"h1"}>
                Add Project
                {/* {CItems !== null ? "Edit Client" : "Add Client"} */}
              </Typography>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Input
                    labelText="Project Code"
                    placeholder="Please enter your Project Code"
                    {...formik.getFieldProps("Project_Code")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input
                    labelText="Project Hours"
                    type={"time"}
                    placeholder="Please enter your Project Hours"
                    {...formik.getFieldProps("Project_Hours")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input
                    labelText="Project Name"
                    placeholder="Please enter your Project Name"
                    {...formik.getFieldProps("Project_Name")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input
                    labelText="Start Date"
                    placeholder="Please enter your Project start date"
                    type="date"
                    {...formik.getFieldProps("Start_Date")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input
                    labelText="End Date"
                    placeholder="Please enter your Project End Date"
                    type="date"
                    {...formik.getFieldProps("End_Date")}
                  />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <label htmlFor="">select client</label>
                  <select
                    name="Client"
                    {...formik.getFieldProps("client.clientId")}
                  >
                    <option value={1}>client 1</option>
                    <option value={2}> client 2</option>
                    <option value={3}> client 3</option>
                  </select>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <label>Project Manager</label>
                  <select
                    name="Project_Managers"
                    {...formik.getFieldProps("Project_Managers.PId")}
                  >
                    <option value={1}>In Active</option>
                    <option value={2}>Active</option>
                  </select>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <label>Project Status</label>
                  <select
                    name="Project Status"
                    {...formik.getFieldProps("Project_Status")}
                  >
                    <option value="InActive">In Active</option>
                    <option value="Active">Active</option>
                  </select>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <label>Project Type</label>
                  <select
                    name="Project Type"
                    {...formik.getFieldProps("Project_Type")}
                  >
                    <option value="Fiexd">Fixed</option>
                    <option value="Bucket">Bucket</option>
                    <option value="Time and Material">Time and Material</option>
                    <option value="Full Time Resource">
                      Full Time Resource
                    </option>
                  </select>
                </Grid>

                <Grid item xs={12}>
                  {formik.values.RoleResource.map((resource, index) => (
                    <div key={index} style={{marginBottom: "10px"}}>
                      <input
                        type="text"
                        placeholder="Resource ID"
                        {...formik.getFieldProps(`RoleResource.${index}.RRId`)}
                      />
                      <input
                        type="text"
                        placeholder="Resource Name"
                        {...formik.getFieldProps(
                          `RoleResource.${index}.RRName`
                        )}
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveResource(index)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button type="button" onClick={handleAddResource}>
                    Add Resource
                  </button>
                </Grid>

                <Grid item xs={12}>
                  <button type="submit">Submit</button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Container>
      </Drawer>
    </>
  );
};

export default ProjectDrawer;
