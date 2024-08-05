import React from "react";
import Proutes from "../../common/Proutes";
import Layout from "../../common/dashboard/Layout";
import TabComp from "../../common/TabComp";

function Dashboard() {
  const tabsheadr = [{ title: "Dashboard" }];
  const Tabsbody = [
    {
      content: (
        <>
          {/* dashboard header section */}
          <section className="dashboard_wrapper">
            <div className="dashboard_count">
              <div className="active">1</div>
              <div className="active">1</div>
              <div className="active">1</div>
              <div className="active">1</div>
            </div>
          </section>

          <section className="dashboard_Charts"></section>
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
