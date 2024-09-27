import React from "react";
import {useSelector} from "react-redux";

function Contractorprofile() {
  const contractorprofiledata = useSelector(
    (state) => state.contractorinfo?.contractorprofile
  );

  console.log(contractorprofiledata, "contractor profile data");
  return (
    <div>
      <h6>{contractorprofiledata.FirstName}</h6>
      <h6>{contractorprofiledata.LastName}</h6>
      <h6>{contractorprofiledata.Email}</h6>
      <h6>{contractorprofiledata.Address}</h6>
      <h6>{contractorprofiledata.Designation}</h6>
      <h6>{contractorprofiledata.Role}</h6>
    </div>
  );
}

export default Contractorprofile;
