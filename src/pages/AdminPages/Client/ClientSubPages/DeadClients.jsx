import React, { useEffect } from "react";
import { deadclientapicall } from "../../../../apiservice/admin/clientApiCall";
import DeadclientTable from "../../../../components/AdminComponent/Clientcomponent/clientpagecomponent/DeadclientTable";

function DeadClients() {
  const [deadclients, setIsDeadClient] = React.useState([]);

  const getdeadclient = async () => {
    try {
      const response = await deadclientapicall();
      if (response.success) {
        setIsDeadClient(response?.result);
      }
    } catch (error) {
      console.log(error?.message);
    }
  };
  useEffect(() => {
    getdeadclient();
  }, [0]);
  return <DeadclientTable deadclients={deadclients} />;
}

export default DeadClients;
