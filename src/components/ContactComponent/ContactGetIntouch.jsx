import {Grid} from "@mui/material";
import {Container} from "@mui/system";
import React from "react";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import GmailIcon from "../../assest/icons/contactIcons/gmail.png";
import PhoneIcon from "../../assest/icons/contactIcons/phone-call.png";
import Input from "../../common/Input/Input";
import PlaceholderIcon from "../../assest/icons/contactIcons/placeholder.png";

function ContactGetIntouch() {
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
        // const respones = await contactapicall(values);
        // console.log(respones, "contact");
        // if (respones.success) {
        //   console.log("message sent successfully");
        // }
        // formik.resetForm();
      } catch (error) {
        console.log(error?.message);
      }
    },
  });

  return (
    <>
      <section className="contact_get_in_touch">
        <Container>
          <div className="contactgetintouch_box">
            <div className="contactgetintouch_content">
              <div className="contactgetintouch_title">
                <h1>Get In Touch</h1>
              </div>
              <div className="contactgetintouch_paragraph">
                <p>
                  We would love to hear from you, please fill in the form below
                  or mail us your requirements on example@gmail.com
                </p>
              </div>
            </div>
          </div>
        </Container>

        <section className="contactgetintouch_section_two">
          <Container>
            <Grid
              className="contactgetintouch_section_two_box"
              container
              spacing={2}
            >
              <Grid
                className="contact_get_in_touch_section_wrapper"
                item
                md={6}
                sm={6}
                lg={6}
                xs={12}
              >
                <div className="contactgetintouch_section_left_box">
                  <div className="contactgetintouch_section_left_box_lists">
                    <ul>
                      <li>
                        <section
                          data-aos="fade-right"
                          data-aos-easing="ease-in-sine"
                          className="contact-box"
                        >
                          <div className="contact-icons ">
                            <img
                              src={GmailIcon}
                              className={"icons-one"}
                              alt="no-image"
                            />
                          </div>
                          <div className="contact-content">
                            <h1>Email Address</h1>
                            <p>info@ignitivelabs.in</p>
                          </div>
                        </section>
                      </li>

                      <li>
                        <section
                          className="contact-box"
                          data-aos="fade-right"
                          data-aos-easing="ease-in-sine"
                        >
                          <div className="contact-icons icons-two">
                            <img src={PhoneIcon} alt="no-image" />
                          </div>
                          <div className="contact-content">
                            <h1>Mobile No</h1>
                            <p>918856216422</p>
                          </div>
                        </section>
                      </li>
                      <li>
                        <section
                          className="contact-box"
                          data-aos="fade-right"
                          data-aos-easing="ease-in-sine"
                        >
                          <div className="contact-icons icons-three">
                            <img src={PlaceholderIcon} alt="no-image" />
                          </div>
                          <div className="contact-content">
                            <h1>Address</h1>
                            <p>
                              Ignitive Software Labs, 203, plot No 53, Above
                              Destiny Cafe, Near Medanta Hospital, Vijaynagar,
                              Indore (M.P)
                            </p>
                          </div>
                        </section>
                      </li>
                    </ul>
                  </div>
                </div>
              </Grid>
              <Grid item md={6} sm={6} lg={6} xs={12}>
                <div className="contactgetintouch_section_right_box">
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
                          style={{width: "100%", margin: "auto"}}
                        />
                      </Grid>
                      <Grid item sm={12}>
                        <button className={"form_button"}>submit</button>
                      </Grid>
                    </Grid>
                  </form>
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>
      </section>
    </>
  );
}

export default ContactGetIntouch;
