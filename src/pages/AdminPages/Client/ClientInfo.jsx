import React from "react";
import {useEffect} from "react";
import toast from "react-hot-toast";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {
  fetchclientprojectsapicall,
  fetchsingleclientapicall,
} from "../../../apiservice/admin/clientapiservice";
import Layout from "../../../common/dashboard/Layout";
import Proutes from "../../../common/Proutes";
import TabComp from "../../../common/TabComp";
import {
  setClientProfile,
  setClientProjects,
} from "../../../redux/slices/clientslice/clientinfoslice";
import {setLoader} from "../../../redux/slices/loaderSlice";
import ClientInfoPage from "./clientinfosubpages/ClientInfoPage";

function ClientInfo() {
  const {id} = useParams();
  const dispatch = useDispatch();

  // get client information
  const getclientinformation = async () => {
    try {
      dispatch(setLoader(true));
      const response = await fetchsingleclientapicall(id);
      if (response.success) {
        dispatch(setLoader(false));
        dispatch(setClientProfile(response.result));
        toast.success(response.message);
      }
    } catch (error) {
      dispatch(setLoader(false));
      toast.error(error?.message);
    }
  };
  // get client projects

  const fetchclientprojecthandler = async () => {
    try {
      dispatch(setLoader(true));
      const response = await fetchclientprojectsapicall(id);
      // console.log(response, "???????????????????????????????????????????????????? colien info");

      if (response.success) {
        dispatch(setLoader(false));
        dispatch(setClientProjects(response.result));
        toast.success(response.message);
      }
      console.log("fetch client project");
    } catch (error) {
      dispatchEvent(setLoader(false));
      toast.error(error?.message);
    }
  };

  useEffect(() => {
    getclientinformation();
    fetchclientprojecthandler();
  }, [0]);

  const tabsheader = [{title: "client info"}, {title: "client Timesheet"}];
  const tabsbody = [
    {
      content: (
        <>
          <ClientInfoPage />
        </>
      ),
    },
    {content: <>tabsdf</>},
  ];

  return (
    <>
      <Proutes>
        <Layout>
          <TabComp Tabsheader={tabsheader} TabsBody={tabsbody} />
        </Layout>
      </Proutes>
    </>
  );
}

export default ClientInfo;
