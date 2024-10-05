import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setLoader } from "../../../../redux/slices/loaderSlice";

function InActiveEmployee() {
  const dispatch = useDispatch();

  const fetchinactiveEmployee = async () => {
    try {
      dispatch(setLoader(true));

      const response = "response";
      if (response) {
        dispatch(setLoader(false));
      }
    } catch (error) {
      dispatch(setLoader(false));
    }
  };

  useEffect(() => {
    fetchinactiveEmployee();
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
