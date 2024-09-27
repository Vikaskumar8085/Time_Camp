import React from "react";
import {useSelector} from "react-redux";

function Clientprofile() {
  const clientprofiledata = useSelector(
    (state) => state.clientinfo.clientprofile
  );
  console.log(clientprofiledata, "client prooje");
  return <>
  <div className="client_profile_card">
    <div className="client_profile_box">
        <div className="client_profile">
            <h6>{clientprofiledata?.Client_Name}</h6>
            <h6>{clientprofiledata?.Client_Email}</h6>
            <h6>{clientprofiledata?.Client_Phone}</h6>
            <h6>{clientprofiledata?.Client_Postal_Code}</h6>
            <h6>{clientprofiledata?.Client_Address}</h6>
        </div>
        
    </div>
  </div>
  
  </>;
}

export default Clientprofile;
