import {Grid, Card, CardContent, Typography} from "@mui/material";
import React from "react";

function Employeetimesheetheader() {
  return (
    <section className="employee-timesheet-header-container">
      <Grid container spacing={2}>
        <Grid item md={4} sm={12} xs={12} lg={4}>
          <div className="employee-timesheet-header-box">
            <Card
              sx={{
                minWidth: 275,
                backgroundColor: "#f5f5f5",
                textAlign: "center",
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  Total Hours
                </Typography>
                <Typography variant="h4" color="primary">
                  {0}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Grid>
        <Grid item md={4} sm={12} xs={12} lg={4}>
          <div className="employee-timesheet-header-box">
            <Card
              sx={{
                minWidth: 275,
                backgroundColor: "#f5f5f5",
                textAlign: "center",
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  Total Entries
                </Typography>
                <Typography variant="h4" color="primary">
                  {0}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}

export default Employeetimesheetheader;
