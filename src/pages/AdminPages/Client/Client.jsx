import React, {useEffect} from "react";
import Proutes from "../../../common/Proutes";
import Layout from "../../../common/dashboard/Layout";
import TabComp from "../../../common/TabComp";
import ClientPage from "./ClientSubPages/ClientPage";
import ActiveClients from "./ClientSubPages/ActiveClients";
import InActiveClient from "./ClientSubPages/InActiveClient";
import DeadClients from "./ClientSubPages/DeadClients";

function Client() {
  useEffect(() => {
    if (!localStorage.getItem("company")) {
      window.location.href = "/company";
    }
  });

  const TabsHeader = [
    {
      title: "All Clients",
    },
    {title: "Active Clients"},
    {title: "InActive Clients"},
    {
      title: "Dead Clients",
    },
  ];

  const Tabsbody = [
    {
      content: (
        <>
          <ClientPage />
        </>
      ),
    },
    {
      content: (
        <>
          <ActiveClients />
        </>
      ),
    },
    {
      content: (
        <>
          <InActiveClient />
        </>
      ),
    },
    {
      content: (
        <>
          <DeadClients />
        </>
      ),
    },
  ];

  return (
    <>
      <Proutes>
        <Layout>
          <TabComp Tabsheader={TabsHeader} TabsBody={Tabsbody} />
        </Layout>
      </Proutes>
    </>
  );
}

export default Client;
