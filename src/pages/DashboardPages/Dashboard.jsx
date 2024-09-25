import React from "react";
import Proutes from "../../common/Proutes";
import Layout from "../../common/dashboard/Layout";
import TabComp from "../../common/TabComp";
import TimeSheet from "./SubPage/DashboardSubPages/TimeSheet";
import Project from "./SubPage/DashboardSubPages/Project";
import DashHeadSection from "../../components/Dashboard/dashComponent/DashHeadSection";
import DashboardCharts from "./SubPage/DashboardSubPages/Dashboards/DashboardCharts";
import {useEffect} from "react";

function Dashboard() {
  useEffect(() => {
    if (!localStorage.getItem("company")) {
      window.location.href = "/company";
    }
  }, [0]);

  const tabsheadr = [
    {title: "Dashboard"},
    {title: "TimeSheet"},
    {title: "Project"},
  ];
  const Tabsbody = [
    {
      content: (
        <>
          {/* dashboard header section */}
          <DashHeadSection />
          <DashboardCharts />
        </>
      ),
    },
    {
      content: (
        <>
          <TimeSheet />
        </>
      ),
    },
    {
      content: (
        <>
          <Project />
        </>
      ),
    },
  ];

  return (
    <Proutes>
      <Layout>
        <TabComp Tabsheader={tabsheadr} TabsBody={Tabsbody} />
      </Layout>
    </Proutes>
  );
}

export default Dashboard;
