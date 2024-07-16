import React from "react";
import { Helmet } from "react-helmet-async";
import Image from "../common/Image/Image";
import ReadMore from "../common/ReadMore/ReadMore";
import Input from "../common/Input/Input";
import Card from "../common/Card";
import Wrapper from "../common/wrapper/Wrapper";

function Home() {
  return (
    <>
      <Helmet>
        <title> Time Camp</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Wrapper>
        <h1>home</h1>
      </Wrapper>
    </>
  );
}

export default Home;
