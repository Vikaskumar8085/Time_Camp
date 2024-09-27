import {Grid} from "@mui/material";
import React from "react";
import Employeeprofile from "../../../../../components/AdminComponent/EmployeeComponent/EmployeeInfoComponent/Employeeprofile";
import Employeeprojects from "../../../../../components/AdminComponent/EmployeeComponent/EmployeeInfoComponent/Employeeprojects";

function EmployeinfoPage() {
  return (
    <>
      <div className="employee-info-wrapper">
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <div className="employee-profile">
              <h3>employee Profile Information</h3>
              <hr />
              <Employeeprofile />
            </div>
          </Grid>
          <Grid item sm={12}>
            <div className="employee-projects">
              <h3>employee Projects</h3>
              <hr />
              <Employeeprojects />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default EmployeinfoPage;
