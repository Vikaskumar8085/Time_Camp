import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { employeeTimeHourApicall } from "../../../../apiservice/admin/chartapiservice";

// Utility function to format date from ISO to a readable format (e.g., 'YYYY-MM-DD')
const formatDate = (isoString) => {
  const date = new Date(isoString);
  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
};

function ProductivityLeadearboardChart() {
  const [data, setData] = useState([]);

  const getEmployeeTimeHourData = async () => {
    try {
      const response = await employeeTimeHourApicall();
      console.log(response, "API response for bar chart");

      if (response.success) {
        // Map the data to ensure "resource" is not null, and format the date
        const formattedData = response.timesheetData.map((item) => ({
          ...item,
          resource: item.resource || "Unknown Resource", // Handle null resources
          day: formatDate(item.day), // Format day from ISO string to 'YYYY-MM-DD'
        }));
        setData(formattedData);
      }
    } catch (error) {
      console.log(error?.message, "Error fetching data");
    }
  };

  useEffect(() => {
    getEmployeeTimeHourData();
  }, []);

  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="resource" />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* Bar for "hours" data */}
        <Bar dataKey="hours" fill="#8884d8" />
        {/* Bar for "day" data */}
        <Bar dataKey="day" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default ProductivityLeadearboardChart;
