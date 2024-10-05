import React from "react";
import { activeclientapicall } from "../../../../apiservice/admin/clientapiservice";
import ActiveclientTable from "../../../../components/AdminComponent/Clientcomponent/clientpagecomponent/ActiveclientTable";
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from "../../../../redux/slices/loaderSlice";
import { setactiveClient } from "../../../../redux/slices/clientslice/clientslices";

function ActiveClients() {
  const dispatch = useDispatch();
  const fetchactiveclients = useSelector((state) => state.client.activeclient);

  const getactileclient = async () => {
    try {
      dispatch(setLoader(true));
      const response = await activeclientapicall();
      if (response?.success) {
        dispatch(setLoader(false));
        dispatch(setactiveClient(response?.result));
      }
    } catch (error) {
      dispatch(setLoader(false));
      console.log(error?.message);
    }
  };

  React.useEffect(() => {
    getactileclient();
  }, [0]);

  return (
    <>
      <ActiveclientTable fetchactiveclients={fetchactiveclients} />
    </>
  );
}

export default ActiveClients;
