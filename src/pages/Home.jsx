import React from "react";
import { Helmet } from "react-helmet-async";
import Wrapper from "../common/wrapper/Wrapper";
import TabComp from "../common/TabComp";
import Loader from "../common/Loader";

// import GridListTable from "./GridListTable";

function Home() {
  // tabstitle
  const tabstitle = [
    {
      title: "one",
    },
    {
      title: "two",
    },
    {
      title: "three",
    },
  ];
  // tabsBody
  const tabsBody = [
    {
      content: "lorem 1",
    },
    {
      content: "lorem 2",
    },

    {
      content: "lorem 3",
    },
  ];
  return (
    <>
    <Loader/>
      <Helmet>
        <title> Time Camp</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Wrapper>
        <TabComp Tabsheader={tabstitle} TabsBody={tabsBody} />
      </Wrapper>
    </>
  );
}

export default Home;
