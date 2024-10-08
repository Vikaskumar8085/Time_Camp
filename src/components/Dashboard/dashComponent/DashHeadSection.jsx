import {Grid} from "@mui/material";
import React from "react";
import TotalWorkhourIcon from "../../../assest/DashboardIcons/TotalWorkHours.png";
import TotalClientIcon from "../../../assest/DashboardIcons/TotalClient.png";
import TotalProjectIcon from "../../../assest/DashboardIcons/project.png";
import TotalEmployeeIcon from "../../../assest/DashboardIcons/Employess.png";
import {useSelector} from "react-redux";

function DashHeadSection() {
  const dashboardresult = useSelector((state) => state.dashboard.values);

  console.log(dashboardresult, "dashboardresult");

  return (
    <>
      <section className="dashboard_wrapper">
        <Grid container spacing={2}>
          <Grid item sm={12} md={3}>
            <div className="dashboard_count">
              <div className="active-one active">
                <div className="logo">
                  <img src={TotalWorkhourIcon} alt="" srcset="" />
                </div>
                <div className="active_content">
                  <h1>Total Time Hour</h1>
                  <p>0</p>
                </div>
              </div>
            </div>
          </Grid>{" "}
          <Grid item sm={12} md={3}>
            <div className="dashboard_count">
              <div className="active-two active">
                <div className="logo">
                  <img src={TotalClientIcon} alt="" srcset="" />
                </div>
                <div className="active_content">
                  <h1>Total Client</h1>
                  <p>{dashboardresult.totalclient}</p>
                </div>
              </div>
            </div>
          </Grid>{" "}
          <Grid item sm={12} md={3}>
            <div className="dashboard_count">
              <div className="active-three active">
                <div className="logo">
                  <img src={TotalProjectIcon} alt="" srcset="" />
                </div>
                <div className="active_content">
                  <h1>Total Project</h1>
                  <p>{Number(dashboardresult.totalproject)}</p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item sm={12} md={3}>
            <div className="dashboard_count">
              <div className="active-four active">
                <div className="logo">
                  <img src={TotalEmployeeIcon} alt="" srcset="" />
                </div>
                <div className="active_content">
                  <h1>Total Employee</h1>
                  <p>{dashboardresult.totalemployee}</p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </section>
    </>
  );
}

export default DashHeadSection;
