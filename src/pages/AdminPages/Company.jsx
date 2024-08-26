import { Drawer } from "@mui/material";
import React, { useState } from "react";
import Button from "../../common/Button";
import Layout from "../../common/dashboard/Layout";
import Proutes from "../../common/Proutes";
import TabComp from "../../common/TabComp";
import CompanyAddDrawer from "../../components/AdminComponent/Company/CompanyAddDrawer";

function Company() {
  const [IsOpen, setOpen] = useState(false);
  const TabHeader = [{ title: "Company" }];
  const Tabsbody = [
    {
      content: (
        <>
          <Button onclick={() => setOpen(true)}>Add Company</Button>
          {IsOpen && <CompanyAddDrawer IsOpen={IsOpen} setOpen={setOpen} />}
        </>
      ),
    },
  ];
  return (
    <>
      <Proutes>
        <Layout>
          <TabComp Tabsheader={TabHeader} TabsBody={Tabsbody} />
        </Layout>
      </Proutes>
    </>
  );
}

export default Company;
