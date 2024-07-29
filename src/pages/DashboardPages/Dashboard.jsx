import React from "react";
import { setLoader } from "../../redux/slices/loaderSlice";
import { useDispatch } from "react-redux";
import Button from "../../common/Button";
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
      <Layout>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                typography: "body6",
                borderColor: "divider",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="dashboard" value="1" />
                <Tab label="client" value="2" />
                <Tab label="project" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">dashboard </TabPanel>
            <TabPanel value="2">client</TabPanel>
            <TabPanel value="3">project</TabPanel>
          </TabContext>
        </Box>
      </Layout>
    </Proutes>
  );
}

export default Dashboard;
