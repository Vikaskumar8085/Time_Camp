import { Grid } from "@mui/material";
import React from "react";

function Dashheader() {
  return (
    <section className="contractor-dash-header-section">
      <Grid container spacing={2}>
        <Grid item md={4} sm={6} xs={12} lg={4}>
          <div className="contractor-dash-header-box">
            <div className="dash-header-icons">
              <i>icon</i>
            </div>
            <div className="dash-header-content">
              <h1>Total Work Hour</h1>
              <p>0</p>
            </div>
          </div>
        </Grid>{" "}
        <Grid item md={4} sm={6} xs={12} lg={4}>
          <div className="contractor-dash-header-box">
            <div className="dash-header-icons">
              <i>icon</i>
            </div>
            <div className="dash-header-content">
              <h1>Total Work Hour</h1>
              <p>0</p>
            </div>
          </div>
        </Grid>{" "}
        <Grid item md={4} sm={6} xs={12} lg={4}>
          <div className="contractor-dash-header-box">
            <div className="dash-header-icons">
              <i>icon</i>
            </div>
            <div className="dash-header-content">
              <h1>Total Work Hour</h1>
              <p>0</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}

export default Dashheader;
