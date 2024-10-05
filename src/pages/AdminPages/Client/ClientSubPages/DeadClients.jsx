import React, { useEffect } from "react";
import { deadclientapicall } from "../../../../apiservice/admin/clientapiservice";
import DeadclientTable from "../../../../components/AdminComponent/Clientcomponent/clientpagecomponent/DeadclientTable";
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from "../../../../redux/slices/loaderSlice";
import { setdeadClient } from "../../../../redux/slices/clientslice/clientslices";

function DeadClients() {
  const [deadclients, setIsDeadClient] = React.useState([]);
  const fetchdeadclients = useSelector((state) => state.client.deadclient);

  const dispatch = useDispatch();

  const getdeadclient = async () => {
    try {
      dispatch(setLoader(true));
      const response = await deadclientapicall();
      if (response.success) {
        dispatch(setLoader(false));
        dispatch(setdeadClient(response?.result));
      }
    } catch (error) {
      dispatch(setLoader(false));
      console.log(error?.message);
    }
  };
  useEffect(() => {
    getdeadclient();
  }, [0]);
  return <DeadclientTable fetchdeadclients={fetchdeadclients} />;
}

export default DeadClients;
