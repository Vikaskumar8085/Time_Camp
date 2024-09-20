import React from "react";
import { Suspense } from "react";
import Layout from "../../../common/dashboard/Layout";
import Loader from "../../../common/Loader";
import Proutes from "../../../common/Proutes";
import TabComp from "../../../common/TabComp";

function EmployeeProject() {
  const tabsheadr = [
    { title: "All Project" },
    { title: "Active Project" },
    { title: "InActive Project" },
  ];
  const Tabsbody = [
    {
      content: <>Employee Project</>,
    },
    {
      content: <>Active Project</>,
    },
    {
      content: <> In Active Project</>,
    },
  ];
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Proutes>
          <Layout>
            <TabComp Tabsheader={tabsheadr} TabsBody={Tabsbody} />
          </Layout>
        </Proutes>
      </Suspense>
    </>
  );
}

export default EmployeeProject;
