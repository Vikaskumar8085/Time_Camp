import { Grid } from "@mui/material";
import React from "react";
import EmployeeTimeHourChars from "../../../../../components/Dashboard/dashComponent/EmployeeTimeHour/EmployeeTimeHourChars";
import ProductivityLeadearboardChart from "../../../../../components/Dashboard/dashComponent/ProductivityLeaderBoard/ProductivityLeadearboardChart";
import TotalTimeSheetsChart from "../../../../../components/Dashboard/dashComponent/TotalTimeSheets/TotalTimeSheetsChart";

function DashboardCharts() {
  return (
    <>
      <div className="dashboard_chars">
        <Grid container spacing={2}>
          <Grid item md={6} xl={6} sm={12} xs={12}>
            <section className="dashboard_Charts">
              <ProductivityLeadearboardChart />
            </section>
          </Grid>
          <Grid item md={6} xl={6} sm={12} xs={12}>
            <section className="dashboard_Charts">
              <ProductivityLeadearboardChart />
            </section>
          </Grid>
          <Grid item md={6} xl={6} sm={12} xs={12}>
            <section className="dashboard_Charts">
              <ProductivityLeadearboardChart />
            </section>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default DashboardCharts;
