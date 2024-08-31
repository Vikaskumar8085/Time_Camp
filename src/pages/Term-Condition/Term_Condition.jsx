import { Container, Grid } from "@mui/material";
import React from "react";
import Wrapper from "../../common/wrapper/Wrapper";

function Term_Condition() {
  return (
    <>
      <Wrapper>
        <div className="Term_Wrapper">
          <Container>
            <section className="Term_head">
              <article>
                <h1>Term and Condition</h1>
                <p>
                  Greetings, and thank you for choosing TimeCamp! These Terms
                  and Conditions outline the laws and limitations governing your
                  use of the TimeCamp website. TimeCamp is headquartered in
                  [Insert Location]. By accessing and using our website, you
                  acknowledge and agree to abide by these terms. Please ensure
                  you accept these conditions before using our services. For any
                  questions or further information, feel free to contact us at
                  [Insert Contact Information].
                </p>
              </article>
            </section>
            <Grid container spacing={4}>
              <Grid item sm={12}>
                <div className="term_content">
                  <h1>Cookies</h1>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Expedita aut non aperiam earum minus, assumenda doloribus
                    maxime voluptatibus quae, ex sequi ea omnis perspiciatis quo
                    nesciunt? Consequatur necessitatibus delectus ut.
                  </p>
                </div>
              </Grid>
              <Grid item sm={12}>
                <div className="term_content">
                  <h1>License</h1>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Expedita aut non aperiam earum minus, assumenda doloribus
                    maxime voluptatibus quae, ex sequi ea omnis perspiciatis quo
                    nesciunt? Consequatur necessitatibus delectus ut.
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

export default Term_Condition;
