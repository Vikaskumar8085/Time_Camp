import React, { lazy } from "react";
import Proutes from "../../common/Proutes";
import Layout from "../../common/dashboard/Layout";
import TabComp from "../../common/TabComp";
import {
  Tooltip,
  Area,
  AreaChart,
  XAxis,
  CartesianGrid,
  YAxis,
} from "recharts";
import TimeSheet from "./SubPage/DashboardSubPages/TimeSheet";
import Project from "./SubPage/DashboardSubPages/Project";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
function Dashboard() {
  const tabsheadr = [
    { title: "Dashboard" },
    { title: "TimeSheet" },
    { title: "Project" },
  ];
  const Tabsbody = [
    {
      content: (
        <>
          {/* dashboard header section */}
          <section className="dashboard_wrapper">
            <div className="dashboard_count">
              <div className="active">1</div>
              <div className="active">1</div>
              <div className="active">1</div>
              <div className="active">1</div>
            </div>
          </section>
          <section className="dashboard_Charts">
            <AreaChart
              style={{ overflow: "hidden" }}
              width={730}
              height={250}
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
              <Area
                type="monotone"
                dataKey="pv"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorPv)"
              />
            </AreaChart>
          </section>
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
