import {Grid} from "@mui/material";
import React from "react";
import Clientprofile from "../../../../components/AdminComponent/Clientcomponent/clientinfocomponent/Clientprofile";
import Clientprojects from "../../../../components/AdminComponent/Clientcomponent/clientinfocomponent/Clientprojects";

function ClientInfoPage() {
  return (
    <>
      <div className="client-info-wrapper">
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <div className="client-profile">
              <h2>Client Profile Information</h2>
              <hr />
              <Clientprofile />
            </div>
          </Grid>
          <Grid item sm={12}>
            <div className="client-projects">
              <h2>client Projects</h2>
              <hr />
              <Clientprojects />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default ClientInfoPage;
