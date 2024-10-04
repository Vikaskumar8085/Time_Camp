import React from "react";
import Layout from "../../../common/dashboard/Layout";
import Proutes from "../../../common/Proutes";
import TabComp from "../../../common/TabComp";

function ContractorTeam() {
  const tabheader = [
    {
      title: "Contractor Team",
    },
  ];

  const tabBody = [
    {
      content: <>contractor team </>,
    },
  ];

  return (
    <>
      <Proutes>
        {/* <Layout> */}
          <TabComp Tabsheader={tabheader} TabsBody={tabBody} />
        {/* </Layout> */}
      </Proutes>
    </>
  );
}

export default ContractorTeam;
