import {Drawer} from "@mui/material";
import React from "react";
import TimesheetForm from "./TimesheetForm";

function EmployeeTimeSheetDrawer({IsOpen, setOpen}) {
  return (
    <>
      <Drawer anchor="right" open={IsOpen} onClose={() => setOpen(false)}>
        <TimesheetForm />
      </Drawer>
    </>
  );
}

export default EmployeeTimeSheetDrawer;
