import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function Employeepage({fetchemployees}) {
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
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fetchemployees?.map((item, index) => {
              return (
                <TableRow>
                  <TableCell key={item.EmployeeId}>{index + 1}</TableCell>
                  <TableCell>{item?.FirstName}</TableCell>
                  <TableCell>{item?.LastName}</TableCell>
                  <TableCell>{item?.Email}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Employeepage;
