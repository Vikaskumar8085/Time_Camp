import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import React from "react";
import {useEffect} from "react";
import toast from "react-hot-toast";
import {useDispatch, useSelector} from "react-redux";
import {fetchactiveemployeeprojects} from "../../../../apiservice/employee/employeeprojectapiservice";
import {setActiveEmpProjects} from "../../../../redux/employeeslices/employeeprojectslice/employeeprojectslice";
import {setLoader} from "../../../../redux/slices/loaderSlice";

function EmployeeActiveprojects() {
  const empinactiveprojects = useSelector(
    (state) => state.employeeproject.ActiveProjects
  );
  const dispatch = useDispatch();

  const fetchactiveprojects = async () => {
    try {
      dispatch(setLoader(true));
      const response = await fetchactiveemployeeprojects();
      if (response.success) {
        dispatch(setActiveEmpProjects(response.result));
        dispatch(setLoader(false));
        toast.success(response.message);
      }
    } catch (error) {
      console.log(error.message);
      dispatch(setLoader(false));
      toast.error(error?.response.message);
    }
  };
  useEffect(() => {
    fetchactiveprojects();
  }, [0]);
  return (
    <div>
      <TableContainer component={Paper}>
        <TableBody>
          {empinactiveprojects.map((item, index) => {
            return (
              <TableRow>
                <TableCell>{item.Project_Code}</TableCell>
                <TableCell>{item.Project_Name}</TableCell>
                <TableCell>{item.Project_Managers}</TableCell>
                <TableCell>{item.Project_Status}</TableCell>
                <TableCell>{item.Project_Typ}</TableCell>
                <TableCell>{item.Start_Dat}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </TableContainer>
    </div>
  );
}

export default EmployeeActiveprojects;
