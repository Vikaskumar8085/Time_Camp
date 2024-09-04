import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { CiPhone } from "react-icons/ci";
import GmailIcon from "../../assest/icons/contactIcons/gmail.png";
import PhoneIcon from "../../assest/icons/contactIcons/phone-call.png";
import PlaceholderIcon from "../../assest/icons/contactIcons/placeholder.png";

function ContactHeader() {
  return (
    <div className="contact_header">
      <Container>
        <Grid container spacing={3}>
          <Grid item md={4} xs={12} sm={6}>
            <section className="contact-box contact-section-one">
              <div className="contact-icons ">
                <img src={GmailIcon} className={"icons-one"} alt="no-image" />
              </div>
              <div className="contact-content">
                <h1>Email Address</h1>
                <p>info@ignitivelabs.in</p>
              </div>
            </section>
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <section className="contact-box contact-section-two">
              <div className="contact-icons icons-two">
                <img src={PhoneIcon} alt="no-image" />
              </div>
              <div className="contact-content">
                <h1>Mobile No</h1>
                <p>918856216422</p>
              </div>
            </section>
          </Grid>

          <Grid item md={4} xs={12} sm={6}>
            <section className="contact-box contact-section-four">
              <div className="contact-icons icons-three">
                <img src={PlaceholderIcon} alt="no-image" />
              </div>
              <div className="contact-content">
                <h1>Address</h1>
                <p>
                  Ignitive Software Labs, 203, plot No 53, Above Destiny Cafe,
                  Near Medanta Hospital, Vijaynagar, Indore (M.P)
                </p>
              </div>
            </section>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ContactHeader;
