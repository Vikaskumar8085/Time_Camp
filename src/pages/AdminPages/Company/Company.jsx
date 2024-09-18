import React, { useState } from "react";
import TabComp from "../../../common/TabComp";
import Layout from "../../../common/dashboard/Layout";
import Proutes from "../../../common/Proutes";
import CompanyPage from "./Subpage/CompanyPage";
import CompanyForm from "../../../components/AdminComponent/Company/CompanyForm";

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
            <div className="company_box">
              <CompanyForm/>
            </div>
          </div>
        </Proutes>
      )}
    </>
  );
}

export default Company;
