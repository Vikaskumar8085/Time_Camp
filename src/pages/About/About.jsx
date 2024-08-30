import React from "react";
import Wrapper from "../../common/wrapper/Wrapper";
import AboutHead from "../../components/AboutComponent/AboutHead";
import FrequentlyAskedQuestions from "../../components/AboutComponent/FrequentlyAskedQuestions";

function About() {
  return (
    <Wrapper>
      <AboutHead />
      <FrequentlyAskedQuestions />
    </Wrapper>
  );
}

export default About;
