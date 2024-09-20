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
import ProjectTimeHead from "../../../../components/AdminComponent/TImeSheetComponent/ProjectTime/ProjectTimeHead";

function ProjectTime() {
  return (
    <>
      <div className="projectTime_Wrapper">
        <ProjectTimeHead />
        <TableContainer component={Paper} style={{margin:"20px 0px"}}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Sr No.</TableCell>
                <TableCell>Project</TableCell>
                <TableCell>Total Hours</TableCell>
                <TableCell>Total  Entries</TableCell>\
                <TableCell>Total Billed Hours</TableCell>
                <TableCell>Total Ok Hours</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default ProjectTime;
