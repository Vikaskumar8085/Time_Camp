import { Grid } from "@mui/material";
import React from "react";

function LocationMap() {
  return (
    <div className="contact_map_container">
      <Grid container spacing={1}>
        <Grid item sm={12}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235526.94958915675!2d75.6990360735278!3d22.72420499694239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1725176367246!5m2!1sen!2sin"
            allowfullscreen=""
            style={{ width: "100%", height: "400px" }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>
      </Grid>
    </div>
  );
}

export default LocationMap;
