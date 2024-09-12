import React from "react";

function EmployeeHeader() {
  return (
    <>
      <div className="Employee_header">
        <Grid container spacing={2}>
          <Grid item md={3} xs={12} sm={6} xl={3}>
            <div className="Employee_header_box">1</div>
          </Grid>
          <Grid item md={3} xs={12} sm={6} xl={3}>
            <div className="Employee_header_box">1</div>
          </Grid>
          <Grid item md={3} xs={12} sm={6} xl={3}>
            <div className="Employee_header_box">1</div>
          </Grid>
          <Grid item md={3} xs={12} sm={6} xl={3}>
            <div className="Employee_header_box">1</div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default EmployeeHeader;
