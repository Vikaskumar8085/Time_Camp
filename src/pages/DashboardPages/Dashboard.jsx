import React from "react";
import Proutes from "../../common/Proutes";
import Layout from "../../common/dashboard/Layout";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabComp from "../../common/TabComp";

function Dashboard() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabsheadr = [{ title: "Dashboard" }, { title: "Employee Details" }];
  const Tabsbody = [
    {
      content: (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id amet
            repellat animi dolorum quaerat consequuntur velit quisquam
            voluptates? Consequatur aspernatur perferendis corrupti neque error
            rerum eaque eligendi quo et iure?
          </p>
        </>
      ),
    },
    {
      content: (
        <>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
            aspernatur eligendi culpa accusantium quos quisquam facere facilis
            suscipit ipsum, ratione placeat unde distinctio alias, dolor porro
            id! Reprehenderit, aliquid. Doloremque.
          </p>
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
