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
import Input from "../../common/Input/Input";

function Client() {
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
                  <Tab label="All Client" value="1" />
                  <Tab label="Remove Client" value="2" />
                  <Tab label="Clients" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Button size="10" variant="contained" onClick={toggleDrawer(true)} primary>
                  Add Client
                </Button>
                <Drawer
                  anchor="right"
                  open={open}
                  onClose={toggleDrawer(false)}
                >
                  <form>
                    <Input type={"text"} />
                    <Input type={"text"} />
                    <Input type={"text"} />
                    <Button>submit</Button>
                  </form>
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

export default Client;
