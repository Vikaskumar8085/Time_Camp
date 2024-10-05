import React from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { fetchresourseapicall } from "../../apiservice/auth/resourseservice";
import { setfetchResource } from "../../redux/slices/authslices/resourceslice";
import { setLoader } from "../../redux/slices/loaderSlice";
import Header from "./component/Header/Header";
import Sidebar from "./component/Sidebar/Sidebar";
import { Link, NavLink } from "react-router-dom";

function SubLayout({ children }) {
  const dispatch = useDispatch();
  const resourcerole = useSelector((state) => state?.resource?.values);

  console.log(resourcerole.Role, "//////////resourcerole");
  const [roletype, setRoletype] = React.useState([resourcerole.Role]);
  const TypeofRole = {
    Employee: "Employee",
    Contractor: "Contractor",
    Manager: "Manager",
    ContractorManager: "ContractorManager",
  };

  //   // Create links based on roles
  const Employeerolelinks = resourcerole?.Role?.map((item, index) => {
    console.log(item, "???????????????/items");
    if (item === TypeofRole.Employee) {
      return (
        <>
          <li key={index}>
            <NavLink
              to={"/Employee-dashboard"}
              className={({ isActive }) =>
                isActive ? "activesidebarlink" : ""
              }
            >
              {/* <span>{item?.icon}</span> */}
              {"Employee Dashboard"}
            </NavLink>
          </li>

          <li key={index}>
            <NavLink
              to={"/Employee-Project"}
              className={({ isActive }) =>
                isActive ? "activesidebarlink" : ""
              }
            >
              {/* <span>{item?.icon}</span> */}
              {"Employee Project"}
            </NavLink>
          </li>
          <li key={index}>
            <NavLink
              to={"/Employee-timesheet"}
              className={({ isActive }) =>
                isActive ? "activesidebarlink" : ""
              }
            >
              {/* <span>{item?.icon}</span> */}
              {"Employee TimeSheets"}
            </NavLink>
          </li>
        </>
      );
    } else if (item === TypeofRole.Manager) {
      return (
        <li key={index}>
          <NavLink
            to={"/Employee-team"}
            className={({ isActive }) => (isActive ? "activesidebarlink" : "")}
          >
            {/* <span>{item?.icon}</span> */}
            {"Employee Team"}
          </NavLink>
        </li>
      );
    } else if (item === TypeofRole.Contractor) {
      return (
        <>
          <li key={index}>
            <NavLink
              to="/Contractor-dashboard"
              className={({ isActive }) =>
                isActive ? "activesidebarlink" : ""
              }
            >
              {"  Contracto Dashboard"}
            </NavLink>
          </li>

          {item === TypeofRole.Manager ? (
            <li>
              <NavLink
                to="/Contractor-Team"
                className={({ isActive }) =>
                  isActive ? "activesidebarlink" : ""
                }
              >
                {"Contractor Team"}
              </NavLink>
            </li>
          ) : null}
        </>
      );
    } else if (item === TypeofRole.ContractorManager) {
      return (
        <li key={index}>
          <NavLink
            to={"/contractor-team"}
            className={({ isActive }) => (isActive ? "activesidebarlink" : "")}
          >
            {/* <span>{item?.icon}</span> */}
            {"Contractor Team"}
          </NavLink>
        </li>
      );
    }
    return null; // Ensure to return null for unmatched items
  });

  const ContractorLinks = roletype.map((item, index) => {
    if (item === TypeofRole.Contractor) {
      return (
        <>
          <li key={index}>
            <NavLink
              to={"/Contractor-dashboard"}
              className={({ isActive }) =>
                isActive ? "activesidebarlink" : ""
              }
            >
              {/* <span>{item?.icon}</span> */}
              {"Contractor Dashboard"}
            </NavLink>
          </li>

          <li key={index}>
            <NavLink
              to={"/Contractor-Project"}
              className={({ isActive }) =>
                isActive ? "activesidebarlink" : ""
              }
            >
              {/* <span>{item?.icon}</span> */}
              {"Contractor Project"}
            </NavLink>
          </li>
          <li key={index}>
            <NavLink
              to={"/Contractor-timesheet"}
              className={({ isActive }) =>
                isActive ? "activesidebarlink" : ""
              }
            >
              {/* <span>{item?.icon}</span> */}
              {"Contractor TimeSheets"}
            </NavLink>
          </li>
        </>
      );
    } else if (item === TypeofRole.Manager) {
      return (
        <>
          <li>
            <NavLink
              to="/Contractor-Team"
              className={({ isActive }) =>
                isActive ? "activesidebarlink" : ""
              }
            >
              {"Contractor Team"}
            </NavLink>
          </li>
        </>
      );
    }
    return null;
  });

  const fetchresourcedata = async () => {
    try {
      dispatch(setLoader(true));
      const response = await fetchresourseapicall();
      console.log("response", response);
      if (response.success) {
        dispatch(setLoader(false));
        console.log(response.resource, "asdfjk");
        dispatch(setfetchResource(response.resource));
      }
    } catch (error) {
      dispatch(setLoader(false));
      toast.error(error?.response?.message);
    }
  };

  useEffect(() => {
    fetchresourcedata();
  }, [0]);
  return (
    <>
      <div className="dashboard_wrapper">
        <div className="sidebar">
          <div className="side_logo">
            <img
              src="https://d2w2i7rp1a0wob.cloudfront.net/static/images/logos/KekaLogoBlack.svg"
              alt=""
              srcset=""
            />
          </div>
          <aside>
            <ul>{Employeerolelinks}</ul>
          </aside>
        </div>
        <div className="dashboard_box">
          <Header />
          <main>
            <div className="content">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}

export default SubLayout;
