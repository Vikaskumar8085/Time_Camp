import React from "react";
import Layout from "../../common/dashboard/Layout";
import Proutes from "../../common/Proutes";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import Drawer from "@mui/material/Drawer";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

function Employee() {
  const [value, setValue] = React.useState("1");
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
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
              <TabPanel value="1">
                <Button onClick={toggleDrawer(true)} primary>
                  Open drawer
                </Button>
                <Drawer
                  anchor="right"
                  open={open}
                  onClose={toggleDrawer(false)}
                >
                  dra
                </Drawer>
              </TabPanel>
              <TabPanel value="2">client</TabPanel>
              <TabPanel value="3">project</TabPanel>
            </TabContext>
          </Box>
        </Layout>
      </Proutes>
    </>
  );
}

export default Employee;
