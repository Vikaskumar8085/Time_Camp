import React from "react";
import {useSelector} from "react-redux";

function Employeeprofile() {
  const employeeprofiledata = useSelector(
    (state) => state.employeeinfo.employeeprofile
  );
  console.log(employeeprofiledata ,"employee profile");
  // employeeprofile: "",
  //
  return <div>
    <h6>{employeeprofiledata.FirstName}</h6>
    <h6>{employeeprofiledata.LastName}</h6>
    <h6>{employeeprofiledata.Email}</h6>
    <h6>{employeeprofiledata.Address}</h6>
    <h6>{employeeprofiledata.Designation}</h6>
    <h6>{employeeprofiledata.Role}</h6>
  </div>;
}

export default Employeeprofile;
