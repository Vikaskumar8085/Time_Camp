import React, { useEffect } from "react";
import Layout from "../../../common/dashboard/Layout";
import Proutes from "../../../common/Proutes";
import Button from "../../../common/Button";
import EmployeeDrawer from "../../../components/AdminComponent/EmployeeComponent/EmployeeDrawer";
import TabComp from "../../../common/TabComp";
import { setLoader } from "../../../redux/slices/loaderSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  CreateEmployeeApiCall,
  EditEmployeeApiCall,
  GetAllEmployeeApiCall,
  RemoveEmployeeApiCall,
} from "../../../apiservice/admin";
import toast from "react-hot-toast";
import {
  setEmployee,
  setSingleEmployee,
} from "../../../redux/slices/Employee/EmployeeSlice";
import moment from "moment";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import ActiveEmployee from "./EmployeeSubPages/ActiveEmployee";
import InActiveEmployee from "./EmployeeSubPages/InActiveEmployee";
import Employeepage from "./EmployeeSubPages/Employeepage";

function Employee() {
  const dispatch = useDispatch();
  const EmployeeItems = useSelector((state) => state?.employee?.EmployeeValues);
  const ESItems = useSelector((state) => state?.employee?.EmployeeSingleValues);
  console.log(ESItems, "EmployeeValues");
  const [IsOpen, setOpen] = React.useState(false);

  // Create Employee
  const EmployeeHandleSubmit = async (value) => {
    try {
      dispatch(setLoader(true));
      const resp = await CreateEmployeeApiCall(value);
      console.log(resp, "resp");
      if (resp?.status === 201) {
        setOpen(false);
        GetAllEmployeeData();
        dispatch(setLoader(false));
        toast.success("data created successfully");
      }
    } catch (error) {
      dispatch(setLoader(false));
      toast.error(error?.response?.data);
    }
  };

  // GetAllEmployee

  const GetAllEmployeeData = async () => {
    try {
      dispatch(setLoader(true));
      const response = await GetAllEmployeeApiCall();
      console.log(response, "");
      if (response.status === 200) {
        dispatch(setEmployee(response.data));
        dispatch(setLoader(false));
      }
    } catch (error) {
      dispatch(setLoader(true));
      console.log(error?.response?.message);
    }
  };

  // EmployeehandleDelete

  const EmployeehandleDelete = async (value) => {
    try {
      dispatch(setLoader(true));
      const response = await RemoveEmployeeApiCall(value);
      console.log(response, "response");
      if (response.status === 200) {
        dispatch(setLoader(false));
        toast.success("delete Employee successfully");
        GetAllEmployeeData();
      }
    } catch (error) {
      console.log(error?.response?.data);
      dispatch(setLoader(false));
    }
  };
  // EmployeeEdithandle

  const EmployeeEdithandle = async (items) => {
    setOpen(true);
    dispatch(setSingleEmployee(items));
  };

  // Update Employee handle

  const UpdateEmployeeHandle = async (value) => {
    try {
      const Val = {
        id: ESItems._id,
        payload: value,
      };
      console.log(Val, "Value");

      dispatch(setLoader(true));

      const response = await EditEmployeeApiCall(Val);
      if (response.status === 200) {
        dispatch(setLoader(false));
        GetAllEmployeeData();
        setOpen(false);
        dispatch(setSingleEmployee(null));
        toast.success("Employee Update Successfully");
      }
    } catch (error) {
      dispatch(setLoader(false));

      console.log(error?.response?.data);
    }
  };

  useEffect(() => {
    GetAllEmployeeData();
  }, []);

  const tabsheadr = [
    { title: "Employee" },
    { title: "Active Employee" },
    { title: "InActive Employee" },
  ];
  const Tabsbody = [
    {
      content: (
        <>
          <section className="Employee_wrapper">
            <Button onclick={() => setOpen(true)}>add Employee</Button>
            {IsOpen && (
              <EmployeeDrawer
                IsOpen={IsOpen}
                setOpen={setOpen}
                EmployeeHandleSubmit={EmployeeHandleSubmit}
                ESItems={ESItems}
                UpdateEmployeeHandle={UpdateEmployeeHandle}
              />
            )}
          </section>
          <Employeepage/>
        </>
      ),
    },
    {
      content: (
        <>
          <ActiveEmployee />
        </>
      ),
    },
    {
      content: (
        <>
          <InActiveEmployee />
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
export default Employee;
