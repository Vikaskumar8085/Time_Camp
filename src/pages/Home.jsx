import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Wrapper from "../common/wrapper/Wrapper";
import TButton from "../common/TButton";
import HomeComponent from "../components/HomeComponent/HomeComponent";
import TestimonialsSection from "../components/HomeComponent/TestimonialsSection";
import CarouselSlider from "../common/Slider/CarouselSlider";
import ServiceSection from "../components/HomeComponent/Service/ServiceSection";

function Home() {
  return (
    <>
      <Helmet>
        <title> Time Camp</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Wrapper>
        <CarouselSlider />
        <ServiceSection/>
        <HomeComponent />
        <TestimonialsSection />
      </Wrapper>
    </>
  );
}

export default Home;
