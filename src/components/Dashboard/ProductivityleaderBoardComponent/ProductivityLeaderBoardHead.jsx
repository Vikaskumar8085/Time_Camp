import { Grid } from "@mui/material";
import React from "react";

function ProductivityLeaderBoardHead() {
  return (
    <>
      <div style={{padding:"10px"}} className="productivityLeaderBoardHead">
        <div style={{margin:"10px 10px"}} className="productivityLeaderBoardHead_title">
          <h3>Productivity LeaderBoard</h3>
        </div>

        <Grid container spacing={4}>
          <Grid item md={3} xs={12} sm={12} xl={3}>
            <div style={{backgroundColor:"white"}} className="productivityLeaderBoard_box">1</div>
          </Grid>
          <Grid item md={3} xs={12} sm={12} xl={3}>
            <div style={{backgroundColor:"white"}} className="productivityLeaderBoard_box">1</div>
          </Grid>
          <Grid item md={3} xs={12} sm={12} xl={3}>
            <div style={{backgroundColor:"white"}} className="productivityLeaderBoard_box">1</div>
          </Grid>
          <Grid item md={3} xs={12} sm={12} xl={3}>
            <div style={{backgroundColor:"white"}} className="productivityLeaderBoard_box">1</div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default ProductivityLeaderBoardHead;
