import React, { useEffect } from "react";
import Layout from "../../../common/dashboard/Layout";
import Proutes from "../../../common/Proutes";
import Button from "../../../common/Button";
import EmployeeDrawer from "../../../components/AdminComponent/EmployeeComponent/EmployeeDrawer";
import TabComp from "../../../common/TabComp";
import { setLoader } from "../../../redux/slices/loaderSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  setEmployee,
  setSingleEmployee,
} from "../../../redux/slices/Employee/EmployeeSlice";
import ActiveEmployee from "./EmployeeSubPages/ActiveEmployee";
import InActiveEmployee from "./EmployeeSubPages/InActiveEmployee";
import Employeepage from "./EmployeeSubPages/Employeepage";
import {
  addemployeeapicall,
  fetchemployeedataapicall,
} from "../../../apiservice/admin/employeeapiservice";

function Employee() {
  const dispatch = useDispatch();
  const fetchemployees = useSelector(
    (state) => state?.employee?.EmployeeValues
  );
  const ESItems = useSelector((state) => state?.employee?.EmployeeSingleValues);
  const [IsOpen, setOpen] = React.useState(false);

  // Create Employee
  const EmployeeHandleSubmit = async (value) => {
    try {
      dispatch(setLoader(true));
      const resp = await addemployeeapicall(value);
      console.log(value, "resp");
      if (resp.success) {
        setOpen(false);
        getallemployee();
        dispatch(setLoader(false));
        toast.success(resp?.message);
      }
    } catch (error) {
      dispatch(setLoader(false));
      toast.error(error?.response?.data?.message);
    }
  };

  // GetAllEmployee

  const getallemployee = async () => {
    try {
      dispatch(setLoader(true));
      const response = await fetchemployeedataapicall();
      console.log(response, "");
      if (response.success) {
        dispatch(setEmployee(response.result));
        dispatch(setLoader(false));
        toast.success(response?.message);
      }
    } catch (error) {
      dispatch(setLoader(true));
      console.log(error?.response?.message);
    }
  };

  // EmployeehandleDelete

  const EmployeehandleDelete = async (value) => {
    try {
      // dispatch(setLoader(true));
      // const response = await console.log(response, "response");
      // if (response.status === 200) {
      //   dispatch(setLoader(false));
      //   toast.success("delete Employee successfully");
      //   GetAllEmployeeData();
      // }
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
      // const Val = {
      //   id: ESItems._id,
      //   payload: value,
      // };
      // console.log(Val, "Value");
      // dispatch(setLoader(true));
      // const response = await EditEmployeeApiCall(Val);
      // if (response.status === 200) {
      //   dispatch(setLoader(false));
      //   GetAllEmployeeData();
      //   setOpen(false);
      //   dispatch(setSingleEmployee(null));
      //   toast.success("Employee Update Successfully");
      // }
    } catch (error) {
      dispatch(setLoader(false));

      console.log(error?.response?.data);
    }
  };

  const handleOpen = (value) => {
    console.log(value, "vlaue");
    setOpen(true);
  };



  useEffect(() => {
    getallemployee();
    if (!localStorage.getItem("company")) {
      window.location.href = "/company";
    }
  }, [0]);

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
          <Employeepage
            handleOpen={handleOpen}
            fetchemployees={fetchemployees}
          />
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
