import React from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";

function Inactivecontractorcomponent() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Contractor ID</TableCell>
              <TableCell>Contractor FirstName</TableCell>
              <TableCell>Contractor LastName</TableCell>
              <TableCell> Phone Number</TableCell>
              <TableCell> Joining Date</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </>
  );
}

export default Inactivecontractorcomponent;
