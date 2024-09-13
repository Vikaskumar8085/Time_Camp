import React from "react";
import { activeclientapicall } from "../../../../apiservice/admin/clientApiCall";

function ActiveClients() {
  const [isActivedata, setIsactivedata] = React.useState([]);
  const getactileclient = async () => {
    try {
      const response = await activeclientapicall();

      if (response) {
        setIsactivedata(response?.data?.message);
      }
    } catch (error) {
      console.log(error?.message);
    }
  };

  React.useEffect(() => {
    getactileclient();
  }, [0]);

  return (
    <div>
      {isActivedata?.map((item, index) => {
        return (
          <ul>
            <li>{item?.Client_Status}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default ActiveClients;
