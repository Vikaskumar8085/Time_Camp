import { Grid } from "@mui/material";
import React from "react";
import Contractorprofile from "../../../../components/AdminComponent/ContractoreComponent/ContractorinfoComponent/Contractorprofile";

function Contractorinfopage() {
  return (
    <>
      <div className="employee-info-wrapper">
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <div className="employee-profile">
              <h3>Contractor Profile Information</h3>
              <hr />
              <Contractorprofile/>
            </div>
          </Grid>
          <Grid item sm={12}>
            <div className="employee-projects">
              <h3>Contractor Projects</h3>
              <hr />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Contractorinfopage;
