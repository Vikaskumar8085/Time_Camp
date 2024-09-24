import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Modal,
} from "@mui/material";
import { memo } from "react";
import { useState } from "react";

function ClientTable({ fetchclients }) {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Company Name</TableCell>
              <TableCell>Client Name</TableCell>
              <TableCell>Client Email</TableCell>
              <TableCell>Client Phone</TableCell>
              <TableCell>Client Address</TableCell>
              <TableCell>Client Postal Code</TableCell>
              <TableCell>Gst Number</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fetchclients.map((item, index) => {
              return (
                <>
                  <TableRow>
                    <TableCell>{item?.Company_Name}</TableCell>
                    <TableCell>{item?.Client_Name}</TableCell>
                    <TableCell>{item?.Client_Email}</TableCell>
                    <TableCell>{item?.Client_Phone}</TableCell>
                    <TableCell>{item?.Client_Address}</TableCell>
                    <TableCell>{item?.Client_Postal_Code}</TableCell>
                    <TableCell>{item?.GstNumber}</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default memo(ClientTable);
