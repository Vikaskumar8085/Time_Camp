import {Grid} from "@mui/material";
import React from "react";
import {Suspense} from "react";
import SubLayout from "../../../common/dashboard/SubLayout";
import Loader from "../../../common/Loader";
import TabComp from "../../../common/TabComp";
import ContTimesheetPage from "./subpage/ContTimesheetPage";

function ContractorTimeSheets() {
  const tabheader = [{title: "TimeSheet"}];
  const Tabsbody = [
    {
      content: (
        <>
          <ContTimesheetPage />
        </>
      ),
    },
  ];
  return (
    <>
      <Suspense fallback={<Loader />}>
        <SubLayout>
          <TabComp Tabsheader={tabheader} TabsBody={Tabsbody} />
        </SubLayout>
      </Suspense>
    </>
  );
}

export default ContractorTimeSheets;
