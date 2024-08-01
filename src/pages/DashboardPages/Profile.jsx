import React from "react";
import Layout from "../../common/dashboard/Layout";
import Proutes from "../../common/Proutes";
import TabComp from "../../common/TabComp";

function Profile() {
  const tabsheadr = [{ title: "Profile" }, { title: "Edit Profile" }];
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
    <>
      <Proutes>
        <Layout>
          <TabComp Tabsheader={tabsheadr} TabsBody={Tabsbody} />
        </Layout>
      </Proutes>
    </>
  );
}

export default Profile;
