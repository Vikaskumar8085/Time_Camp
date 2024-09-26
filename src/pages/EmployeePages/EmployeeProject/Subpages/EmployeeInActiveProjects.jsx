import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchInactiveemployeeProjects} from "../../../../apiservice/employee/employeeprojectapiservice";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import {
  setActiveEmpProjects,
  setInActiveEmpProjects,
} from "../../../../redux/employeeslices/employeeprojectslice/employeeprojectslice";
import {setLoader} from "../../../../redux/slices/loaderSlice";

function EmployeeInActiveProjects() {
  const dispatch = useDispatch();
  const employeeinactiveprojects = useSelector(
    (state) => state.employeeproject.InActiveprojects
  );

  const fetchInactiveprojects = async () => {
    try {
      dispatch(setLoader(true));

      const response = await fetchInactiveemployeeProjects();
      if (response.success) {
        dispatch(setLoader(false));
        dispatch(setInActiveEmpProjects(response.result));
        console.log(response.message, response);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchInactiveprojects();
  }, [0]);

  return (
    <div>
      {" "}
      <TableContainer component={Paper}>
        <TableBody>
          {employeeinactiveprojects.map((item, index) => {
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

export default EmployeeInActiveProjects;
