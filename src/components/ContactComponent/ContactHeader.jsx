import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { CiPhone } from "react-icons/ci";

function ContactHeader() {
  return (
    <div className="contact_header">
      <Container>
        <Grid container spacing={3}>
          <Grid item md={4} xs={12} sm={6}>
            <section className="contact-box contact-section-one">
              <div className="contact-icons">
                <CiPhone />
              </div>
              <div className="contact-content">
                <h1>Mobile No</h1>
                <p>918856216422</p>
              </div>
            </section>
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <section className="contact-box contact-section-two">
              <div className="contact-icons">
                <CiPhone />
              </div>
              <div className="contact-content">
                <h1>Mobile No</h1>
                <p>918856216422</p>
              </div>
            </section>
          </Grid>

          <Grid item md={4} xs={12} sm={6}>
            <section className="contact-box contact-section-four">
              <div className="contact-icons">
                <CiPhone />
              </div>
              <div className="contact-content">
                <h1>Mobile No</h1>
                <p>918856216422</p>
              </div>
            </section>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ContactHeader;
