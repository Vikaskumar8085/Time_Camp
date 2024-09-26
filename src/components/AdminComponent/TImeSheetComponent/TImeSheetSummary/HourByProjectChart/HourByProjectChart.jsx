import React from "react";
import {useSelector} from "react-redux";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import moment from "moment";

function HourByProjectChart() {
  const totalprojects = useSelector(
    (state) => state.charts.totalprojectscharts
  );
  const dateFormatter = (date) => {
    // return moment(date).unix();
    return moment(date).format("DD/MM/YY HH:mm");
  };

  const startdata = totalprojects.map((item) => item?.Start_Date);
  const enddata = totalprojects.map((item) => item?.End_Date);
  const Projectname = totalprojects.map((item) => item?.Project_Name);

  console.log(totalprojects, "totalprojects");
  const data = [
    {
      name: totalprojects?.Project_Name,
      uv: startdata,
      pv: enddata,
    },
  ];
  return (
    <ResponsiveContainer width={"100%"} height={400}>
      <BarChart
        width={730}
        height={250}
        data={totalprojects}
        tickFormatter={dateFormatter}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Projectname" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="startdata" fill="#8884d8" />
        <Bar dataKey="enddata" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default HourByProjectChart;
