import React from "react";
import Employeetimesheetheader from "../../../../components/EmployeeComponents/EmployeeTimesheetcomponent/Employeetimesheetheader";
import EmployeeTimesheetTable from "../../../../components/EmployeeComponents/EmployeeTimesheetcomponent/EmployeeTimesheetTable";
import {useSelector} from "react-redux";
function EmployeeTimesheetPage() {
  const timesheets = useSelector(
    (state) => state.employeetimesheet.timesheetvalues
  );
  console.log(timesheets, "tiemshlasdklfjlasdf");
  return (
    <>
      <Employeetimesheetheader />
      <EmployeeTimesheetTable timesheets={timesheets} />
    </>
  );
}

export default EmployeeTimesheetPage;
