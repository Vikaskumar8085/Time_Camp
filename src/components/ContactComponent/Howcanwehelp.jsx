import React from "react";
import { Grid } from "@mui/material";
import Input from "../../common/Input/Input";
import Button from "../../common/Button";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { contactapicall } from "../../apiservice/superadminapis/contactapicall";
import axios from "axios";

function Howcanwehelp() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      Subject: "",
      Dispcription: "",
    },
    onSubmit: async (values) => {
      try {
        console.log("loadder", values);
        const respones = await contactapicall(values);
        console.log(respones, "contact");
        if (respones.success) {
          console.log("message sent successfully");
        }
        formik.resetForm();
      } catch (error) {
        console.log(error?.message);
      }
    },
  });

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
              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={1}>
                  <Grid item sm={12}>
                    <Input
                      labelText={"Name"}
                      placeholder={"Please enter your Name"}
                      {...formik.getFieldProps("Name")}
                    />
                  </Grid>
                  <Grid item sm={12}>
                    <Input
                      labelText={"Email"}
                      placeholder={"Please enter your Email Address"}
                      {...formik.getFieldProps("Email")}
                    />
                  </Grid>
                  <Grid item sm={12}>
                    <Input
                      labelText={"Subject"}
                      placeholder={"Please enter your Subject"}
                      {...formik.getFieldProps("Subject")}
                    />
                  </Grid>
                  <Grid item sm={12}>
                    <textarea
                      cols={2}
                      placeholder={"Please Enter Your Message"}
                      rows={10}
                      id="Dispcription"
                      name="Dispcription"
                      {...formik.getFieldProps("Dispcription")}
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
