import React from "react";
import {Suspense} from "react";
import Layout from "../../../common/dashboard/Layout";
import SubLayout from "../../../common/dashboard/SubLayout";
import Loader from "../../../common/Loader";
import Proutes from "../../../common/Proutes";
import TabComp from "../../../common/TabComp";
import EmployeeTimesheetPage from "./Subpages/EmployeeTimesheetPage";

function EmployeeTimeSheet() {
  const tabsheadr = [{title: "Employee TimeSheet"}];
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
        <SubLayout>
          <TabComp Tabsheader={tabsheadr} TabsBody={Tabsbody} />
        </SubLayout>
        {/* </Proutes> */}
      </Suspense>
    </>
  );
}

export default EmployeeTimeSheet;
