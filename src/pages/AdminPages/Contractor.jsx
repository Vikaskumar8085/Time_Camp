import React, { useEffect } from "react";
import TabComp from "../../common/TabComp";
import Proutes from "../../common/Proutes";
import Layout from "../../common/dashboard/Layout";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Button from "../../common/Button";
import ContractorDrawer from "../../components/AdminComponent/ContractoreComponent/ContractorDrawer";
import DesignationForm from "../../components/AdminComponent/Designation/DesignationForm";
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from "../../redux/slices/loaderSlice";
import {
  AddContractorApiCall,
  AddDepartmentApiCall,
  addDesingationApiCall,
  EditContractorApiCall,
  EditDepartmentApiCall,
  EditDesignationApiCall,
  GetAllContractorApiCall,
  GetAllDepartmentApiCall,
  GetAllDesignationApiCall,
  RemoveContractorApiCall,
  RemoveDepartmentApiCall,
  RemoveDesignationApiCall,
} from "../../apiservice/admin";
import toast from "react-hot-toast";
import {
  getDesignation,
  setDesignation,
} from "../../redux/slices/Designation/DesignationSlice";
import DepartmentDrawer from "../../components/AdminComponent/Department/DepartmentDrawer";
import {
  GetDepartmentFunc,
  setDepartment,
} from "../../redux/slices/Department/DepartmentSlice";
import {
  getContractor,
  setContractor,
} from "../../redux/slices/ContractorSlice/contractorSlice";
import moment from "moment";

function Contractor() {
  const dispatch = useDispatch();
  const [IsOpen, setOpen] = React.useState(false);
  const DesignationData = useSelector(
    (state) => state.Designation.DesignationValue
  );
  const Items = useSelector((state) => state.Designation.DesigValue);
  // deartment
  const DepItems = useSelector((state) => state.Department.DepartmentValue);
  const DItems = useSelector((state) => state.Department.Depvalue);
  // deartment

  const ContractorItems = useSelector(
    (state) => state.Contractor.contractorValues
  );

  // contract single items
  const CSItems = useSelector(
    (state) => state.Contractor.singlecontractorvalues
  );

  console.log(CSItems, "getContractor");

  // Add Designation
  const DhandleSubmit = async (values) => {
    try {
      dispatch(setLoader(true));
      const response = await addDesingationApiCall(values);
      if (response) {
        dispatch(setLoader(false));
        setOpen(false);
        GetDesignation();
        toast.success("add data successfully");
      }
      setOpen(false);
    } catch (error) {
      toast.error(error?.response?.message);
      dispatch(setLoader(false));
    }
  };
  // Edit Designation
  const EdithandleSubmit = async (value) => {
    try {
      const Val = {
        id: Items._id,
        payload: value,
      };
      dispatch(setLoader(true));
      const response = await EditDesignationApiCall(Val);
      if (response.status === 200) {
        GetDesignation();
        setOpen(false);
        dispatch(getDesignation(null));
        dispatch(setLoader(false));
        toast.success("Update Data Successfully");
      }
    } catch (error) {
      dispatch(setLoader(false));
      toast.error(error?.response?.message);
    }
  };

  // Delete designation
  const handleDelete = async (value) => {
    try {
      dispatch(setLoader(true));
      const response = await RemoveDesignationApiCall(value);
      console.log(response, "respons");
      if (response.status === 200) {
        dispatch(setLoader(false));
        GetDesignation();
        toast.success(response?.data?.message);
      }
    } catch (error) {
      toast.error(error?.response?.data);
    }
  };

  // Get All Designation
  const GetDesignation = async () => {
    try {
      dispatch(setLoader(true));
      const response = await GetAllDesignationApiCall();
      if (response) {
        dispatch(setLoader(false));
        dispatch(setDesignation(response));
      }
    } catch (error) {
      toast.error(error?.response?.message);
      dispatch(setLoader(false));
    }
  };

  const handleEdit = (value) => {
    setOpen(true);
    dispatch(getDesignation(value));
  };

  // <---------------------- Department API Calls ------------------------->

  const DephandleSubmit = async (value) => {
    try {
      dispatch(setLoader(true));
      const response = await AddDepartmentApiCall(value);
      if (response.status === 201) {
        dispatch(setLoader(false));
        GetDepartment();
        toast.success("Department added successfully");
        setOpen(false);
      }
    } catch (error) {
      toast.error(error?.response?.data);
      dispatch(setLoader(false));
    }
  };
  // get Department

  const GetDepartment = async () => {
    try {
      dispatch(setLoader(true));
      const response = await GetAllDepartmentApiCall();
      if (response.status == 200) {
        dispatch(setLoader(false));

        dispatch(setDepartment(response.data));
      }
    } catch (error) {
      toast.error(error?.response?.data);
      dispatch(setLoader(false));
    }
  };

  // Departemnt Edit

  const DephandleEdit = async (value) => {
    setOpen(true);
    dispatch(GetDepartmentFunc(value));
  };

  // Department Delete
  const DephandleDelete = async (value) => {
    try {
      dispatch(setLoader(true));
      const response = await RemoveDepartmentApiCall(value);
      if (response) {
        dispatch(setLoader(false));
        GetDepartment();
        toast.success("Delete Data Successfully");
      }
    } catch (error) {
      dispatch(setLoader(false));
      toast.error(error?.response?.data?.message);
    }
  };

  const DEdithandle = async (value) => {
    try {
      const Val = {
        id: DItems._id,
        payload: value,
      };
      dispatch(setLoader(true));
      const response = await EditDepartmentApiCall(Val);

      if (response) {
        dispatch(setLoader(false));
        toast.success("Update department successfully");
        GetDepartment();
        dispatch(GetDepartmentFunc(null));
        setOpen(false);
      }
    } catch (error) {
      dispatch(setLoader(false));
      toast.error(error?.response?.data);
    }
  };

  // Contractor
  // <===============================================================Contractor Api Calls ========================>
  // Contractor Handle submit
  const ContractorHandleSubmit = async (values) => {
    try {
      dispatch(setLoader(true));
      const response = await AddContractorApiCall(values);
      console.log(response, "response");
      if (response.status === 201) {
        dispatch(setLoader(false));
        setOpen(false);
        GetAllContractorData();
        toast.success(response?.data?.message);
      }
    } catch (error) {
      dispatch(setLoader(false));
      console.log(error?.response?.data);
    }
  };

  // Get All Contractor
  const GetAllContractorData = async () => {
    try {
      dispatch(setLoader(true));
      const response = await GetAllContractorApiCall();
      if (response.status === 200) {
        dispatch(setLoader(false));
        dispatch(setContractor(response.data));
      }
    } catch (error) {
      dispatch(setLoader(false));
      console.log(error?.response?.data);
    }
  };

  // Delete Contractor

  const ContHandleDelete = async (values) => {
    try {
      dispatch(setLoader(true));
      const response = await RemoveContractorApiCall(values);
      if (response.status === 200) {
        dispatch(setLoader(false));
        GetAllContractorData();
        toast.success("delete data successfully");
      }
    } catch (error) {
      dispatch(setLoader(false));
      console.log(error?.response?.data);
    }
  };
  //  Contractor Update

  const UpdatecontractorhandleSubmit = async (value) => {
    try {
      const Val = {
        id: value._id,
        payload: value,
      };

      dispatch(setLoader(true));
      const response = await EditContractorApiCall(Val);
      console.log("edit contractor", response);
    } catch (error) {
      dispatch(setLoader(false));
      toast.error(error?.response?.data);
    }
  };

  // Contractor Handle Edit

  const ContractorhandleEdit = (items) => {
    setOpen(true);
    dispatch(getContractor(items));
  };
  useEffect(() => {
    GetDesignation();
    GetAllContractorData();
    GetDepartment();
  }, [dispatch]);

  const tabsheadr = [
    { title: "Contractor" },
    { title: "Designation" },
    { title: "Department" },
  ];
  const Tabsbody = [
    {
      content: (
        <>
          <section className="admin_wrapper">
            <Button onclick={() => setOpen(true)}>add Contractor</Button>
            {IsOpen && (
              <ContractorDrawer
                IsOpen={IsOpen}
                setOpen={setOpen}
                ContractorHandleSubmit={ContractorHandleSubmit}
                UpdatecontractorhandleSubmit={UpdatecontractorhandleSubmit}
                CSItems={CSItems}
              />
            )}
          </section>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Age</TableCell>
                  <TableCell>City</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ContractorItems?.map((item, index) => {
                  return (
                    <TableRow>
                      <TableCell key={index}>{index + 1}</TableCell>
                      <TableCell>{item.Contractor_Name}</TableCell>
                      <TableCell>{item.Contractor_Number}</TableCell>
                      <TableCell>{item.Person_Name}</TableCell>
                      <TableCell>{item.Remark}</TableCell>
                      <TableCell>
                        {moment(item.Created_Date).format("DD/MM/YYYY")}
                      </TableCell>
                      <TableCell>{item.Created_Time}</TableCell>
                      <TableCell>
                        <button onClick={() => ContHandleDelete(item._id)}>
                          Delete
                        </button>
                        <button onClick={() => ContractorhandleEdit(item)}>
                          Edit
                        </button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ),
    },
    {
      content: (
        <>
          <section>
            <Button
              onclick={() => {
                setOpen(true);
              }}
            >
              Add Designation
            </Button>
            {IsOpen && (
              <DesignationForm
                IsOpen={IsOpen}
                setOpen={setOpen}
                DhandleSubmit={DhandleSubmit}
                Items={Items}
                EdithandleSubmit={EdithandleSubmit}
              />
            )}
          </section>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Designation ID </TableCell>
                  <TableCell>Designation Name</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {DesignationData?.map((item, index) => {
                  return (
                    <TableRow>
                      <TableCell key={index}>{index + 1}</TableCell>
                      <TableCell>{item.Desig_Name}</TableCell>
                      <TableCell>
                        <button onClick={() => handleDelete(item._id)}>
                          Delete
                        </button>
                        <button onClick={() => handleEdit(item)}>Edit</button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ),
    },
    {
      content: (
        <>
          <section>
            <Button onclick={() => setOpen(true)}>Add Department</Button>
            {IsOpen && (
              <DepartmentDrawer
                IsOpen={IsOpen}
                setOpen={setOpen}
                DephandleSubmit={DephandleSubmit}
                DItems={DItems}
                DEdithandle={DEdithandle}
              />
            )}
          </section>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Department ID </TableCell>
                  <TableCell>Department Name</TableCell>
                  <TableCell>Department Remarks</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {DepItems?.map((item, index) => {
                  return (
                    <TableRow>
                      <TableCell key={index}>{index + 1}</TableCell>
                      <TableCell>{item.Dep_Name}</TableCell>
                      <TableCell>{item.Remark}</TableCell>
                      <TableCell>
                        <button onClick={() => DephandleDelete(item._id)}>
                          Delete
                        </button>
                        <button onClick={() => DephandleEdit(item)}>
                          Edit
                        </button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
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

export default Contractor;
