import React, {useState} from "react";
import {Helmet} from "react-helmet-async";
import Wrapper from "../common/wrapper/Wrapper";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import TButton from "../common/TButton";
import HomeComponent from "../components/HomeComponent/HomeComponent";
import TestimonialsSection from "../components/HomeComponent/TestimonialsSection";
import CarouselSlider from "../common/Slider/CarouselSlider";
import ServiceSection from "../components/HomeComponent/Service/ServiceSection";

import "./home.style.css";

function Home() {
  const [value, setValue] = useState("");

  const handlesubmit = (e) => {
    e.preventDeafault();
    console.log(value, "values");
  };
  return (
    <>
      <Helmet>
        <title> Time Camp</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Wrapper>
        {/* <CarouselSlider />
        <ServiceSection />
        <HomeComponent />
        <TestimonialsSection /> */}

        {/* <form onSubmit={()=>handlesubmit}>
          <ReactQuill
            theme="snow"
            style={{height: "200px",border:"1px solid black"}}
            value={value}
            onChange={setValue}
          />
          <br />
          <button type="submit">submit</button>
        </form> */}
        <div className="background_design">
          <div className="sidebar">side bar</div>
          <div className="header">header</div>
          <div className="bodycontent">body content</div>
        </div>
      </Wrapper>
    </>
  );
}

export default Home;
