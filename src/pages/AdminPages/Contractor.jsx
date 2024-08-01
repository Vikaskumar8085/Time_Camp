import React from "react";
import TabComp from "../../common/TabComp";
import Proutes from "../../common/Proutes";
import Layout from "../../common/dashboard/Layout";

function Contractor() {
  const tabsheadr = [{ title: "Employee" }, { title: "Employee Details" }];
  const Tabsbody = [
    {
      content: (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            provident recusandae adipisci praesentium quidem sit aliquid minus
            commodi quae quis corrupti, dolores, non nobis accusantium
            assumenda, qui veritatis optio reiciendis.
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
    <>
      <Proutes>
        <Layout>
          <TabComp Tabsheader={tabsheadr} TabsBody={Tabsbody} />
        </Layout>
      </Proutes>
    </>
  );
}

export default Contractor;
