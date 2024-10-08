import {
  TableContainer,
  Table,
  TableHead,
  Paper,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import React from "react";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchactiveprojectapicall} from "../../../../../apiservice/admin/projectapiservice";
import {setLoader} from "../../../../../redux/slices/loaderSlice";
import {setactiveprojects} from "../../../../../redux/slices/ProjectSlice/projectslice";

const ActiveProjects = () => {
  const dispatch = useDispatch();

  const fetchactiveprojectshandler = async () => {
    try {
      dispatch(setLoader(true));

      const response = await fetchactiveprojectapicall();
      if (response.success) {
        dispatch(setactiveprojects(response.result));
        dispatch(setLoader(false));
      }
    } catch (error) {
      console.log(error?.message);
    }
  };

  useEffect(() => {
    fetchactiveprojectshandler();
  }, [0]);

  return (
    <div>
      <div className="title">
        <h1>Active Project</h1>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">ProjectName</TableCell>
              <TableCell align="right">ProjectCode</TableCell>
              <TableCell align="right">Client Name</TableCell>
              <TableCell align="right">Start Date</TableCell>
              <TableCell align="right">End Date</TableCell>
              <TableCell align="right">Project Type</TableCell>
              <TableCell align="right">Project Manager</TableCell>
              <TableCell align="right">Role</TableCell>
              <TableCell align="right">Employee</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>tasdf</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ActiveProjects;
