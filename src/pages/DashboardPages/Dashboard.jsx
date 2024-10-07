import React from "react";
import Proutes from "../../common/Proutes";
import Layout from "../../common/dashboard/Layout";
import TabComp from "../../common/TabComp";
import TimeSheet from "./SubPage/DashboardSubPages/TimeSheet";
import Project from "./SubPage/DashboardSubPages/Project";
import DashHeadSection from "../../components/Dashboard/dashComponent/DashHeadSection";
import DashboardCharts from "./SubPage/DashboardSubPages/Dashboards/DashboardCharts";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setLoader} from "../../redux/slices/loaderSlice";
import {dashboardcounterapicall} from "../../apiservice/admin/dashboardapiservice";
import {setDashboardCounter} from "../../redux/slices/dashboardSlice/dashboardSlice";

function Dashboard() {
  const dispatch = useDispatch();
  const dashboardhandler = async () => {
    try {
      dispatch(setLoader(true));
      const response = await dashboardcounterapicall();
      if (response.success) {
        dispatch(setLoader(false));
        dispatch(setDashboardCounter(response.result));
      }
    } catch (error) {
      dispatch(setLoader(false));
      console.log(error.message);
    }
  };

  useEffect(() => {
    dashboardhandler();

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
