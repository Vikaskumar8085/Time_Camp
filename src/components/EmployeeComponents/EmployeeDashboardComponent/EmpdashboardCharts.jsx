import { Grid } from "@mui/material";
import React from "react";
import EmployeeTimeHoursCharts from "./charts/EmployeeTimeHoursCharts";
import EmployeeTotalProjects from "./charts/EmployeeTotalProjects";

function EmpdashboardCharts() {
  return (
    <section className="Employee-dashboard-charts">
      <Grid container spacing={2}>
        <Grid item md={6} lg={6} sm={12} xs={12} sx={{ my: 5 }}>
          <div className="Employee-dashboard-charts-box">
            <EmployeeTimeHoursCharts />
          </div>
        </Grid>
        <Grid item md={6} lg={6} sm={12} xs={12} sx={{my:5}}>
          <div className="Employee-dashboard-charts-box">
            <EmployeeTotalProjects />
          </div>
        </Grid>
      </Grid>
    </section>
  );
}

export default EmpdashboardCharts;
