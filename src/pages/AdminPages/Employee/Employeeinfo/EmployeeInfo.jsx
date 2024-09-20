import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../../../common/dashboard/Layout";
import Proutes from "../../../../common/Proutes";
import TabComp from "../../../../common/TabComp";

function EmployeeInfo() {
  const { id } = useParams();
  const tabsheader = [{ title: "Employe Info" }, { title: "TimeSheets" }];
  const tabbody = [
    {
      content: (
        <>
          <h1>{id}</h1>
        </>
      ),
    },
  ];

  return (
    <Proutes>
      <Layout>
        <TabComp Tabsheader={tabsheader} TabsBody={tabbody} />
      </Layout>
    </Proutes>
  );
}

export default EmployeeInfo;
