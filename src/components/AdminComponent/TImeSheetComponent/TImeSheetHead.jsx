import {Grid} from "@mui/material";
import "./TImeSheetHead.scss";
import React from "react";

function TImeSheetHead() {
  return (
    <div className="timeSheethead">
      <Grid container spacing={2}>
        <Grid item md={3} xl={3} sm={6} xs={12}>
          <div className="timesheethead_box active-one">
            {" "}
            <h5>Total Entries</h5>
          </div>
        </Grid>
        <Grid item md={3} xl={3} sm={6} xs={12}>
          <div className="timesheethead_box active-two">
            <h5>Total Hours</h5>
          </div>
        </Grid>
        <Grid item md={3} xl={3} sm={6} xs={12}>
          <div className="timesheethead_box active-three">
            <h5>Total billed Hours</h5>
          </div>
        </Grid>
        <Grid item md={3} xl={3} sm={6} xs={12}>
          <div className="timesheethead_box active-four">
            <h5>Total Ok Hours</h5>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default TImeSheetHead;
