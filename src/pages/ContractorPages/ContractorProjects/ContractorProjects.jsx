import React from "react";
import {Suspense} from "react";
import Layout from "../../../common/dashboard/Layout";
import Loader from "../../../common/Loader";
import Proutes from "../../../common/Proutes";
import TabComp from "../../../common/TabComp";
import ContractorAllProjects from "./Subpages/ContractorAllProjects";
import ContractorActiveProjectsTable from "../../../components/ContractorComponent/ContractorProjects/ContractorActiveProjectsTable";
import ContractorInActiveProjects from "./Subpages/ContractorInActiveProjects";
import SubLayout from "../../../common/dashboard/SubLayout";

function ContractorProjects() {
  const tabsheadr = [
    {title: " all Projects"},
    {title: "Active Projects"},
    {title: "InActive Projects"},
  ];
  const Tabsbody = [
    {
      content: (
        <>
          <ContractorAllProjects />
        </>
      ),
    },
    {
      content: (
        <>
          <ContractorActiveProjectsTable />
        </>
      ),
    },
    {
      content: (
        <>
          <ContractorInActiveProjects />
        </>
      ),
    },
  ];
  return (
    <>
      <div>
        <Suspense fallback={<Loader />}>
          {/* <Proutes> */}
          <SubLayout>
            <TabComp Tabsheader={tabsheadr} TabsBody={Tabsbody} />
          </SubLayout>
          {/* </Proutes> */}
        </Suspense>
      </div>
    </>
  );
}

export default ContractorProjects;
