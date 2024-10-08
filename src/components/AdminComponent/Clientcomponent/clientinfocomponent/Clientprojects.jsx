import React from "react";
import {useSelector} from "react-redux";
import Card from "../../../../common/Card";

function Clientprojects() {
  const clientprojectsdata = useSelector(
    (state) => state.clientinfo.clientprojects
  );
  console.log(
    clientprojectsdata,
    "client projects data ======================================"
  );

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      {Array.isArray(clientprojectsdata)
        ? clientprojectsdata?.map((item, index) => {
            return (
              <Card>
                <ul style={{listStyleType: "none"}}>
                  <li>{item?.Project_Name}</li>
                  <li>{item?.Project_Code}</li>
                  <li>{item?.Start_Date}</li>
                  <li>{item?.End_Date}</li>
                  <li>{item?.Project_Status}</li>
                </ul>
              </Card>
            );
          })
        : "no data available"}
    </div>
  );
}

export default Clientprojects;
