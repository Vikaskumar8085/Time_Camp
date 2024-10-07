import React, {useEffect} from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import {useDispatch} from "react-redux";
import {setLoader} from "../../../../redux/slices/loaderSlice";
import {fetchinactiveemployeeapicall} from "../../../../apiservice/admin/employeeapiservice";
import {setinactiveEmployee} from "../../../../redux/slices/Employee/EmployeeSlice";

function InActiveEmployee() {
  const dispatch = useDispatch();

  const fetchinactiveEmployeehandler = async () => {
    try {
      dispatch(setLoader(true));

      const response = await fetchinactiveemployeeapicall();
      console.log(response, "inactive response");
      if (response.success) {
        dispatch(setinactiveEmployee(response.result));
        dispatch(setLoader(false));
      }
    } catch (error) {
      dispatch(setLoader(false));
    }
  };

  useEffect(() => {
    fetchinactiveEmployeehandler();
  }, [0]);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Employee ID</TableCell>
              <TableCell>Employee FirstName</TableCell>
              <TableCell>Employee LastName</TableCell>
              <TableCell>Employee Email</TableCell>
              <TableCell> Phone Number</TableCell>
              <TableCell> Joining Date</TableCell>
              <TableCell> Designation</TableCell>
              <TableCell> Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default InActiveEmployee;
