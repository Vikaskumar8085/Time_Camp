import React, { useState } from "react";
import { useEffect } from "react";
import { inactiveclientapicall } from "../../../../apiservice/admin/clientApiCall";
import InactiveClientTable from "../../../../components/AdminComponent/Clientcomponent/clientpagecomponent/InactiveClientTable";

function InActiveClient() {
  const [inactiveclients, setIsActiveclient] = useState([]);

  const getInactiveclient = async () => {
    try {
      const response = await inactiveclientapicall();
      if (response) {
        setIsActiveclient(response?.result);
      }
    } catch (error) {
      console.log(error?.message);
    }
  };
  useEffect(() => {
    getInactiveclient();
  }, []);
  return (
    <>
      <InactiveClientTable inactiveclients={inactiveclients} />
    </>
  );
}

export default InActiveClient;
