import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

function TImeSheetHead() {
  return (
    <div className="timeSheethead">
      <Grid container spacing={2}>
        <Grid item md={3} xl={3} sm={6} xs={12}>
          <div style={{ background: "white" }} className="timesheethead_box">
            1
          </div>
        </Grid>
        <Grid item md={3} xl={3} sm={6} xs={12}>
          <div style={{ background: "white" }} className="timesheethead_box">
            1
          </div>
        </Grid>
        <Grid item md={3} xl={3} sm={6} xs={12}>
          <div style={{ background: "white" }} className="timesheethead_box">
            1
          </div>
        </Grid>
        <Grid item md={3} xl={3} sm={6} xs={12}>
          <div style={{ background: "white" }} className="timesheethead_box">
            1
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default TImeSheetHead;
