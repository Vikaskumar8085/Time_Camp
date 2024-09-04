import React from "react";
import { Helmet } from "react-helmet-async";
import Wrapper from "../common/wrapper/Wrapper";
import ContactHead from "../components/ContactComponent/ContactHead";
import ContactHeader from "../components/ContactComponent/ContactHeader";
import ContactNewsLetter from "../components/ContactComponent/ContactNewsLetter/ContactNewsLetter";
import Howcanwehelp from "../components/ContactComponent/Howcanwehelp";
import LocationMap from "../components/ContactComponent/LocationMap";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Wrapper>
        <ContactHead />
        <ContactHeader />
        <Howcanwehelp />
        {/* <ContactNewsLetter /> */}
        <LocationMap />
      </Wrapper>
    </>
  );
}

export default Contact;
