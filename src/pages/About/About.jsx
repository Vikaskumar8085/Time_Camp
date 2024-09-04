import React from "react";
import Wrapper from "../../common/wrapper/Wrapper";
import AboutHead from "../../components/AboutComponent/AboutHead";
import FAQ from "../../components/AboutComponent/FAQ";
import FrequentlyAskedQuestions from "../../components/AboutComponent/FrequentlyAskedQuestions";
import OurValues from "../../components/AboutComponent/OurValues/OurValues";
import OurVision from "../../components/AboutComponent/OurVision";
import TeamSection from "../../components/AboutComponent/TeamSection";

function About() {
  return (
    <Wrapper>
      <AboutHead />
      <OurVision />
      <OurValues />
      <TeamSection />
      <FAQ />
    </Wrapper>
  );
}

export default About;
