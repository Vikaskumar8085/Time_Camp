import React, {useEffect} from "react";
import Layout from "../../../common/dashboard/Layout";
import Proutes from "../../../common/Proutes";
import TabComp from "../../../common/TabComp";
import ContractorPage from "./subpage/ContractorPage";
import ActiveContractorpage from "./subpage/ActiveContractorpage";
import InActiveContractorpage from "./subpage/InActiveContractorpage";


function Contractor() {
  const Tabheader = [
    {title: "Contractor"},
    {title: "Active Contractor"},
    {title: "InActive Contractor"},
  ];
  const tabbody = [
    {
      content: (
        <>
          <ContractorPage />
        </>
      ),
    },
    {
      content: (
        <>
          <ActiveContractorpage />
        </>
      ),
    },
    {
      content: (
        <>
          <InActiveContractorpage />
        </>
      ),
    },
  ];
  return (
    <>
      <Proutes>
        <Layout>
          <TabComp Tabsheader={Tabheader} TabsBody={tabbody} />
        </Layout>
      </Proutes>
    </>
  );
}

export default Contractor;
