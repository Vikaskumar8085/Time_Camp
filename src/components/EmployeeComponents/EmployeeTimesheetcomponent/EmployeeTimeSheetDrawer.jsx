import {Drawer} from "@mui/material";
import React from "react";
import TimesheetForm from "./TimesheetForm";

function EmployeeTimeSheetDrawer({IsOpen, setOpen}) {
  return (
    <>
      <Drawer anchor="right" open={IsOpen} onClose={() => setOpen(false)}>
        <TimesheetForm setOpen={setOpen} />
      </Drawer>
    </>
  );
}

export default EmployeeTimeSheetDrawer;
