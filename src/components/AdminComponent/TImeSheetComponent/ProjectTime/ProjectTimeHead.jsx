import { Grid } from "@mui/material";
import React from "react";
import "./ProjectTimehead.scss";
function ProjectTimeHead() {
  return (
    <>
      <div className="projectTimeHead">
        <Grid container spacing={2}>
          <Grid item md={3} xl={3} sm={6} xs={12}>
            <div className="projectTimeHead_box active-one">
              <h5>Total Entries</h5>
            </div>
          </Grid>
          <Grid item md={3} xl={3} sm={6} xs={12}>
            <div className="projectTimeHead_box active-two">
              <h5>Total Hours</h5>
            </div>
          </Grid>
          <Grid item md={3} xl={3} sm={6} xs={12}>
            <div className="projectTimeHead_box active-three">
              <h5>Total billed Hours</h5>
            </div>
          </Grid>
          <Grid item md={3} xl={3} sm={6} xs={12}>
            <div className="projectTimeHead_box active-four">
              <h5>Total Ok Hours</h5>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default ProjectTimeHead;
