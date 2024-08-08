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
  addDesingationApiCall,
  EditDesignationApiCall,
  GetAllDesignationApiCall,
} from "../../apiservice/admin";
import toast from "react-hot-toast";
import {
  getDesignation,
  setDesignation,
} from "../../redux/slices/Designation/DesignationSlice";

function Contractor() {
  const [IsOpen, setOpen] = React.useState(false);
  const Items = useSelector((state) => state.Designation.DesigValue);
  console.log(Items, "SingleItem");
  const dispatch = useDispatch();
  const DesignationData = useSelector(
    (state) => state.Designation.DesignationValue
  );

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

  useEffect(() => {
    GetDesignation();
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
            {IsOpen && <ContractorDrawer IsOpen={IsOpen} setOpen={setOpen} />}
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
              <TableBody></TableBody>
            </Table>
          </TableContainer>
        </>
      ),
    },
    {
      content: (
        <>
          <section>
            <Button onclick={() => setOpen(true)}>Add Designation</Button>
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
                  console.log(index);
                  return (
                    <TableRow>
                      <TableCell key={index}>{item.Desig_Id}</TableCell>
                      <TableCell>{item.Desig_Name}</TableCell>
                      <TableCell>
                        <button onClick={"delete"}>Delete</button>
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
