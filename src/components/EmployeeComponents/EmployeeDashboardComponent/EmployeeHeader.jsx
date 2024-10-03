import {Grid, Card, CardContent, Typography} from "@mui/material";
import React from "react";

const SummaryCard = ({title, value}) => (
  <Card variant="outlined" style={{height: "100%"}}>
    <CardContent>
      <Typography variant="h5" component="div" align="center">
        {title}
      </Typography>
      <Typography variant="h6" component="div" align="center">
        {value}
      </Typography>
    </CardContent>
  </Card>
);

function EmployeeHeader() {
  return (
    <>
      <div className="Employee_header">
        <Grid container spacing={2}>
          <Grid item md={3} xs={12} sm={6} xl={3}>
            <div className="Employee_header_box">
              <SummaryCard title="Total Entries" value={0} />
            </div>
          </Grid>
          <Grid item md={3} xs={12} sm={6} xl={3}>
            <div className="Employee_header_box">
              <SummaryCard title="Total Work Hours" value={`${0} hours`} />
            </div>
          </Grid>
          <Grid item md={3} xs={12} sm={6} xl={3}>
            <div className="Employee_header_box">
              <SummaryCard title="Total Work Hours" value={0} />
            </div>
          </Grid>
          <Grid item md={3} xs={12} sm={6} xl={3}>
            <div className="Employee_header_box">
              <SummaryCard title="Total Projects" value={0} />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default EmployeeHeader;
