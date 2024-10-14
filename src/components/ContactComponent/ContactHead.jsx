import {Grid} from "@mui/material";
import {Container} from "@mui/system";
import React from "react";
import cotactimg from "../../assest/contactus.png";

function ContactHead() {
  return (
    <>
      <div className="contact_head">
        <Container>
          <Grid className="contact_box" container spacing={2}>
            <Grid item md={6} lg={5} xl={4} sm={6} xs={12}>
              <div className="content_head_left_section">
                <div className="contact_head_box">
                  <div className="contact_head_box_conta">
                    <h1>Contact Us</h1>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Blanditiis incidunt temporibus aperiam ipsum harum
                      adipisci velit suscipit perferendis impedit neque
                      nesciunt, commodi tempore! Ducimus necessitatibus sint
                      reiciendis deleniti ea deserunt!
                    </p>
                  </div>
                  <div className="contact_head_box_button">
                    <button>Lern More</button>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item md={6} lg={7} xl={8} sm={6} xs={12}>
              <div className="content_head_right_section">
                <img src={cotactimg} alt="" srcset="" />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default ContactHead;
