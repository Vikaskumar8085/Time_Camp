import React from "react";
import { MdOutlineAddHome } from "react-icons/md";
import { Link } from "react-router-dom";
import { Admin, Contractor, Employee, Super_Admin } from "./Links";

function Sidebar({ Role }) {
  const IsRole = Role.message?.Role;
  const IsSuperAdmin = Super_Admin?.map((item, index) => {
    return (
      <>
        <li key={index}>
          <span>{item?.icon}</span>
          <Link to={item?.path}>{item?.title}</Link>
        </li>
      </>
    );
  });

  const IsAdmin = Admin?.map((item, index) => {
    return (
      <>
        <li key={index}>
          <span>{item?.icon}</span>
          <Link to={item?.path}>{item?.title}</Link>
        </li>
      </>
    );
  });

  const IsEmployee = Employee?.map((item, index) => {
    return (
      <>
        <li key={index}>
          <span>{item?.icon}</span>
          <Link to={item?.path}>{item?.title}</Link>
        </li>
      </>
    );
  });

  const IsContractor = Contractor?.map((item, index) => {
    return (
      <>
        <li key={index}>
          <span>{item?.icon}</span>
          <Link to={item?.path}>{item?.title}</Link>
        </li>
      </>
    );
  });
  return (
    <div className="sidebar">
      <aside>
        <ul>
          {IsRole === "super_admin" && <>{IsSuperAdmin}</>}
          {IsRole === "Admin" && <>{IsAdmin}</>}
          {IsRole === "employee" && <>{IsEmployee}</>}
          {IsRole === "contractor" && <>{IsContractor}</>}
        </ul>
      </aside>
    </div>
  );
}

export default Sidebar;
