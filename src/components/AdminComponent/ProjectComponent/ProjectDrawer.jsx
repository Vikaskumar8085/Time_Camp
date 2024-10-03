import React from "react";
import moment from "moment";
import {Drawer} from "@mui/material";
import {useFormik} from "formik";
import ProjectForm from "./ProjectForm";
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
        clientName: "",
      },
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
      console.log(values, "values,,,,,,,,,,,,,,,,");
    },
  });
  return (
    <>
      <Drawer anchor="right" open={IsOpen} onClose={handleClose}>
        <ProjectForm />
      </Drawer>
    </>
  );
};

export default ProjectDrawer;
