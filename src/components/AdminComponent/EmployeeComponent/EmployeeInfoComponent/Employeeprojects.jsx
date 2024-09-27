import React from "react";
import {useSelector} from "react-redux";
import Card from "../../../../common/Card";

function Employeeprojects() {
  const employeeprojectdata = useSelector(
    (state) => state.employeeinfo.employeeprojects
  );

  console.log(employeeprojectdata, "employee projects");
  return (
    <div>
      <Card>
        {Array.isArray(employeeprojectdata)
          ? employeeprojectdata.map((item, index) => {
              return (
                <ul>
                  <li>{item.Project_Name}</li>
                  <li>{item.Project_Code}</li>
                  <li>{item.Start_Date}</li>
                  <li>{item.End_Date}</li>
                </ul>
              );
            })
          : ""}
      </Card>
    </div>
  );
}

export default Employeeprojects;
