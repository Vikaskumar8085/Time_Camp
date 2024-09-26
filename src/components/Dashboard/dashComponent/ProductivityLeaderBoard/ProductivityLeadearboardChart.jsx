import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchprojectchartsapicall} from "../../../../apiservice/admin/chartapiservice";
import {settotalProjectcharts} from "../../../../redux/slices/chartsSlice/chartsSlice";
import {setLoader} from "../../../../redux/slices/loaderSlice";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

// Utility function to format date from ISO to a readable format (e.g., 'YYYY-MM-DD')
// const formatDate = (isoString) => {
//   const date = new Date(isoString);
//   return `${date.getFullYear()}-${(date.getMonth() + 1)
//     .toString()
//     .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
// };

function ProductivityLeadearboardChart() {
  const dispatch = useDispatch();
  const totalprojects = useSelector(
    (state) => state.charts.totalprojectscharts
  );
  console.log(totalprojects, "project data");

  const getEmployeeTimeHourData = async () => {
    try {
      dispatch(setLoader(true));
      const response = await fetchprojectchartsapicall();
      console.log(response, "API response for bar chart");
      if (response.success) {
        dispatch(setLoader(false));
        dispatch(settotalProjectcharts(response.result));
      }
    } catch (error) {
      console.log(error?.message, "Error fetching data");
    }
  };

  useEffect(() => {
    getEmployeeTimeHourData();
  }, []);

  const data = [
    {
      subject: "Math",
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: "Chinese",
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "English",
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "Geography",
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: "Physics",
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: "History",
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </>
  );
}

export default ProductivityLeadearboardChart;
