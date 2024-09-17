import React, { useState } from "react";
import TabComp from "../../../common/TabComp";
import Layout from "../../../common/dashboard/Layout";
import Proutes from "../../../common/Proutes";
import CompanyPage from "./Subpage/CompanyPage";

function Company() {
  const TabHeader = [{ title: "Company" }];
  const Tabsbody = [
    {
      content: (
        <>
          <CompanyPage />
        </>
      ),
    },
  ];
  return (
    <>
      {localStorage.getItem("company") ? (
        <Proutes>
          <Layout>
            <TabComp Tabsheader={TabHeader} TabsBody={Tabsbody} />
          </Layout>
        </Proutes>
      ) : (
        <Proutes>
          <div className="company_wrapper">
            <div className="company_box"></div>
          </div>
        </Proutes>
      )}
    </>
  );
}

export default Company;
