// import React, { useEffect, useState } from "react";
// import Layout from "../../../common/dashboard/Layout";
// import Proutes from "../../../common/Proutes";
// import Button from "../../../common/Button";
// import ClientDrawer from "../../../components/AdminComponent/Clientcomponent/ClientDrawer";
// import TabComp from "../../../common/TabComp";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
// } from "@mui/material";
// import { setLoader } from "../../../redux/slices/loaderSlice";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   createClient,
//   EditClientApiCall,
//   GetClientApiCall,
//   RemoveClientApiCall,
// } from "../../../apiservice/admin";
// import {
//   setClients,
//   SetSingleClientsFunc,
// } from "../../../redux/slices/AdminSlice/adminSlice";
// import toast from "react-hot-toast";
// import Input from "../../../common/Input/Input";
// import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
// import InActiveClient from "./ClientSubPages/InActiveClient";
// import ActiveClients from "./ClientSubPages/ActiveClients";
// import DeadClients from "./ClientSubPages/DeadClients";

// function Client() {
//   const [IsOpen, setOpen] = React.useState(false);
//   const dispatch = useDispatch();
//   const [IsSearch, setIsSearch] = useState("");
//   const getClients = useSelector((state) => state.admin.clientValue);
//   const CItems = useSelector((state) => state.admin.ClinetSingleValue);

//   // searching
//   const filterBySearch = getClients.filter((item) => {
//     return (
//       item?.Company_Name.toLowerCase().includes(IsSearch.toLowerCase()) ||
//       item?.Client_Name?.toLowerCase().includes(IsSearch.toLowerCase()) ||
//       item?.Client_Email?.toLowerCase().includes(IsSearch.toLowerCase()) ||
//       item?.Client_Address?.toLowerCase()?.includes(IsSearch?.toLowerCase())
//     );
//   });
//   // searching
//   // Client Handle Add
//   const ClienthandleSubmit = async (value) => {
//     try {
//       dispatch(setLoader(true));
//       const response = await createClient(value);
//       console.log(response);
//       if (response?.data?.success) {
//         dispatch(setLoader(false));
//         toast.success(response?.data?.message);
//         GetAllClients();
//         setOpen(false);
//       }
//     } catch (error) {
//       dispatch(setLoader(false));
//       toast.error(error?.response?.data?.message);
//     }
//   };

//   // Client Remove handle
//   const handleDelete = async (value) => {
//     try {
//       console.log(value, "delete value");
//       dispatch(setLoader(true));
//       const response = await RemoveClientApiCall(value);
//       console.log(response, "repsonse");
//       if (response.status === 200) {
//         dispatch(setLoader(false));
//         GetAllClients();
//         toast.success("delete data successfully");
//       }
//     } catch (error) {
//       dispatch(setLoader(false));
//       toast.error(error?.response.data);
//     }
//   };

//   // get all clients
//   const GetAllClients = async () => {
//     try {
//       dispatch(setLoader(true));
//       const response = await GetClientApiCall();
//       if (response?.data?.success) {
//         dispatch(setLoader(false));
//         dispatch(setClients(response?.data?.message));
//       }
//     } catch (error) {
//       dispatch(setLoader(false));
//       toast.error(error?.response?.data?.message);
//     }
//   };

//   // get all clients
//   // Edit handle
//   const handleEdit = (Item) => {
//     dispatch(SetSingleClientsFunc(Item));
//     setOpen(true);
//   };
//   // Edit handle

//   const ClientEditHandle = async (value) => {
//     try {
//       const Val = {
//         id: CItems._id,
//         payload: value,
//       };
//       console.log("Val", Val);

//       dispatch(setLoader(true));
//       const response = await EditClientApiCall(Val);
//       console.log(response, "response");
//       if (response.status === 200) {
//         dispatch(setLoader(false));
//         dispatch(SetSingleClientsFunc(null));
//         setOpen(false);
//         GetAllClients();
//         toast.success("Edit Data successfully");
//       }
//     } catch (error) {
//       setOpen(false);
//       dispatch(setLoader(false));
//       toast.error(error?.response?.data);
//     }
//   };

//   useEffect(() => {
//     GetAllClients();
//   }, [0]);

//   const tabsheadr = [
//     { title: "Clients" },
//     { title: "Active Clients" },
//     { title: "In Active Clients" },
//     { title: "Dead Clients" },
//   ];
//   const Tabsbody = [
//     {
//       content: (
//         <>
//           <section className="client_wrapper">
//             <Button onclick={() => setOpen(true)}>add client</Button>
//             {IsOpen && (
//               <ClientDrawer
//                 IsOpen={IsOpen}
//                 CItems={CItems}
//                 setOpen={setOpen}
//                 ClienthandleSubmit={ClienthandleSubmit}
//                 ClientEditHandle={ClientEditHandle}
//               />
//             )}
//           </section>
//           <Input
//             onchange={(e) => setIsSearch(e.target.value)}
//             value={IsSearch}
//             placeholder={"Search"}
//           />

//           <TableContainer component={Paper}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Company Name</TableCell>
//                   <TableCell>Client Name</TableCell>
//                   <TableCell>Client Email</TableCell>
//                   <TableCell>Client Phone</TableCell>
//                   <TableCell>Client Address</TableCell>
//                   <TableCell>Client Postal Code</TableCell>
//                   <TableCell>Gst Number</TableCell>
//                   <TableCell>Actions</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {filterBySearch.map((items, index) => (
//                   <TableRow key={index}>
//                     <TableCell>{items.Company_Name}</TableCell>
//                     <TableCell>{items.Client_Name}</TableCell>
//                     <TableCell>{items.Client_Email}</TableCell>
//                     <TableCell>{items.Client_Phone}</TableCell>
//                     <TableCell>{items.Client_Address}</TableCell>
//                     <TableCell>{items.Client_Postal_Code}</TableCell>
//                     <TableCell>{items.GstNumber}</TableCell>
//                     <TableCell>
//                       <span onClick={() => handleDelete(items._id)}>
//                         <MdOutlineDelete
//                           style={{ fontSize: "1.2em", margin: "0px 3px" }}
//                         />
//                       </span>
//                       <span onClick={() => handleEdit(items)}>
//                         <MdOutlineEdit
//                           style={{ fontSize: "1.2em", margin: "0px 3px" }}
//                         />
//                       </span>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </>
//       ),
//     },
//     {
//       content: (
//         <>
//           <ActiveClients />
//         </>
//       ),
//     },
//     {
//       content: (
//         <>
//           <InActiveClient />
//         </>
//       ),
//     },
//     {
//       content: <DeadClients />,
//     },
//   ];
//   return (
//     <>
//       <Proutes>
//         <Layout>
//           <TabComp Tabsheader={tabsheadr} TabsBody={Tabsbody} />
//         </Layout>
//       </Proutes>
//     </>
//   );
// }

// export default Client;

import React from "react";
import Proutes from "../../../common/Proutes";
import Layout from "../../../common/dashboard/Layout";
import TabComp from "../../../common/TabComp";
import ClientPage from "./ClientSubPages/ClientPage";
import ActiveClients from "./ClientSubPages/ActiveClients";
import InActiveClient from "./ClientSubPages/InActiveClient";
import DeadClients from "./ClientSubPages/DeadClients";

function Client() {
  const TabsHeader = [
    {
      title: "All Clients",
    },
    { title: "Active Clients" },
    { title: "InActive Clients" },
    {
      title: "Dead Clients",
    },
  ];

  const Tabsbody = [
    {
      content: (
        <>
          <ClientPage />
        </>
      ),
    },
    {
      content: (
        <>
          <ActiveClients />
        </>
      ),
    },
    {
      content: (
        <>
          <InActiveClient />
        </>
      ),
    },
    {
      content: (
        <>
          <DeadClients />
        </>
      ),
    },
  ];

  return (
    <>
      <Proutes>
        <Layout>
          <TabComp Tabsheader={TabsHeader} TabsBody={Tabsbody} />
        </Layout>
      </Proutes>
    </>
  );
}

export default Client;
