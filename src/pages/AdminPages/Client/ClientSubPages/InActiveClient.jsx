import React, { useState } from "react";
import { useEffect } from "react";
import { inactiveclientapicall } from "../../../../apiservice/admin/clientApiCall";

function InActiveClient() {
  const [isInActiveclient, setIsActiveclient] = useState([]);

  const getInactiveclient = async () => {
    try {
      const response = await inactiveclientapicall();
      if (response) {
        setIsActiveclient(response?.data?.message);
      }
    } catch (error) {
      console.log(error?.message);
    }
  };
  useEffect(() => {
    getInactiveclient();
  }, []);
  return (
    <div>
      {isInActiveclient?.map((item, index) => {
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

export default InActiveClient;
