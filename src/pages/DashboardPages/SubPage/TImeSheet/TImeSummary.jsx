import { Grid } from "@mui/material";
import React from "react";
import TimeHourByResource from "../../../../components/AdminComponent/TImeSheetComponent/TImeSheetSummary/TimeHourByResource/TimeHourByResource";
import HourByProjectChart from "../../../../components/AdminComponent/TImeSheetComponent/TImeSheetSummary/HourByProjectChart/HourByProjectChart";
import TimeTrackingAccuracyChart from "../../../../components/AdminComponent/TImeSheetComponent/TImeSheetSummary/TImeTrackingAccurecyChart/TimeTrackingAccuracyChart";
import ApprovalStatusDistributionChart from "../../../../components/AdminComponent/TImeSheetComponent/TImeSheetSummary/ApprovalStatusDistributionChart/ApprovalStatusDistributionChart";
import BillingStatusDistributionChart from "../../../../components/AdminComponent/TImeSheetComponent/TImeSheetSummary/BillingStatusDistributionChart/BillingStatusDistributionChart";
import DailyHoursChart from "../../../../components/AdminComponent/TImeSheetComponent/TImeSheetSummary/DailyHoursChart/DailyHoursChart";
import ProjectTimeUtilizationChart from "../../../../components/AdminComponent/TImeSheetComponent/TImeSheetSummary/ProjectTimeUtilization/ProjectTimeUtilizationChart";
import ApprovalandBillingOverTimeChart from "../../../../components/AdminComponent/TImeSheetComponent/TImeSheetSummary/ApprovalandBillingOverTime/ApprovalandBillingOverTimeChart";
function TImeSummary() {
  return (
    <>
      <div className="timesummary_container">
        <Grid container spacing={2}>
          <Grid item mmd={6} xl={6} sm={12} xs={12}>
            <section className="timesummary_box">
              <div className="timesummary_header">
                <h5>Time Hour by Resource</h5>
              </div>
              <TimeHourByResource />
            </section>
          </Grid>
          {/* time hour by resource */}
          <Grid item mmd={6} xl={6} sm={12} xs={12}>
            <section className="timesummary_box">
              <div sx={{ my: 3 }} className="timesummary_header">
                <h5>Hour By Project</h5>
              </div>
              <HourByProjectChart />
            </section>
          </Grid>

          <Grid item mmd={6} xl={6} sm={12} xs={12}>
            <section className="timesummary_box">
              <div sx={{ my: 3 }} className="timesummary_header">
                <h5>Hour By Company</h5>
              </div>
              <HourByProjectChart />
            </section>
          </Grid>
          <Grid item mmd={6} xl={6} sm={12} xs={12}>
            <section className="timesummary_box">
              <div sx={{ my: 3 }} className="timesummary_header">
                <h5>Time Tracking Accuracy</h5>
              </div>
              <TimeTrackingAccuracyChart />
            </section>
          </Grid>
          <Grid item mmd={6} xl={6} sm={12} xs={12}>
            <section className="timesummary_box">
              <div sx={{ my: 3 }} className="timesummary_header">
                <h5>Approval Status Distribution</h5>
              </div>
              <ApprovalStatusDistributionChart />
            </section>
          </Grid>
          <Grid item mmd={6} xl={6} sm={12} xs={12}>
            <section className="timesummary_box">
              <div sx={{ my: 3 }} className="timesummary_header">
                <h5>Billing Status Distribution</h5>
              </div>
              <BillingStatusDistributionChart />
            </section>
          </Grid>
          <Grid item mmd={6} xl={6} sm={12} xs={12}>
            <section className="timesummary_box">
              <div sx={{ my: 3 }} className="timesummary_header">
                <h5>Daily Hours </h5>
              </div>
              <DailyHoursChart />
            </section>
          </Grid>
          <Grid item mmd={6} xl={6} sm={12} xs={12}>
            <section className="timesummary_box">
              <div sx={{ my: 3 }} className="timesummary_header">
                <h5>Approved And Billing Over Time</h5>
              </div>
              <ApprovalandBillingOverTimeChart />
            </section>
          </Grid>
          <Grid item mmd={6} xl={6} sm={12} xs={12}>
            <section className="timesummary_box">
              <div sx={{ my: 3 }} className="timesummary_header">
                <h5>Project Time Utilization</h5>
              </div>
              <ProjectTimeUtilizationChart />
            </section>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default TImeSummary;
