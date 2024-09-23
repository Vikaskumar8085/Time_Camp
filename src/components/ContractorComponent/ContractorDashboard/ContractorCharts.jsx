import { Grid } from "@mui/material";
import React from "react";

function ContractorCharts() {
  return (
    <div className="contractorCharts_wrapper">
      <Grid container spacing={2}>
        <Grid item md={6} lg={6} sm={12} xs={12}>
          <div className="contractor-charts-box">
            <div className="contractor-header">
              <h3>Productivity Leaderboard</h3>
            </div>
          </div>
        </Grid>
        <Grid item md={6} lg={6} sm={12} xs={12}>
          <div className="contractor-charts-box">
            <h3>Employee Time Hour</h3>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ContractorCharts;
