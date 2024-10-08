import React from "react";
import {Suspense} from "react";
import Layout from "../../../common/dashboard/Layout";
import Loader from "../../../common/Loader";
import Proutes from "../../../common/Proutes";
import TabComp from "../../../common/TabComp";
import RolePages from "./subPages/RolePages";
import DesignationPages from "./subPages/DesignationPages";
import DepartmentPages from "./subPages/DepartmentPages";
function Settings() {
  React.useEffect(() => {
    if (!localStorage.getItem("company")) {
      window.location.href = "/company";
    }
  });

  const tabsheadr = [
    {title: "Role"},
    {title: "Designation"},
    {title: "Department"},
  ];
  const Tabsbody = [
    {
      content: (
        <>
          <RolePages />
        </>
      ),
    },
    {
      content: (
        <>
          <DesignationPages />
        </>
      ),
    },
    {
      content: (
        <>
          <DepartmentPages />
        </>
      ),
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
