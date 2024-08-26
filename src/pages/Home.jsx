import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Wrapper from "../common/wrapper/Wrapper";
import TButton from "../common/TButton";

function Home() {
  return (
    <>
      <Helmet>
        <title> Time Camp</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Wrapper>
        <TButton id="two">Btn</TButton>
      </Wrapper>
    </>
  );
}

export default Home;
