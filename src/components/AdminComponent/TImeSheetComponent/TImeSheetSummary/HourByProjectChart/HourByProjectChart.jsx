import React from "react";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

import moment from "moment";

function HourByProjectChart() {
  const totalprojects = useSelector(
    (state) => state.charts.totalprojectscharts
  );

  const projects = [
    {
      Project_Name: "Project A",
      Start_Date: "2024-01-01",
      End_Date: "2024-01-15",
    },
    {
      Project_Name: "Project B",
      Start_Date: "2024-01-10",
      End_Date: "2024-01-25",
    },
    {
      Project_Name: "Project C",
      Start_Date: "2024-02-01",
      End_Date: "2024-02-10",
    },
  ];
  const data = projects.map((project) => {
    const startDate = new Date(project.Start_Date);
    const endDate = new Date(project.End_Date);
    const duration = Math.abs(endDate - startDate) / (1000 * 60 * 60 * 24); // Duration in days
    return {
      name: project.Project_Name,
      duration: duration,
    };
  });

  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="duration" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default HourByProjectChart;
