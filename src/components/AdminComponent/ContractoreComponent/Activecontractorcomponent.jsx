import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import React from "react";

function Activecontractorcomponent() {
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

export default Activecontractorcomponent;
