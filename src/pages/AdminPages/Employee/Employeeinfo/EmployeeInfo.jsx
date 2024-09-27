import React from "react";
import {useEffect} from "react";
import toast from "react-hot-toast";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {
  fetchemployeeprojectsapicall,
  fetchsingleemployeeapicall,
} from "../../../../apiservice/admin/employeeapiservice";
import Layout from "../../../../common/dashboard/Layout";
import Proutes from "../../../../common/Proutes";
import TabComp from "../../../../common/TabComp";
import {
  setEmployeeprofile,
  setEmployeeprojects,
} from "../../../../redux/slices/Employee/employeeinfoslice";
import {setLoader} from "../../../../redux/slices/loaderSlice";
import EmployeinfoPage from "./Subpage/EmployeinfoPage";

function EmployeeInfo() {
  const {id} = useParams();
  const dispatch = useDispatch();
  // get single employee information

  const getemployeeinformation = async () => {
    try {
      dispatch(setLoader(true));
      const response = await fetchsingleemployeeapicall(id);
      console.log(response, "employee information");
      if (response.success) {
        dispatch(setLoader(false));
        dispatch(setEmployeeprofile(response.result));
      }
    } catch (error) {
      toast.error(error?.response?.message);
      dispatch(setLoader(false));
    }
  };

  // fetch employee projects

  const fetchemployeeproejcts = async () => {
    try {
      dispatch(setLoader(true));
      const response = await fetchemployeeprojectsapicall(id);
      if (response.success) {
        dispatch(setLoader(false));
        dispatch(setEmployeeprojects(response.result));
      }
    } catch (error) {
      toast.error(error?.response?.message);
    }
  };

  useEffect(() => {
    getemployeeinformation();
    fetchemployeeproejcts();
  }, [0]);

  const tabsheader = [{title: "Employe Info"}, {title: "TimeSheets"}];
  const tabbody = [
    {
      content: (
        <>
          <EmployeinfoPage />
        </>
      ),
    },
  ];

  return (
    <Proutes>
      <Layout>
        <TabComp Tabsheader={tabsheader} TabsBody={tabbody} />
      </Layout>
    </Proutes>
  );
}

export default EmployeeInfo;
