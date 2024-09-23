import { Table } from "@mui/material";
import React from "react";

function ContractorallprojectsTable({ columns, data, onEdit, onDelete }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.field}>{column.headerName}</TableCell>
            ))}
            {(onEdit || onDelete) && <TableCell>Actions</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              {columns.map((column) => (
                <TableCell key={column.field}>{row[column.field]}</TableCell>
              ))}
              {(onEdit || onDelete) && (
                <TableCell>
                  {onEdit && (
                    <Tooltip title="Edit">
                      <IconButton onClick={() => onEdit(row)}>
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                  {onDelete && (
                    <Tooltip title="Delete">
                      <IconButton onClick={() => onDelete(row)}>
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ContractorallprojectsTable;
