import React from "react";
import {Drawer} from "@mui/material";
import ProjectForm from "./ProjectForm";
import {useDispatch, useSelector} from "react-redux";
import {setLoader} from "../../../redux/slices/loaderSlice";
import {useEffect} from "react";
import {setResources} from "../../../redux/slices/ProjectSlice/projectslice";
import {fetchallresources} from "../../../apiservice/admin/employeeapiservice";
const ProjectDrawer = ({PhandleSubmit, IsOpen, handleClose}) => {
  const resourcedata = useSelector((state) => state.project.resources);
  console.log(resourcedata, "resource data");

  const dispatch = useDispatch();
  const getallresourceshandler = async () => {
    try {
      dispatch(setLoader(true));
      const response = await fetchallresources();
      if (response.success) {
        dispatch(setLoader(false));
        dispatch(setResources(response.result));
      }
    } catch (error) {
      dispatch(setLoader(false));
    }
  };

  useEffect(() => {
    getallresourceshandler();
  }, [0]);

  return (
    <>
      <Drawer anchor="right" open={IsOpen} onClose={handleClose}>
        <ProjectForm resourcedata={resourcedata} />
      </Drawer>
    </>
  );
};

export default ProjectDrawer;
// const formik = useFormik({
//   initialValues: {
//     CompanyId: "",
//     Project_Code: "",
//     Project_Name: "",
//     Start_Date: moment().format("DD/MM/YYYY"),
//     End_Date: moment().format("DD/MM/YYYY"),
//     client: {
//       clientId: "",
//       clientName: "",
//     },
//     Project_Type: "",
//     Project_Managers: "",
//     Project_Status: "InActive",
//     RoleResource: [
//       {
//         RRId: "",
//         RRName: "",
//         RRemployee: "",
//       },
//     ],
//     Project_Manager: {
//       PId: "",
//       Project_Manager_Name: "",
//     },
//   },
//   onSubmit: (values) => {
//     console.log(values, "values,,,,,,,,,,,,,,,,");
//   },
// });
