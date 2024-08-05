import React, { useEffect, useState } from "react";
import Layout from "../../common/dashboard/Layout";
import Proutes from "../../common/Proutes";
import Button from "../../common/Button";
import ClientDrawer from "../../components/AdminComponent/Clientcomponent/ClientDrawer";
import TabComp from "../../common/TabComp";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { setLoader } from "../../redux/slices/loaderSlice";
import { useDispatch, useSelector } from "react-redux";
import { GetClientApiCall } from "../../apiservice/admin";
import { setClients } from "../../redux/slices/AdminSlice/adminSlice";
import toast from "react-hot-toast";
import Input from "../../common/Input/Input";

function Client() {
  const [IsOpen, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [IsSearch, setIsSearch] = useState("");
  const getClients = useSelector((state) => state.admin.clientValue);

  // searching
  const filterBySearch = getClients.filter((item) => {
    return (
      item?.Company_Name.toLowerCase().includes(IsSearch.toLowerCase()) ||
      item?.Client_Name?.toLowerCase().includes(IsSearch.toLowerCase()) ||
      item?.Client_Email?.toLowerCase().includes(IsSearch.toLowerCase()) ||
      item?.Client_Address?.toLowerCase()?.includes(IsSearch?.toLowerCase())
    );
  });

  // searching

  // get all clients
  const GetAllClients = async () => {
    try {
      dispatch(setLoader(true));
      const response = await GetClientApiCall();
      if (response?.data?.success) {
        dispatch(setLoader(false));
        dispatch(setClients(response?.data?.message));
      }
    } catch (error) {
      dispatch(setLoader(false));
      toast.error(error?.response?.data?.message);
    }
  };

  // get all clients
  useEffect(() => {
    GetAllClients();
  }, [0]);

  const tabsheadr = [
    { title: "Clients" },
    { title: "Active Clients" },
    { title: "In Active Clients" },
    { title: "Dead Clients" },
  ];
  const Tabsbody = [
    {
      content: (
        <>
          <section className="client_wrapper">
            <Button onclick={() => setOpen(true)}>add client</Button>
            {IsOpen && (
              <ClientDrawer
                IsOpen={IsOpen}
                GetAllClients={GetAllClients}
                setOpen={setOpen}
              />
            )}
          </section>
          <Input
            onchange={(e) => setIsSearch(e.target.value)}
            value={IsSearch}
            placeholder={"Search"}
          />

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Company Name</TableCell>
                  <TableCell>Client Name</TableCell>
                  <TableCell>Client Email</TableCell>
                  <TableCell>Client Phone</TableCell>
                  <TableCell>Client Address</TableCell>
                  <TableCell>Client Postal Code</TableCell>
                  <TableCell>Gst Number</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filterBySearch.map((items, index) => (
                  <TableRow key={index}>
                    <TableCell>{items.Company_Name}</TableCell>
                    <TableCell>{items.Client_Name}</TableCell>
                    <TableCell>{items.Client_Email}</TableCell>
                    <TableCell>{items.Client_Phone}</TableCell>
                    <TableCell>{items.Client_Address}</TableCell>
                    <TableCell>{items.Client_Postal_Code}</TableCell>
                    <TableCell>{items.GstNumber}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ),
    },
    {
      content: (
        <>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
            aspernatur eligendi culpa accusantium quos quisquam facere facilis
            suscipit ipsum, ratione placeat unde distinctio alias, dolor porro
            id! Reprehenderit, aliquid. Doloremque.
          </p>
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

export default Client;
