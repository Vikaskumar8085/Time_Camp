import { Container } from "@mui/system";
import React from "react";
import Wrapper from "../../common/wrapper/Wrapper";
import { Grid } from "@mui/material";

function Privacy_Policy() {
  return (
    <>
      <Wrapper>
        <div className="Privacy_Wrappr">
          <Container>
            <section className="privacy_head">
              <article>
                <h1>Privacy & Policy</h1>
                <p>
                  we are committed to safeguarding your personal information and
                  ensuring transparency in how we handle your data. This privacy
                  policy outlines our practices regarding the collection, use,
                  sharing, and protection of your information. We strive to
                  provide a secure and respectful environment for our users and
                  are dedicated to maintaining the highest standards of data
                  privacy
                </p>
              </article>
            </section>
            <Grid container spacing={2}>
              <Grid item sm={12}>
                <div className="privacy_content">
                  <h1>Data Security Compliance</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae dicta explicabo vel quod. Laudantium, tenetur
                    sapiente officia dolor alias incidunt excepturi, libero
                    explicabo, ab id odio asperiores quod ipsa cum!
                  </p>
                </div>
              </Grid>
              {/* personal information */}
              <Grid item sm={12}>
                <div className="privacy_content">
                  <h1>Use of Personal Information</h1>
                  <p>
                    Personal information is any information that can be used to
                    identify an individual, such as a first and last name, home
                    or other physical address, email address, or other contact
                    details, whether at home or work. Generally speaking, you
                    are not required to give us any personal information about
                    yourself or identify yourself to view the Infograins
                    website.
                  </p>
                  <p>
                    If you choose to provide us with your Personal Information
                    online, we may transfer your information over national
                    boundaries, to third-party service providers of Infograins,
                    and from your country or jurisdiction to other nations or
                    jurisdictions across the world.
                  </p>
                </div>
              </Grid>
              <Grid item sm={12}>
                <div className="privacy_content">
                  <h1>Cookies</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae dicta explicabo vel quod. Laudantium, tenetur
                    sapiente officia dolor alias incidunt excepturi, libero
                    explicabo, ab id odio asperiores quod ipsa cum!
                  </p>
                </div>
              </Grid>
              <Grid item sm={12}>
                <div className="privacy_content">
                  <h1>Disclosure of Information</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae dicta explicabo vel quod. Laudantium, tenetur
                    sapiente officia dolor alias incidunt excepturi, libero
                    explicabo, ab id odio asperiores quod ipsa cum!
                  </p>
                </div>
              </Grid>
              <Grid item sm={12}>
                <div className="privacy_content">
                  <h1>
                    The following circumstances may necessitate that we divulge
                    information
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae dicta explicabo vel quod. Laudantium, tenetur
                    sapiente officia dolor alias incidunt excepturi, libero
                    explicabo, ab id odio asperiores quod ipsa cum!
                  </p>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Wrapper>
    </>
  );
}

export default Privacy_Policy;
