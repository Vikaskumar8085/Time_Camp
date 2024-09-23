import { Grid } from "@mui/material";
import React from "react";

function EmpdashboardCharts() {
  return (
    <section className="Employee-dashboard-charts">
      <Grid container spacing={2}>
        <Grid item md={6} lg={6}>
          <div className="Employee-dashboard-charts-box">one</div>
        </Grid>
        <Grid item md={6} lg={6} sm={12} xs={12}>
          <div className="Employee-dashboard-charts-box">two</div>
        </Grid>
      </Grid>
    </section>
  );
}

export default EmpdashboardCharts;
