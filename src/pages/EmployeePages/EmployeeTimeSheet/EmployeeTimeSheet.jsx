import React from "react";
import { Suspense } from "react";
import Layout from "../../../common/dashboard/Layout";
import Loader from "../../../common/Loader";
import Proutes from "../../../common/Proutes";
import TabComp from "../../../common/TabComp";
import EmployeeTimesheetPage from "./Subpages/EmployeeTimesheetPage";

function EmployeeTimeSheet() {
  const tabsheadr = [{ title: "Employee TimeSheet" }];
  const Tabsbody = [
    {
      content: (
        <>
          <EmployeeTimesheetPage />
        </>
      ),
    },
  ];
  return (
    <>
      <Suspense fallback={<Loader />}>
        {/* <Proutes> */}
        {/* <Layout> */}
        <TabComp Tabsheader={tabsheadr} TabsBody={Tabsbody} />
        {/* </Layout> */}
        {/* </Proutes> */}
      </Suspense>
    </>
  );
}

export default EmployeeTimeSheet;
