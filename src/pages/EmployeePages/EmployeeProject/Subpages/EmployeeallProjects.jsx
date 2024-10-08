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
import {fetchemployeeprojects} from "../../../../apiservice/employee/employeeprojectapiservice";
import {setEmployee} from "../../../../redux/employeeslices/employeeprojectslice/employeeprojectslice";
import {setLoader} from "../../../../redux/slices/loaderSlice";

function EmployeeallProjects() {
  const dispatch = useDispatch();
  const employeeprojects = useSelector((state) => state.employeeproject.values);
  console.log(employeeprojects, "employee projects ");

  const fetchallemployeeprojects = async () => {
    try {
      dispatch(setLoader(true));
      const response = await fetchemployeeprojects();
      console.log(response, "response  data");
      if (response.success) {
        dispatch(setLoader(false));
        dispatch(setEmployee(response.result));
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };

  useEffect(() => {
    fetchallemployeeprojects();
  }, [0]);
  return (
    <>
      <selection>
        <h1>selection</h1>
      </selection>
      <TableContainer component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Project Code</TableCell>
              <TableCell>Project Name</TableCell>
              <TableCell>Project Managers</TableCell>
              <TableCell>Project Status</TableCell>
              <TableCell>Project Type</TableCell>
              <TableCell>Start Date</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {employeeprojects.map((item, index) => {
              console.log(item, "items");
              return (
                <TableRow>
                  <TableCell>{item?.Project_Code}</TableCell>
                  <TableCell>{item?.Project_Name}</TableCell>
                  <TableCell>{item?.Project_Manager}</TableCell>
                  <TableCell>{item?.Start_Date}</TableCell>
                  <TableCell>{item?.End_Date}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default EmployeeallProjects;
