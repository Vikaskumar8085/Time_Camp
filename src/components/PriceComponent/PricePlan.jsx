import { Container} from "@mui/system";
import {Grid} from "@mui/material"
import React from "react";
import Card from "../../common/Card";

function PricePlan() {
  return (
    <>
      <div className="price_wrapper">
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3} xl={3} xxl={3}>
            1
            </Grid>
            <Grid item xs={12} sm={6} md={3} xl={3} xxl={3}>
          2
            </Grid>
            <Grid item xs={12} sm={6} md={3} xl={3} xxl={3}>
            3
            </Grid>
            <Grid item xs={12} sm={6} md={3} xl={3} xxl={3}>
             4
            </Grid>

          </Grid>
        </Container>
      </div>
    </>
  );
}

export default PricePlan;
