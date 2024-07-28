import React from "react";
import Proutes from "../../common/Proutes";
import Layout from "../../common/dashboard/Layout";

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
