import React from "react";
import {Suspense} from "react";
import Layout from "../../../common/dashboard/Layout";
import Loader from "../../../common/Loader";
import Proutes from "../../../common/Proutes";
import TabComp from "../../../common/TabComp";
function Settings() {
  React.useEffect(() => {
    if (!localStorage.getItem("company")) {
      window.location.href = "/company";
    }
  });

  const tabsheadr = [{title: "Settings"}];
  const Tabsbody = [
    {
      content: <>Settings</>,
    },
  ];
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Proutes>
          <Layout>
            <TabComp Tabsheader={tabsheadr} TabsBody={Tabsbody} />
          </Layout>
        </Proutes>
      </Suspense>
    </>
  );
}

export default Settings;
