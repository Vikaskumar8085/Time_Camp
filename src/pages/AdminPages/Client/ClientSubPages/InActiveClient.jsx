import React, { useState } from "react";
import { useEffect } from "react";
import { inactiveclientapicall } from "../../../../apiservice/admin/clientapiservice";
import InactiveClientTable from "../../../../components/AdminComponent/Clientcomponent/clientpagecomponent/InactiveClientTable";
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from "../../../../redux/slices/loaderSlice";
import { setinactiveClient } from "../../../../redux/slices/clientslice/clientslices";

function InActiveClient() {
  const fetchinactiveclients = useSelector(
    (state) => state.client.inactiveclient
  );
  const dispatch = useDispatch();

  const getInactiveclient = async () => {
    try {
      dispatch(setLoader(true));
      const response = await inactiveclientapicall();
      if (response?.success) {
        dispatch(setLoader(false));
        dispatch(setinactiveClient(response?.result));
      }
    } catch (error) {
      dispatch(setLoader(false));
      console.log(error?.message);
    }
  };
  useEffect(() => {
    getInactiveclient();
  }, []);
  return (
    <>
      <InactiveClientTable fetchinactiveclients={fetchinactiveclients} />
    </>
  );
}

export default InActiveClient;
