import React, {useState} from "react";
import TabComp from "../../../common/TabComp";
import Layout from "../../../common/dashboard/Layout";
import Proutes from "../../../common/Proutes";
import CompanyPage from "./Subpage/CompanyPage";
import CompanyForm from "../../../components/AdminComponent/Company/CompanyForm";
import Companyregistration from "../../../components/AdminComponent/Company/Companyregistration";
import {useDispatch} from "react-redux";
import {setLoader} from "../../../redux/slices/loaderSlice";
import {addcompanyapicall} from "../../../apiservice/admin/companyapiservice";
import {Navigate} from "react-router-dom";
import toast from "react-hot-toast";

function Company() {
  const dispatch = useDispatch();

  const companyhandlesubmit = async (values) => {
    try {
      dispatch(setLoader(true));
      const response = await addcompanyapicall(values);
      if (response.success) {
        dispatch(setLoader(false));
        window.location.href = "/dashboard";
        toast.success(response?.message);
      }
    } catch (error) {
      dispatch(setLoader(false));
      toast.error(error?.response?.data?.message);
    }
  };



  const TabHeader = [{title: "Company"}];
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
              <Companyregistration companyhandlesubmit={companyhandlesubmit} />
            </div>
          </div>
        </Proutes>
      )}
    </>
  );
}

export default Company;
