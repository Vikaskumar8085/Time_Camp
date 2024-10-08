import React from "react";
import { NavLink } from "react-router-dom";
import { Admin, Contractor, Employee, Manager, Super_Admin } from "./Links";

function Sidebar({ Role }) {
  const IsRole = Role.message?.Role;

  // manager contractor and employee

  // super admin
  const IsSuperAdmin = Super_Admin?.map((item, index) => {
    return (
      <>
        <li key={index}>
          <NavLink
            to={item?.path}
            className={({ isActive }) => (isActive ? "activesidebarlink" : "")}
          >
            <span>{item?.icon}</span>
            {item?.title}
          </NavLink>
        </li>
      </>
    );
  });
  // admin
  const IsAdmin = Admin?.map((item, index) => {
    return (
      <>
        <li key={index}>
          <NavLink
            to={item?.path}
            className={({ isActive }) => (isActive ? "activesidebarlink" : "")}
          >
            <span>{item?.icon}</span>

            {item?.title}
          </NavLink>
        </li>
      </>
    );
  });

  // const IsContractor = Contractor?.map((item, index) => {
  //   return (
  //     <>
  //       <li key={index}>
  //         <NavLink
  //           to={item?.path}
  //           className={({isActive}) => (isActive ? "activesidebarlink" : "")}
  //         >
  //           <span>{item?.icon}</span>
  //           {item?.title}
  //         </NavLink>
  //       </li>
  //     </>
  //   );
  // });

  // // Manager
  const IsManager = Manager?.map((item, index) => {
    return (
      <>
        <li key={index}>
          <NavLink
            to={item?.path}
            className={({ isActive }) => (isActive ? "activesidebarlink" : "")}
          >
            <span>{item?.icon}</span>
            {item?.title}
          </NavLink>
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
          {IsRole === "SuperAdmin" && <>{IsSuperAdmin}</>}
          {IsRole === "Admin" && <>{IsAdmin}</>}
        </ul>
      </aside>
    </div>
  );
}

export default Sidebar;
