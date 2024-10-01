import React from "react";
import {Suspense} from "react";
import Layout from "../../../common/dashboard/Layout";
import SubLayout from "../../../common/dashboard/SubLayout";
import Loader from "../../../common/Loader";
import Proutes from "../../../common/Proutes";
import TabComp from "../../../common/TabComp";
import EmployeeProject from "../EmployeeProject/EmployeeProject";
import EmployeeDashboardPage from "./SubPages/EmployeeDashboardPage";

function EmployeeDashboard() {
  const tabsheadr = [{title: "Employee Dashboard"}];
  const Tabsbody = [
    {
      content: (
        <>
          <EmployeeDashboardPage />
        </>
      ),
    },
  ];
  return (
    <>
      <Suspense fallback={<Loader />}>
        {/* <Proutes>  */}
        <SubLayout>
          <TabComp Tabsheader={tabsheadr} TabsBody={Tabsbody} />
        </SubLayout>
        {/* </Proutes> */}
      </Suspense>
    </>
  );
}

export default EmployeeDashboard;
