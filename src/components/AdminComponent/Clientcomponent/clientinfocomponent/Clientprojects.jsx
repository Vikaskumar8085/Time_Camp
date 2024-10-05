import React from "react";
import { useSelector } from "react-redux";
import Card from "../../../../common/Card";

function Clientprojects() {
  const clientprojectsdata = useSelector(
    (state) => state.clientinfo.clientprojects
  );

  return (
    <div>
      <Card>
        {Array.isArray(clientprojectsdata)
          ? clientprojectsdata?.map((item, index) => {
              return (
                <ul>
                  <li>{item?.Project_Code}</li>
                  <li>{item?.Project_Managers}</li>
                  <li>{item?.Start_Date}</li>
                  <li>{item?.End_Date}</li>
                  <li>{item?.Project_Type}</li>
                </ul>
              );
            })
          : "no data available"}
      </Card>
    </div>
  );
}

export default Clientprojects;
