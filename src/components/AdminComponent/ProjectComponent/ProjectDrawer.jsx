// import React from "react";
// import moment from "moment";
// import {Container, Drawer, Grid, Box, Typography} from "@mui/material";
// import {useFormik} from "formik";
// import Input from "../../../common/Input/Input";
// import Button from "../../../common/Button";
// const ProjectDrawer = ({
//   PhandleSubmit,
//   IsOpen,
//   handleClose,
//   clientdata,
//   roledata,
//   resourcedata,
// }) => {
//   const formik = useFormik({
//     initialValues: {
//       CompanyId: "",
//       Project_Code: "",
//       Project_Name: "",
//       Start_Date: moment().format("DD/MM/YYYY"),
//       End_Date: moment().format("DD/MM/YYYY"),
//       client: {
//         clientId: "",
//       },
//       Project_Hours: "",
//       Project_Managers: {
//         PId: "",
//       },
//       Project_Type: "",
//       Project_Status: "",
//       RoleResource: [
//         {
//           RRId: "",
//           RRName: "",
//         },
//       ],
//     },
//     onSubmit: (values) => {
//       console.log(values, "values,,,,,,,,,,,,,,,,");
//       try {
//         // PhandleSubmit(values);
//       } catch (error) {
//         console.log(error?.message);
//       }
//     },
//   });

//   //
//   const handleAddResource = () => {
//     const existingRRIds = formik.values.RoleResource.map(
//       (resource) => resource.RRId
//     );
//     const selectedRRId =
//       formik.values.RoleResource[formik.values.RoleResource.length - 1]?.RRId;

//     if (existingRRIds.includes(selectedRRId)) {
//       alert("Resource ID already added!");
//       return;
//     }

//     formik.setFieldValue("RoleResource", [
//       ...formik.values.RoleResource,
//       {RRId: "", RRName: ""},
//     ]);
//   };

//   const handleRemoveResource = (index) => {
//     const updatedResources = formik.values.RoleResource.filter(
//       (_, i) => i !== index
//     );
//     formik.setFieldValue("RoleResource", updatedResources);
//   };

//   return (
//     <>
//       <Drawer anchor="right" open={IsOpen} onClose={handleClose}>
//         <Container component="main" maxWidth="sm">
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               mt: 2,
//             }}
//           >
//             <div className="projectDrawer_title">
//               <Typography variant="h6" component={"h1"}>
//                 Add Project
//                 {/* {CItems !== null ? "Edit Client" : "Add Client"} */}
//               </Typography>
//             </div>
//             <form onSubmit={formik.handleSubmit}>
//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={6}>
//                   <Input
//                     labelText="Project Code"
//                     placeholder="Please enter your Project Code"
//                     {...formik.getFieldProps("Project_Code")}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <Input
//                     labelText="Project Hours"
//                     type={"time"}
//                     placeholder="Please enter your Project Hours"
//                     {...formik.getFieldProps("Project_Hours")}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <Input
//                     labelText="Project Name"
//                     placeholder="Please enter your Project Name"
//                     {...formik.getFieldProps("Project_Name")}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <Input
//                     labelText="Start Date"
//                     placeholder="Please enter your Project start date"
//                     type="date"
//                     {...formik.getFieldProps("Start_Date")}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <Input
//                     labelText="End Date"
//                     placeholder="Please enter your Project End Date"
//                     type="date"
//                     {...formik.getFieldProps("End_Date")}
//                   />
//                 </Grid>

//                 <Grid item sm={6} xs={12}>
//                   <label htmlFor="">select client</label>
//                   <select
//                     name="Client"
//                     {...formik.getFieldProps("client.clientId")}
//                   >
//                     {clientdata.map((item, index) => {
//                       return (
//                         <option value={item.Client_Id}>
//                           {item.Client_Name}
//                         </option>
//                       );
//                     })}
//                   </select>
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                   <label>Project Manager</label>
//                   <select
//                     name="Project_Managers"
//                     {...formik.getFieldProps("Project_Managers.PId")}
//                   >
//                     {resourcedata?.map((item, index) => [
//                       <option value={item?.EmployeeId}>
//                         {item?.FirstName}
//                       </option>,
//                     ])}
//                   </select>
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <label>Project Status</label>
//                   <select
//                     name="Project Status"
//                     {...formik.getFieldProps("Project_Status")}
//                   >
//                     <option value={"InActive"}>In Active</option>
//                     <option value={"Active"}>Active</option>
//                   </select>
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <label>Project Type</label>
//                   <select
//                     name="Project Type"
//                     {...formik.getFieldProps("Project_Type")}
//                   >
//                     <option value="Fiexd">Fixed</option>
//                     <option value="Bucket">Bucket</option>
//                     <option value="Time and Material">Time and Material</option>
//                     <option value="Full Time Resource">
//                       Full Time Resource
//                     </option>
//                   </select>
//                 </Grid>
//                 {/*
//                 <Grid item xs={12}>
//                   {formik.values.RoleResource.map((resource, index) => (
//                     <Grid
//                       item
//                       xs={12}
//                       key={index}
//                       style={{marginBottom: "10px"}}
//                     >
//                       <label>Resource Name</label>
//                       <select
//                         name={`RoleResource.${index}.RRId`} // Use dynamic keys
//                         {...formik.getFieldProps(`RoleResource.${index}.RRId`)}
//                       >
//                         <option value="">Select Resource</option>
//                         {resourcedata.map((item) => (
//                           <option key={item.EmployeeId} value={item.EmployeeId}>
//                             {item.FirstName}
//                           </option>
//                         ))}
//                       </select>

//                       <label>Role</label>
//                       <select
//                         name={`RoleResource.${index}.RRName`} // Use dynamic keys
//                         {...formik.getFieldProps(
//                           `RoleResource.${index}.RRName`
//                         )}
//                       >
//                         <option value="">Select Role</option>
//                         {roledata.map((item) => (
//                           <option key={item.Role_Id} value={item.RoleName}>
//                             {item.RoleName}
//                           </option>
//                         ))}
//                       </select>

//                       <button
//                         type="button"
//                         onClick={() => handleRemoveResource(index)}
//                       >
//                         Remove
//                       </button>
//                     </Grid>
//                   ))}
//                   <Grid item xs={12}>
//                     <Button type="button" onClick={handleAddResource}>
//                       Add Resource
//                     </Button>
//                   </Grid>
//                 </Grid> */}

//                 <Grid item xs={12}>
//                   {formik.values.RoleResource.map((resource, index) => (
//                     <Grid
//                       item
//                       xs={12}
//                       key={index}
//                       style={{marginBottom: "10px"}}
//                     >
//                       <label>Resource Name</label>
//                       <select
//                         name={`RoleResource.${index}.RRId`}
//                         {...formik.getFieldProps(`RoleResource.${index}.RRId`)}
//                       >
//                         <option value="">Select Resource</option>
//                         {resourcedata.map((item) => (
//                           <option key={item.EmployeeId} value={item.EmployeeId}>
//                             {item.FirstName}
//                           </option>
//                         ))}
//                       </select>

//                       <label>Role</label>
//                       <select
//                         name={`RoleResource.${index}.RRName`}
//                         {...formik.getFieldProps(
//                           `RoleResource.${index}.RRName`
//                         )}
//                       >
//                         <option value="">Select Role</option>
//                         {roledata.map((item) => (
//                           <option key={item.Role_Id} value={item.RoleName}>
//                             {item.RoleName}
//                           </option>
//                         ))}
//                       </select>

//                       <button
//                         type="button"
//                         onClick={() => handleRemoveResource(index)}
//                       >
//                         Remove
//                       </button>
//                     </Grid>
//                   ))}
//                   <Grid item xs={12}>
//                     <Button type="button" onClick={handleAddResource}>
//                       Add Resource
//                     </Button>
//                   </Grid>
//                 </Grid>

//                 <Grid item xs={12}>
//                   <button type="submit">Submit</button>
//                 </Grid>
//               </Grid>
//             </form>
//           </Box>
//         </Container>
//       </Drawer>
//     </>
//   );
// };

// export default ProjectDrawer;

import React from "react";
import moment from "moment";
import {Container, Drawer, Grid, Box, Typography} from "@mui/material";
import {useFormik} from "formik";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button";

const ProjectDrawer = ({
  PhandleSubmit,
  IsOpen,
  handleClose,
  clientdata,
  roledata,
  resourcedata,
}) => {
  const formik = useFormik({
    initialValues: {
      Project_Code: "",
      Project_Name: "",
      Start_Date: moment().format("YYYY-MM-DD"),
      End_Date: moment().format("YYYY-MM-DD"),
      client: {
        clientId: "",
      },
      Project_Hours: "",
      Project_Managers: {
        PId: "",
      },
      Project_Type: "",
      Project_Status: "",
      RoleResource: [],
    },
    onSubmit: (values) => {
      console.log(values, "values");
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
    const updatedResources = formik.values.RoleResource.filter(
      (_, i) => i !== index
    );
    formik.setFieldValue("RoleResource", updatedResources);
  };

  const isRRIdTaken = (id) => {
    return formik.values.RoleResource.some((resource) => resource.RRId === id);
  };

  return (
    <Drawer anchor="right" open={IsOpen} onClose={handleClose}>
      <Container component="main" maxWidth="sm">
        <Box sx={{display: "flex", flexDirection: "column", mt: 2}}>
          <div className="projectDrawer_title">
            <Typography variant="h6" component={"h1"}>
              Add Project
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
                <label htmlFor="">Select Client</label>
                <select
                  name="client"
                  {...formik.getFieldProps("client.clientId")}
                >
                  {clientdata.map((item) => (
                    <option key={item.Client_Id} value={item.Client_Id}>
                      {item.Client_Name}
                    </option>
                  ))}
                </select>
              </Grid>

              <Grid item xs={12} sm={6}>
                <label>Project Manager</label>
                <select
                  name="Project_Managers"
                  {...formik.getFieldProps("Project_Managers.PId")}
                >
                  <option value="">Select Project Manager</option>
                  {resourcedata.map((item) => (
                    <option key={item.EmployeeId} value={item.EmployeeId}>
                      {item.FirstName}
                    </option>
                  ))}
                </select>
              </Grid>
              <Grid item xs={12} sm={6}>
                <label>Project Status</label>
                <select
                  name="Project_Status"
                  {...formik.getFieldProps("Project_Status")}
                >
                  <option value={"InActive"}>In Active</option>
                  <option value={"Active"}>Active</option>
                </select>
              </Grid>
              <Grid item xs={12} sm={6}>
                <label>Project Type</label>
                <select
                  name="Project_Type"
                  {...formik.getFieldProps("Project_Type")}
                >
                  <option value="Fixed">Fixed</option>
                  <option value="Bucket">Bucket</option>
                  <option value="Time and Material">Time and Material</option>
                  <option value="Full Time Resource">Full Time Resource</option>
                </select>
              </Grid>

              <Grid item xs={12}>
                {formik.values.RoleResource.map((resource, index) => (
                  <Grid item xs={12} key={index} style={{marginBottom: "10px"}}>
                    <label>Resource Name</label>
                    <select
                      name={`RoleResource.${index}.RRId`}
                      {...formik.getFieldProps(`RoleResource.${index}.RRId`)}
                    >
                      <option value="">Select Resource</option>
                      {resourcedata.map((item) => {
                        const isDisabled =
                          item.EmployeeId ===
                            formik.values.Project_Managers.PId ||
                          isRRIdTaken(item.EmployeeId);
                        return (
                          <option
                            key={item.EmployeeId}
                            value={item.EmployeeId}
                            disabled={isDisabled}
                          >
                            {item.FirstName}
                          </option>
                        );
                      })}
                    </select>

                    <label>Role</label>
                    <select
                      name={`RoleResource.${index}.RRName`}
                      {...formik.getFieldProps(`RoleResource.${index}.RRName`)}
                    >
                      <option value="">Select Role</option>
                      {roledata.map((item) => (
                        <option key={item.Role_Id} value={item.RoleName}>
                          {item.RoleName}
                        </option>
                      ))}
                    </select>

                    <button
                      type="button"
                      onClick={() => handleRemoveResource(index)}
                    >
                      Remove
                    </button>
                  </Grid>
                ))}
                <Grid item xs={12}>
                  <Button type="button" onClick={handleAddResource}>
                    Add Resource
                  </Button>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <button type="submit">Submit</button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </Drawer>
  );
};

export default ProjectDrawer;
