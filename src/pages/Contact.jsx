import React from "react";
import { Helmet } from "react-helmet-async";

import Wrapper from "../common/wrapper/Wrapper";
import ContactGetIntouch from "../components/ContactComponent/ContactGetIntouch";
import ContactHead from "../components/ContactComponent/ContactHead";
import ContactNewsLetter from "../components/ContactComponent/ContactNewsLetter/ContactNewsLetter";
import LocationMap from "../components/ContactComponent/LocationMap";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Wrapper>
        <ContactHead />
        <ContactGetIntouch />
        {/* <ContactNewsLetter /> */}
        <LocationMap />
      </Wrapper>
    </>
  );
}

export default Contact;
