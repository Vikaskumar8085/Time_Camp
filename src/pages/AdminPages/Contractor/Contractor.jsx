import React from "react";
import Layout from "../../../common/dashboard/Layout";
import Proutes from "../../../common/Proutes";
import TabComp from "../../../common/TabComp";
import ContractorPage from "./subpage/ContractorPage";

function Contractor() {
  const Tabheader = [{ title: "Contractor" }];
  const tabbody = [{ content: <><ContractorPage/></> }];
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
