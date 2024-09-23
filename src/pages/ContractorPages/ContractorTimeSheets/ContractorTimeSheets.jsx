import { Grid } from "@mui/material";
import React from "react";
import TabComp from "../../../common/TabComp";
import ContTimesheetPage from "./subpage/ContTimesheetPage";

function ContractorTimeSheets() {
  const tabheader = [{ title: "TimeSheet" }];
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
      <TabComp Tabsheader={tabheader} TabsBody={Tabsbody} />
    </>
  );
}

export default ContractorTimeSheets;
