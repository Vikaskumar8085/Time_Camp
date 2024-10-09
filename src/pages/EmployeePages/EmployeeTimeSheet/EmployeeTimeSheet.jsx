import React from "react";
import {Suspense} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  fetchemployeeprojects,
  fetchemployeetimesheetdataapicall,
} from "../../../apiservice/employee/employeeprojectapiservice";
import Layout from "../../../common/dashboard/Layout";
import SubLayout from "../../../common/dashboard/SubLayout";
import Loader from "../../../common/Loader";
import Proutes from "../../../common/Proutes";
import TabComp from "../../../common/TabComp";
import {
  setFetchemployeetimesheet,
  setFilltimesheetprojects,
} from "../../../redux/employeeslices/employeeTimeSheets/employeetimesheetslice";
import {setLoader} from "../../../redux/slices/loaderSlice";
import EmployeeTimesheetPage from "./Subpages/EmployeeTimesheetPage";

function EmployeeTimeSheet() {
  const dispatch = useDispatch();

  // fetch employee timesheet data

  const fetchemployeetimesheethandler = async () => {
    try {
      dispatch(setLoader(true));
      const response = await fetchemployeetimesheetdataapicall();
      if (response.success) {
        dispatch(setFetchemployeetimesheet(response.result));
        dispatch(setLoader(false));
      }
    } catch (error) {
      console.log(error?.message);
      dispatch(setLoader(false));
    }
  };

  // fetch projects
  const fetchprojecthandler = async () => {
    try {
      dispatch(setLoader(true));
      const response = await fetchemployeeprojects();
      if (response.success) {
        dispatch(setFilltimesheetprojects(response.result));
        dispatch(setLoader(false));
      }
    } catch (error) {
      dispatch(setLoader(false));
      console.log(error?.message);
    }
  };

  React.useEffect(() => {
    fetchprojecthandler();
    fetchemployeetimesheethandler();
  }, [0]);

  const tabsheadr = [{title: "Employee TimeSheet"}];
  const Tabsbody = [
    {
      content: (
        <>
          <EmployeeTimesheetPage />
        </>
      ),
    },
  ];
  return (
    <>
      <Suspense fallback={<Loader />}>
        {/* <Proutes> */}
        <SubLayout>
          <TabComp Tabsheader={tabsheadr} TabsBody={Tabsbody} />
        </SubLayout>
        {/* </Proutes> */}
      </Suspense>
    </>
  );
}

export default EmployeeTimeSheet;
