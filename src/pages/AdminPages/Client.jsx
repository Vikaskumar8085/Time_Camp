import React from "react";
import Layout from "../../common/dashboard/Layout";
import Proutes from "../../common/Proutes";
import Button from "../../common/Button";
import ClientDrawer from "../../components/AdminComponent/Clientcomponent/ClientDrawer";
import ClientTab from "../../components/AdminComponent/Clientcomponent/ClientTab";
import "./Clienttab.css";

function Client() {
  const [IsOpen, setOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    {
      title: "Tab 1",
      content: (
        <>
          <h2>Content for Tab 1</h2>
          <p>This is the content of the first tab.</p>
        </>
      ),
    },
    {
      title: "Tab 2",
      content: (
        <>
          <h2>Content for Tab 2</h2>
          <p>This is the content of the second tab.</p>
        </>
      ),
    },
    {
      title: "Tab 1",
      content: (
        <>
          <h2>Content for Tab 3</h2>
          <p>This is the content of the third tab.</p>
        </>
      ),
    },
  ];

  return (
    <>
      <Proutes>
        <Layout>
          <section className="client_wrapper">
            <Button onclick={() => setOpen(true)}>add client</Button>
            {IsOpen && <ClientDrawer IsOpen={IsOpen} setOpen={setOpen} />}
          </section>
          <ClientTab tabs={tabs} />
          <div className="tab-container">
            <div className="tab-header">
              {tabs.map((tab, index) => (
                <div key={index} onClick={() => handleTabChange(index)}>
                  {tab.title}
                </div>
              ))}
            </div>
            <div className="tab-content">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className={`tab-pane ${activeTab === index ? "active" : ""}`}
                >
                  {tab.content}
                </div>
              ))}
            </div>
          </div>
        </Layout>
      </Proutes>
    </>
  );
}

export default Client;
