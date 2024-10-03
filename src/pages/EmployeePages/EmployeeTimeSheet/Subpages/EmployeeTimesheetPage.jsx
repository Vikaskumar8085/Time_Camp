import React from "react";
import Employeetimesheetheader from "../../../../components/EmployeeComponents/EmployeeTimesheetcomponent/Employeetimesheetheader";
import EmployeeTimesheetTable from "../../../../components/EmployeeComponents/EmployeeTimesheetcomponent/EmployeeTimesheetTable";

function EmployeeTimesheetPage() {
  const timesheets = [
    {
      timesheetNo: "TS001",
      day: "Monday",
      project: "Project Alpha",
      description: "Worked on feature X",
      taskDescription: "Developed the backend API",
      totalHours: 8,
      approvalStatus: "Approved",
      remarks: "Good work",
    },
    {
      timesheetNo: "TS002",
      day: "Tuesday",
      project: "Project Beta",
      description: "Worked on bug fixing",
      taskDescription: "Fixed issue with payment gateway",
      totalHours: 6,
      approvalStatus: "Pending",
      remarks: "Under review",
    },
    // Add more timesheet entries as needed
  ];
  return (
    <>
      <Employeetimesheetheader />
      <EmployeeTimesheetTable timesheets={timesheets} />
    </>
  );
}

export default EmployeeTimesheetPage;
