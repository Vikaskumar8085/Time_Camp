import React from "react";
import {Suspense} from "react";
import Layout from "../../../common/dashboard/Layout";
import SubLayout from "../../../common/dashboard/SubLayout";
import Loader from "../../../common/Loader";
import Proutes from "../../../common/Proutes";
import TabComp from "../../../common/TabComp";

function EmployeeTeam() {
  const tabsheadr = [{title: "Employee Team"}];
  const Tabsbody = [
    {
      content: <>Employee Team</>,
    },
  ];
  return (
    <>
      <Suspense fallback={<Loader />}>
        <SubLayout>
          <TabComp Tabsheader={tabsheadr} TabsBody={Tabsbody} />
        </SubLayout>
      </Suspense>
    </>
  );
}

export default EmployeeTeam;
