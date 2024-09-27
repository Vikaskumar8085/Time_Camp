import {Grid} from "@mui/material";
import React from "react";
import {useEffect} from "react";
import toast from "react-hot-toast";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchcontractorinformationapicall} from "../../../apiservice/admin/contractorapiservice";
import Layout from "../../../common/dashboard/Layout";
import Proutes from "../../../common/Proutes";
import TabComp from "../../../common/TabComp";
import {setContractorprofile} from "../../../redux/slices/ContractorSlice/contractorinfoSlice";
import {setLoader} from "../../../redux/slices/loaderSlice";
import Contractorinfopage from "./contractorinfosubpage/Contractorinfopage";

function Contractorinfo() {
  const dispatch = useDispatch();
  const {id} = useParams();
  console.log(id);

  const getcontractorinformation = async () => {
    try {
      dispatch(setLoader(true));
      const response = await fetchcontractorinformationapicall(id);
      console.log(response);
      if (response.success) {
        dispatch(setLoader(false));
        dispatch(setContractorprofile(response.result));

        // setContractorprojects
      }
    } catch (error) {
      dispatch(setLoader(false));
      toast.error(error?.response?.message);
    }
  };

  useEffect(() => {
    getcontractorinformation();
  }, [0]);

  const tabsheader = [
    {title: "Contractor Info"},
    {title: "Contractor TimeSheets"},
  ];
  const tabsbody = [
    {
      content: (
        <>
          <Contractorinfopage />
        </>
      ),
    },
    {
      content: <>contractor timesheets</>,
    },
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

export default Contractorinfo;
