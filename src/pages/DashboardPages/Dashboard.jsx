import React from "react";
import Proutes from "../../common/Proutes";
import Layout from "../../common/dashboard/Layout";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

function Dashboard() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Proutes>
      <Layout></Layout>
    </Proutes>
  );
}

export default Dashboard;
