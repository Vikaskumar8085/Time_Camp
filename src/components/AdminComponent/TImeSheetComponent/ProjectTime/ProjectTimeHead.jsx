import { Grid } from "@mui/material";
import React from "react";

function ProjectTimeHead() {
  return (
    <>
      <div className="projectTimeHead">
        <Grid container spacing={2}>
          <Grid item md={3} xl={3} sm={6} xs={12}>
            <div
              style={{ backgroundColor: "white" }}
              className="projectTimeHead_box"
            >
              1
            </div>
          </Grid>
          <Grid item md={3} xl={3} sm={6} xs={12}>
            <div
              style={{ backgroundColor: "white" }}
              className="projectTimeHead_box"
            >
              1
            </div>
          </Grid>
          <Grid item md={3} xl={3} sm={6} xs={12}>
            <div
              style={{ backgroundColor: "white" }}
              className="projectTimeHead_box"
            >
              1
            </div>
          </Grid>
          <Grid item md={3} xl={3} sm={6} xs={12}>
            <div
              style={{ backgroundColor: "white" }}
              className="projectTimeHead_box"
            >
              1
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default ProjectTimeHead;
