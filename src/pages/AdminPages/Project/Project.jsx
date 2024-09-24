import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../../common/dashboard/Layout";
import Proutes from "../../../common/Proutes";
import TabComp from "../../../common/TabComp";

function Project() {
  const { id } = useParams();

  const tabheader = [
    { title: "Project" },
    {
      title: "TimeSheet",
    },
  ];



  return (
    <>
      <Proutes>
        <Layout>
          <h1>{id}</h1>
        </Layout>
      </Proutes>
    </>
  );
}

export default Project;
