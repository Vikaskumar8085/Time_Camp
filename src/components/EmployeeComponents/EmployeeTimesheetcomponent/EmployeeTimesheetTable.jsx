import React, {useState} from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Checkbox,
  Toolbar,
} from "@mui/material";
import Button from "../../../common/Button";
import EmployeeTimeSheetDrawer from "./EmployeeTimeSheetDrawer";

const EmployeeTimesheetTable = ({timesheets}) => {
  const [selected, setSelected] = useState([]);
  const [IsOpen, setOpen] = useState(false);

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      const newSelecteds = timesheets.map((item) => item.timesheetNo);
      setSelected(newSelecteds);
    } else {
      setSelected([]);
    }
  };

  const handleSelectOne = (event, timesheetNo) => {
    const selectedIndex = selected.indexOf(timesheetNo);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, timesheetNo);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleApprove = () => {
    console.log("Approving: ", selected);
    // Implement approval logic here
  };

  const handleDelete = () => {
    console.log("Deleting: ", selected);
    // Implement deletion logic here
  };

  return (
    <div>
      <Toolbar>
        <Button onclick={handleApprove} disabled={selected.length === 0}>
          Approve Selected
        </Button>
        <Button
          onclick={handleDelete}
          disabled={selected.length === 0}
          style={{marginLeft: "10px"}}
        >
          Delete Selected
        </Button>

        <Button
          style={{marginLeft: "10px"}}
          onclick={() => {
            setOpen(true);
          }}
        >
          Fill TimeSheets
        </Button>
        {IsOpen && (
          <EmployeeTimeSheetDrawer IsOpen={IsOpen} setOpen={setOpen} />
        )}
      </Toolbar>
      <TableContainer component={Paper} sx={{maxHeight: 400}}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  indeterminate={
                    selected.length > 0 && selected.length < timesheets.length
                  }
                  checked={
                    timesheets.length > 0 &&
                    selected.length === timesheets.length
                  }
                  onChange={handleSelectAll}
                />
              </TableCell>
              <TableCell>
                <Typography variant="h6">S.No</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Timesheet No.</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Day</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Project</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Description</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Task Description</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Total Hours</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Approval Status</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Edit</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Remarks</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {timesheets.length > 0 ? (
              timesheets.map((item, index) => (
                <TableRow key={index}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={selected.indexOf(item.TaskId) !== -1}
                      onChange={(event) =>
                        handleSelectOne(event, item.TaskId)
                      }
                    />
                  </TableCell>
                  <TableCell key={index} >{index + 1}</TableCell>
                  <TableCell>{item.timesheetNo}</TableCell>
                  <TableCell>{item.day}</TableCell>
                  <TableCell>{item.project}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.taskDescription}</TableCell>
                  <TableCell>{item.totalHours}</TableCell>
                  <TableCell>{item.approvalStatus}</TableCell>
                  <TableCell>
                    <Button variant="outlined" color="primary">
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell>{item.remarks}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={10} align="center">
                  <Typography>No data available in table</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default EmployeeTimesheetTable;
