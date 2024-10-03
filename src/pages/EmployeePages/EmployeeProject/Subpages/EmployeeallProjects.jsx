import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
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

  const fetchallemployeeprojects = async () => {
    try {
      dispatch(setLoader(true));
      const response = await fetchemployeeprojects();
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
              <TableCell>
                <Typography variant="h6">Project Code</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Project Name</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Project Managers</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Project Status</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Project Type</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Start Date</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Roles</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Client Name</Typography>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {employeeprojects.map((item, index) => {
              return (
                <TableRow>
                  <TableCell>{item.Project_Code}</TableCell>
                  <TableCell>{item.Project_Name}</TableCell>
                  <TableCell>{item.Project_Managers}</TableCell>
                  <TableCell>{item.Project_Status}</TableCell>
                  <TableCell>{item.Project_Typ}</TableCell>
                  <TableCell>{item.Start_Dat}</TableCell>
                  <TableCell>
                    {item?.RoleResource?.map((item, index) => {
                      return item?.RRName;
                    })}
                  </TableCell>
                  <TableCell>{item.client?.clientName}</TableCell>
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
