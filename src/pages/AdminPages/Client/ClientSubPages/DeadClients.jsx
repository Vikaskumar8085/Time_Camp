import React, { useEffect } from "react";
import { deadclientapicall } from "../../../../apiservice/admin/clientApiCall";

function DeadClients() {
  const [isDeadClient, setIsDeadClient] = React.useState([]);

  const getdeadclient = async () => {
    try {
      const response = await deadclientapicall();
      if (response) {
        setIsDeadClient(response?.data?.message);
      }
    } catch (error) {
      console.log(error?.message);
    }
  };
  useEffect(() => {
    getdeadclient();
  }, [0]);
  return (
    <div>
      {isDeadClient?.map((item, index) => {
        console.log(item);
        return (
          <ul>
            <li>{item?.Client_Status}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default DeadClients;
