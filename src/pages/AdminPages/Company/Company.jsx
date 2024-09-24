import React, { useState } from "react";
import TabComp from "../../../common/TabComp";
import Layout from "../../../common/dashboard/Layout";
import Proutes from "../../../common/Proutes";
import CompanyPage from "./Subpage/CompanyPage";
import CompanyForm from "../../../components/AdminComponent/Company/CompanyForm";
import Companyregistration from "../../../components/AdminComponent/Company/Companyregistration";

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
              <Companyregistration />
            </div>
          </div>
        </Proutes>
      )}
    </>
  );
}

export default Company;
