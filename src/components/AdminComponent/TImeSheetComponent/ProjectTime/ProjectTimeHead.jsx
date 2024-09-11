import { Grid } from "@mui/material";
import React from "react";
import "./ProjectTimehead.scss";
function ProjectTimeHead() {
  return (
    <>
      <div className="projectTimeHead">
        <Grid container spacing={2}>
          <Grid item md={3} xl={3} sm={6} xs={12}>
            <div className="projectTimeHead_box active-one">1</div>
          </Grid>
          <Grid item md={3} xl={3} sm={6} xs={12}>
            <div className="projectTimeHead_box active-two">1</div>
          </Grid>
          <Grid item md={3} xl={3} sm={6} xs={12}>
            <div className="projectTimeHead_box active-three">1</div>
          </Grid>
          <Grid item md={3} xl={3} sm={6} xs={12}>
            <div className="projectTimeHead_box active-four">1</div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default ProjectTimeHead;
