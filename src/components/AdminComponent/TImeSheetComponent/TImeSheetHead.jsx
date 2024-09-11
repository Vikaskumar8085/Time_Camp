import { Grid } from "@mui/material";
import "./TImeSheetHead.scss";
import React from "react";

function TImeSheetHead() {
  return (
    <div className="timeSheethead">
      <Grid container spacing={2}>
        <Grid item md={3} xl={3} sm={6} xs={12}>
          <div className="timesheethead_box active-one">1</div>
        </Grid>
        <Grid item md={3} xl={3} sm={6} xs={12}>
          <div className="timesheethead_box active-two">1</div>
        </Grid>
        <Grid item md={3} xl={3} sm={6} xs={12}>
          <div className="timesheethead_box active-three">1</div>
        </Grid>
        <Grid item md={3} xl={3} sm={6} xs={12}>
          <div className="timesheethead_box active-four">1</div>
        </Grid>
      </Grid>
    </div>
  );
}

export default TImeSheetHead;
