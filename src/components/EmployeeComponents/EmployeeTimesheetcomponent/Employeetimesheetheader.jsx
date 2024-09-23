import { Grid } from "@mui/material";
import React from "react";

function Employeetimesheetheader() {
  return (
    <section className="employee-timesheet-header-container">
      <Grid container spacing={2}>
        <Grid item md={4} sm={12} xs={12} lg={4}>
          <div className="employee-timesheet-header-box">
            <h4>Total Entries</h4>
          </div>
        </Grid>
        <Grid item md={4} sm={12} xs={12} lg={4}>
          <div className="employee-timesheet-header-box">
            <h4>Total Houra</h4>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}

export default Employeetimesheetheader;
