import React from "react";
import { activeclientapicall } from "../../../../apiservice/admin/clientApiCall";
import ActiveclientTable from "../../../../components/AdminComponent/Clientcomponent/clientpagecomponent/ActiveclientTable";

function ActiveClients() {
  const [activeclients, setIsactivedata] = React.useState([]);
  const getactileclient = async () => {
    try {
      const response = await activeclientapicall();

      if (response?.success) {
        setIsactivedata(response?.result);
      }
    } catch (error) {
      console.log(error?.message);
    }
  };

  React.useEffect(() => {
    getactileclient();
  }, [0]);

  return (
    <>
      <ActiveclientTable activeclients={activeclients} />
    </>
  );
}

export default ActiveClients;
