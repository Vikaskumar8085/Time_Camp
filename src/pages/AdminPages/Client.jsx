import React from "react";
import Layout from "../../common/dashboard/Layout";
import Proutes from "../../common/Proutes";
import Button from "../../common/Button";
import ClientDrawer from "../../components/AdminComponent/Clientcomponent/ClientDrawer";
import TabComponent from "../../common/TabComponent";

function Client() {
  const [IsOpen, setOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    {
      title: "Add Client",
      content: (
        <>
          {" "}
          <section className="client_wrapper">
            <Button onclick={() => setOpen(true)}>add client</Button>
            {IsOpen && <ClientDrawer IsOpen={IsOpen} setOpen={setOpen} />}
          </section>
        </>
      ),
    },
    {
      title: "Tab 2",
      content: (
        <>
          <h1>hello</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam non
            perferendis eum, perspiciatis nesciunt officiis facilis illum animi
            porro vero, dicta at modi voluptates quas vel facere praesentium
            consequatur recusandae.
          </p>
        </>
      ),
    },
  ];
  return (
    <>
      <Proutes>
        <Layout>
          <TabComponent tabs={tabs} />
        </Layout>
      </Proutes>
    </>
  );
}

export default Client;
