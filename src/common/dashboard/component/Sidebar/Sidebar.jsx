import React from "react";
import { MdOutlineAddHome } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { Admin, Contractor, Employee, Super_Admin } from "./Links";

function Sidebar({ Role }) {
  const IsRole = Role.message?.Role;
  const IsSuperAdmin = Super_Admin?.map((item, index) => {
    return (
      <>
        <li key={index}>
          <NavLink to={item?.path}>
            <span>{item?.icon}</span>
            {item?.title}
          </NavLink>
        </li>
      </>
    );
  });

  const IsAdmin = Admin?.map((item, index) => {
    return (
      <>
        <li
          key={index}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <NavLink to={item?.path}>
            <span>{item?.icon}</span>

            {item?.title}
          </NavLink>
        </li>
      </>
    );
  });

  const IsEmployee = Employee?.map((item, index) => {
    return (
      <>
        <li key={index}>
          <span>{item?.icon}</span>
          <NavLink to={item?.path}>{item?.title}</NavLink>
        </li>
      </>
    );
  });

  const IsContractor = Contractor?.map((item, index) => {
    return (
      <>
        <li key={index}>
          <span>{item?.icon}</span>
          <NavLink to={item?.path}>{item?.title}</NavLink>
        </li>
      </>
    );
  });
  return (
    <div className="sidebar">
      <div className="side_logo">
        <img
          src="https://d2w2i7rp1a0wob.cloudfront.net/static/images/logos/KekaLogoBlack.svg"
          alt=""
          srcset=""
        />
      </div>
      <aside>
        <ul>
          {IsAdmin}
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
