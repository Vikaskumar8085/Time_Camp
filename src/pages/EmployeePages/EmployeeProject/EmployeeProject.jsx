import React from "react";
import { Suspense } from "react";
import Layout from "../../../common/dashboard/Layout";
import Loader from "../../../common/Loader";
import Proutes from "../../../common/Proutes";
import TabComp from "../../../common/TabComp";
import EmployeeallProjects from "./Subpages/EmployeeallProjects";
import EmployeeActiveprojects from "./Subpages/EmployeeActiveprojects";
import EmployeeInActiveProjects from "./Subpages/EmployeeInActiveProjects";

function EmployeeProject() {
  const tabsheadr = [
    { title: "All Project" },
    { title: "Active Project" },
    { title: "InActive Project" },
  ];
  const Tabsbody = [
    {
      content: (
        <>
          <EmployeeallProjects />
        </>
      ),
    },
    {
      content: (
        <>
          <EmployeeActiveprojects />
        </>
      ),
    },
    {
      content: (
        <>
          {" "}
          <EmployeeInActiveProjects />
        </>
      ),
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
