import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

function ContactHeader() {
  return (
    <div className="contact_header">
      <Container>
        <Grid container spacing={2}>
          <Grid item md={3} xs={12} sm={6}>
            1
          </Grid>

          <Grid item md={3} sm={6} xs={12}>
            2
          </Grid>

          <Grid item md={3} sm={6} xs={12}>
            3
          </Grid>
          <Grid  item md={3} xs={12} sm={6}>
            4
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ContactHeader;
