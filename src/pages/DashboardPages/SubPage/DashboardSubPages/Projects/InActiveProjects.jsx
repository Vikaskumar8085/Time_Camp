import React, {useEffect} from "react";
import {
  TableContainer,
  Table,
  TableHead,
  Paper,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import {useDispatch} from "react-redux";
import {setLoader} from "../../../../../redux/slices/loaderSlice";
import {fetchinactiveprojectapicall} from "../../../../../apiservice/admin/projectapiservice";
import {setinactiveprojectvalue} from "../../../../../redux/slices/ProjectSlice/projectslice";
function InActiveProjects() {
  const dispatch = useDispatch();
  const fetchinactiveprojecthandler = async () => {
    try {
      dispatch(setLoader(true));
      const response = await fetchinactiveprojectapicall();

      if (response.success) {
        dispatch(setLoader(false));
        dispatch(setinactiveprojectvalue(response.result));
      }
    } catch (error) {
      dispatch(setLoader(false));
      console.log(error?.message);
    }
  };

  useEffect(() => {
    fetchinactiveprojecthandler();
  }, [0]);

  return (
    <div>
      {" "}
      <div className="title">
        <h1>In Active Project</h1>
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
}

export default InActiveProjects;
