import React from "react";
import { Helmet } from "react-helmet-async";
import Card from "../common/Card";
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
      <Wrapper>
        {/* <GridListTable /> */}
        <Card>
          <InputPhone />
        </Card>
      </Wrapper>
    </>
  );
}

export default Home;
