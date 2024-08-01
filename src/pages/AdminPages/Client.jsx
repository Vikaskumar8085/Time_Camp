import React from "react";
import Layout from "../../common/dashboard/Layout";
import Proutes from "../../common/Proutes";
import Button from "../../common/Button";
import ClientDrawer from "../../components/AdminComponent/Clientcomponent/ClientDrawer";
import TabComponent from "../../common/TabComponent";
import TabComp from "../../common/TabComp";

function Client() {
  const [IsOpen, setOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const tabsheadr = [{ title: "Clients" }, { title: "Client Block" }];
  const Tabsbody = [
    {
      content: (
        <>
          <section className="client_wrapper">
            <Button onclick={() => setOpen(true)}>add client</Button>
            {IsOpen && <ClientDrawer IsOpen={IsOpen} setOpen={setOpen} />}
          </section>
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
    <>
      <Proutes>
        <Layout>
          <TabComp Tabsheader={tabsheadr} TabsBody={Tabsbody} />
        </Layout>
      </Proutes>
    </>
  );
}

export default Client;
