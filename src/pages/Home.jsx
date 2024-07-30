import React from "react";
import { Helmet } from "react-helmet-async";
import InputPhone from "../common/Input/InputPhone";

import Wrapper from "../common/wrapper/Wrapper";

// import GridListTable from "./GridListTable";

function Home() {
  return (
    <>
      <Helmet>
        <title> Time Camp</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Wrapper>{/* <GridListTable /> */}
      <InputPhone/>
      </Wrapper>
    </>
  );
}

export default Home;
