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
import {Link} from "react-router-dom";
import {IoEyeOutline} from "react-icons/io5";
import {CiEdit} from "react-icons/ci";
function Employeepage({handleOpen, fetchemployees}) {
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
                  <TableCell>
                    <Link
                      to={`/employeeinfo/${item?.EmployeeId}`}
                      style={{textDecoration: "none"}}
                    >
                      <IoEyeOutline style={{fontSize: "1.5em"}} />
                    </Link>
                    <CiEdit
                      style={{fontSize: "1.5rem", marginLeft: "10px"}}
                      onClick={() => handleOpen(item.EmployeeId)}
                    />
                  </TableCell>
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
