import React from "react";
import {Suspense} from "react";
import Layout from "../../../common/dashboard/Layout";
import Loader from "../../../common/Loader";
import Proutes from "../../../common/Proutes";
import TabComp from "../../../common/TabComp";
import Dashheader from "../../../components/ContractorComponent/ContractorDashboard/Dashheader";
import ContractorCharts from "../../../components/ContractorComponent/ContractorDashboard/ContractorCharts";
import SubLayout from "../../../common/dashboard/SubLayout";

function ContractorDashboard() {
  const tabsheadr = [{title: "Contractor Dashboard"}];
  const Tabsbody = [
    {
      content: (
        <>
          <Dashheader />
          <ContractorCharts />
        </>
      ),
    },
  ];
  return (
    <>
      <div>
        <Suspense fallback={<Loader />}>
          {/* <Proutes>
            <Layout> */}
          <SubLayout>
            <TabComp Tabsheader={tabsheadr} TabsBody={Tabsbody} />
          </SubLayout>
          {/* </Layout>
          </Proutes> */}
        </Suspense>
      </div>
    </>
  );
}

export default ContractorDashboard;
