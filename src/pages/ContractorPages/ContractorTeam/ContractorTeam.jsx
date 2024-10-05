import React from "react";
import Layout from "../../../common/dashboard/Layout";
import Proutes from "../../../common/Proutes";
import TabComp from "../../../common/TabComp";
import SubLayout from "../../../common/dashboard/SubLayout";

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
      {/* <Proutes> */}
        {/* <Layout> */}
        <SubLayout>
          <TabComp Tabsheader={tabheader} TabsBody={tabBody} />
        </SubLayout>
        {/* </Layout> */}
      {/* </Proutes> */}
    </>
  );
}

export default ContractorTeam;
