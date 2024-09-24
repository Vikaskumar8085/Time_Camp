// import { Container, Box, Grid, Typography, Drawer } from "@mui/material";
// import { useFormik } from "formik";
// import moment from "moment";
// import React from "react";
// import { useDispatch } from "react-redux";
import Button from "../../../common/Button";
import Input from "../../../common/Input/Input";
// import { setSingelProject } from "../../../redux/slices/ProjectSlice/projectslice";
// import projectvalidation from "./ProjectValidation";

// function ProjectDrawer({
//   IsOpen,
//   setIsOpen,
//   PhandleSubmit,
//   PItems,
//   EPhandleSubmit,
// }) {
//   const dispatch = useDispatch();

//   const formik = useFormik({
//     initialValues: {
//       Project_Name: PItems ? PItems.Project_Name : "",
//       Project_Code: PItems ? PItems?.Project_Code : "",
//       Client_Name: PItems ? PItems?.Client_Name : "",
//       Start_Date: PItems ? moment(PItems.Start_Date).format("MM/DD/YYYY") : "",
//       End_Date: PItems ? moment(PItems?.End_Date).format("MM/DD/YYYY") : "",
//       Project_Type: PItems ? PItems?.Project_Type : "",
//       Project_Managers: PItems ? PItems?.Project_Managers : "",
//       Role: PItems ? PItems?.Role : "",
//       Employee: PItems ? PItems?.Employee : "",
//     },
//     validate: projectvalidation,
//     onSubmit: (values) => {
//       try {
//         if (PItems !== null) {
//           EPhandleSubmit(values);
//         } else {
//           PhandleSubmit(values);
//         }
//       } catch (error) {
//         console.log(error?.message, "errorm");
//       }
//     },
//   });
//   const handleClose = () => {
//     setIsOpen(false);
//     dispatch(setSingelProject(null));
//   };

//   return (
//     <Drawer anchor="right" open={IsOpen} onClose={handleClose}>
//       <Container component="main" maxWidth="sm">
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             mt: 2,
//             p: 2,
//           }}
//         >
//           <Typography variant="h6" component={"h1"}>
//             {PItems !== null ? "Edit Project " : "Add Project"}
//           </Typography>

//           <form onSubmit={formik.handleSubmit}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <Input
//                   labelText="Project Name"
//                   {...formik.getFieldProps("Project_Name")}
//                   placeholder={"Please enter your Project Name"}
//                 />
//                 {formik.touched.Project_Name && formik.errors.Project_Name && (
//                   <div
//                     style={{
//                       color: "red",
//                       fontSize: "12px",
//                       marginTop: "4px",
//                       fontFamily: "Arial, sans-serif",
//                     }}
//                   >
//                     {formik.errors.Project_Name}
//                   </div>
//                 )}
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <Input
//                   labelText="Project Code"
//                   {...formik.getFieldProps("Project_Code")}
//                   placeholder={"Please enter your Project Code"}
//                 />
//                 {formik.touched.Project_Code && formik.errors.Project_Code && (
//                   <div
//                     style={{
//                       color: "red",
//                       fontSize: "12px",
//                       marginTop: "4px",
//                       fontFamily: "Arial, sans-serif",
//                     }}
//                   >
//                     {formik.errors.Project_Code}
//                   </div>
//                 )}
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <Input
//                   labelText="Client Name"
//                   {...formik.getFieldProps("Client_Name")}
//                   placeholder={"Please enter your Client Name"}
//                 />
//                 {formik.touched.Client_Name && formik.errors.Client_Name && (
//                   <div
//                     style={{
//                       color: "red",
//                       fontSize: "12px",
//                       marginTop: "4px",
//                       fontFamily: "Arial, sans-serif",
//                     }}
//                   >
//                     {formik.errors.Client_Name}
//                   </div>
//                 )}
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <Input
//                   labelText="Start Date"
//                   type="date"
//                   {...formik.getFieldProps("Start_Date")}
//                   placeholder={"Please enter your Start Date"}
//                 />
//                 {formik.touched.Start_Date && formik.errors.Start_Date && (
//                   <div
//                     style={{
//                       color: "red",
//                       fontSize: "12px",
//                       marginTop: "4px",
//                       fontFamily: "Arial, sans-serif",
//                     }}
//                   >
//                     {formik.errors.Start_Date}
//                   </div>
//                 )}
//               </Grid>

//               <Grid item xs={12} sm={6}>
//                 <Input
//                   labelText="End Date"
//                   type="date"
//                   {...formik.getFieldProps("End_Date")}
//                   placeholder={"Please enter End Date"}
//                 />
//                 {formik.touched.End_Date && formik.errors.End_Date && (
//                   <div
//                     style={{
//                       color: "red",
//                       fontSize: "12px",
//                       marginTop: "4px",
//                       fontFamily: "Arial, sans-serif",
//                     }}
//                   >
//                     {formik.errors.End_Date}
//                   </div>
//                 )}
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <Input
//                   labelText="Project Type"
//                   {...formik.getFieldProps("Project_Type")}
//                   placeholder={"Please enter Project Type"}
//                 />
//                 {formik.touched.Project_Type && formik.errors.Project_Type && (
//                   <div
//                     style={{
//                       color: "red",
//                       fontSize: "12px",
//                       marginTop: "4px",
//                       fontFamily: "Arial, sans-serif",
//                     }}
//                   >
//                     {formik.errors.Project_Type}
//                   </div>
//                 )}
//               </Grid>

//               <Grid item xs={12} sm={6}>
//                 <Input
//                   labelText="Project Managers"
//                   type="text"
//                   {...formik.getFieldProps("Project_Managers")}
//                   placeholder={"Please enter your Project Managers"}
//                 />
//                 {formik.touched.Project_Managers &&
//                   formik.errors.Project_Managers && (
//                     <div
//                       style={{
//                         color: "red",
//                         fontSize: "12px",
//                         marginTop: "4px",
//                         fontFamily: "Arial, sans-serif",
//                       }}
//                     >
//                       {formik.errors.Project_Managers}
//                     </div>
//                   )}
//               </Grid>

//               <Grid item xs={12} sm={6}>
//                 <Input
//                   labelText="Role"
//                   {...formik.getFieldProps("Role")}
//                   placeholder={"Please enter Role"}
//                 />
//                 {formik.touched.Role && formik.errors.Role && (
//                   <div
//                     style={{
//                       color: "red",
//                       fontSize: "12px",
//                       marginTop: "4px",
//                       fontFamily: "Arial, sans-serif",
//                     }}
//                   >
//                     {formik.errors.Role}
//                   </div>
//                 )}
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <Input
//                   labelText="Employee"
//                   type="text"
//                   {...formik.getFieldProps("Employee")}
//                   placeholder={"Please enter your Employee Name"}
//                 />
//                 {formik.touched.Employee && formik.errors.Employee && (
//                   <div
//                     style={{
//                       color: "red",
//                       fontSize: "12px",
//                       marginTop: "4px",
//                       fontFamily: "Arial, sans-serif",
//                     }}
//                   >
//                     {formik.errors.Employee}
//                   </div>
//                 )}
//               </Grid>

//               <Grid item xs={12}>
//                 <Button type="submit">Add Project</Button>
//               </Grid>
//             </Grid>
//           </form>
//         </Box>
//       </Container>
//     </Drawer>
//   );
// }

// export default ProjectDrawer;

import React from "react";
import { useFormik } from "formik";
import {   Grid, Typography, Box } from "@mui/material";

const ProjectDrawer = () => {
  const formik = useFormik({
    initialValues: {
      CompanyId: "",
      ProjectId: "",
      Project_Code: "",
      Project_Name: "",
      Start_Date: "",
      End_Date: "",
      client: {
        clientId: "",
        clientName: "",
      },
      ProjectName: "",
      Project_Type: "",
      Project_Managers: "",
      Project_Status: "InActive",
      RoleResource: [
        {
          RRId: "",
          RRName: "",
          RRemployee: "",
        },
      ],
      Project_Manager: {
        PId: "",
        Project_Manager_Name: "",
      },
    },
    onSubmit: (values) => {
      console.log("Form Data", values);
      // Handle form submission here
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={{ padding: 2 }}>
        <Typography variant="h5" gutterBottom>
          Create Project
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Input
              fullWidth
              name="CompanyId"
              placeholder="Company ID"
              value={formik.values.CompanyId}
              onChange={formik.handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Input
              fullWidth
              name="ProjectId"
              placeholder="Project ID"
              value={formik.values.ProjectId}
              onChange={formik.handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Input
              fullWidth
              name="Project_Code"
              placeholder="Project Code"
              value={formik.values.Project_Code}
              onChange={formik.handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Input
              fullWidth
              name="Project_Name"
              placeholder="Project Name"
              value={formik.values.Project_Name}
              onChange={formik.handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Input
              fullWidth
              name="Start_Date"
              type="date"
              value={formik.values.Start_Date}
              onChange={formik.handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Input
              fullWidth
              name="End_Date"
              type="date"
              value={formik.values.End_Date}
              onChange={formik.handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Input
              fullWidth
              name="client.clientId"
              placeholder="Client ID"
              value={formik.values.client.clientId}
              onChange={formik.handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Input
              fullWidth
              name="client.clientName"
              placeholder="Client Name"
              value={formik.values.client.clientName}
              onChange={formik.handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Input
              fullWidth
              name="ProjectName"
              placeholder="Project Name"
              value={formik.values.ProjectName}
              onChange={formik.handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Input
              fullWidth
              name="Project_Type"
              placeholder="Project Type"
              value={formik.values.Project_Type}
              onChange={formik.handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Input
              fullWidth
              name="Project_Managers"
              placeholder="Project Managers"
              value={formik.values.Project_Managers}
              onChange={formik.handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Input
              fullWidth
              name="Project_Status"
              placeholder="Project Status"
              value={formik.values.Project_Status}
              onChange={formik.handleChange}
            />
          </Grid>

          {/* Role Resource Inputs */}
          {formik.values.RoleResource.map((_, index) => (
            <React.Fragment key={index}>
              <Grid item xs={12} sm={4}>
                <Input
                  fullWidth
                  name={`RoleResource[${index}].RRId`}
                  placeholder="Role Resource ID"
                  value={formik.values.RoleResource[index].RRId}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Input
                  fullWidth
                  name={`RoleResource[${index}].RRName`}
                  placeholder="Role Resource Name"
                  value={formik.values.RoleResource[index].RRName}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Input
                  fullWidth
                  name={`RoleResource[${index}].RRemployee`}
                  placeholder="Role Resource Employee"
                  value={formik.values.RoleResource[index].RRemployee}
                  onChange={formik.handleChange}
                />
              </Grid>
            </React.Fragment>
          ))}

          <Grid item xs={12} sm={6}>
            <Input
              fullWidth
              name="Project_Manager.PId"
              placeholder="Project Manager ID"
              value={formik.values.Project_Manager.PId}
              onChange={formik.handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Input
              fullWidth
              name="Project_Manager.Project_Manager_Name"
              placeholder="Project Manager Name"
              value={formik.values.Project_Manager.Project_Manager_Name}
              onChange={formik.handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Create Project
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default ProjectDrawer;
