import React from "react";
import { Grid } from "@mui/material";
import Input from "../../common/Input/Input";
import Button from "../../common/Button";

function Howcanwehelp() {
  return (
    <>
      <div className="howcanwehelp_wrapper">
        <Grid container spacing={4}>
          <Grid item md={6} display={{ sm: "none", md: "block" }}>
            <div className="howcanwehelp_left_box">
              <h1> Get in Touch with Us</h1>
              <p>
                if you Have any kind of questions Either about our company
                services or some other. please feel free to contact us and
                message Us.
              </p>
            </div>
          </Grid>
          <Grid item md={6}>
            <div className="howcanwehelp_right_box">
              <form>
                <Grid container spacing={1}>
                  <Grid item sm={12}>
                    <Input
                      labelText={"Name"}
                      placeholder={"Please enter your Name"}
                    />
                  </Grid>
                  <Grid item sm={12}>
                    <Input
                      labelText={"Email"}
                      placeholder={"Please enter your Email Address"}
                    />
                  </Grid>
                  <Grid item sm={12}>
                    <Input
                      labelText={"Subject"}
                      placeholder={"Please enter your Subject"}
                    />
                  </Grid>
                  <Grid item sm={12}>
                    <textarea
                      cols={2}
                      placeholder={"Please Enter Your Message"}
                      rows={10}
                      style={{ width: "100%", margin: "auto" }}
                    />
                  </Grid>
                  <Grid item sm={12}>
                    <Button className={"form_button"}>submit</Button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Howcanwehelp;
