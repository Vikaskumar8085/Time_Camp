import { FaTh, FaRegChartBar, FaCommentAlt } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoPeopleSharp } from "react-icons/io5";
import {
  MdDashboard,
  MdSettings,
  MdOutlineAdminPanelSettings,
} from "react-icons/md";
import { MdOutlineBugReport } from "react-icons/md";

export const Super_Admin = [
  {
    title: "Dashboard",
    icon: <FaTh />,
    path: "/super-admin-dashboard",
  },
  {
    title: "Profile",
    icon: <BiImageAdd />,
    path: "/profile",
  },

  //   {
  //     title: "Account",
  //     icon: <FaRegChartBar />,
  //     childrens: [
  //       {
  //         title: "Profile",
  //         path: "/profile",
  //       },
  //       {
  //         title: "Edit Profile",
  //         path: "/edit-profile",
  //       },
  //     ],
  //   },

  {
    title: "Company management",
    path: "/company-management",
  },
  {
    title: "Payment Activity",
    icon: <FaCommentAlt />,
    path: "/payment",
  },
  {
    title: "Reports Bug",
    icon: <FaCommentAlt />,
    path: "/Report",
  },
  {
    title: "Subscription",
    icon: <FaCommentAlt />,
    path: "/subscription",
  },
  {
    title: "technical supports",
    icon: <FaCommentAlt />,
    path: "/technical-supports",
  },
];

export const Admin = [
  {
    title: "Company",
    icon: <CgProfile />,
    path: "/company",
  },
  {
    title: "Dashboard",
    icon: <MdDashboard />,
    path: "/dashboard",
  },
  {
    title: "Profile",
    icon: <CgProfile />,
    path: "/profile",
  },
  {
    title: "Our Client",
    icon: <IoPeopleSharp />,
    path: "/client",
  },
  {
    title: "Admin",
    icon: <MdOutlineAdminPanelSettings />,
    path: "/admin",
  },
  {
    title: "Employee",
    icon: <MdOutlineBugReport />,
    path: "/employee",
  },
  {
    title: "Contractor",
    icon: <MdOutlineBugReport />,
    path: "/contractor",
  },
  {
    title: "Settings",
    icon: <MdSettings />,
    path: "/settings",
  },
];

export const Employee = [
  {
    title: "Dashboard",
    icon: <MdDashboard />,
    path: "/Employee-dashboard",
  },
  {
    title: "Profile",
    icon: <CgProfile />,
    path: "/profile",
  },
  {
    title: "Employee project",
    icon: <CgProfile />,
    path: "/Employee-project",
  },
  {
    title: "Employee TimeSheet",
    icon: <CgProfile />,
    path: "/Employee-timesheet",
  },
];

export const Contractor = [
  {
    title: "Contractor dashboard",
    icon: <FaCommentAlt />,
    path: "/contractor-dashboard",
  },
  {
    title: "Profile",
    icon: <FaCommentAlt />,
    path: "/profile",
  },
  {
    title: "Contractor projects",
    icon: <FaCommentAlt />,
    path: "/contractor-project",
  },
  {
    title: "Contractor TimeSheets",
    icon: <FaCommentAlt />,
    path: "/contractor-timesheets",
  },
];

export const Manager = [
  {
    title: "Manager dashboard",
    icon: <FaCommentAlt />,
    path: "/manager-dashboard",
  },
  {
    title: "Profile",
    icon: <FaCommentAlt />,
    path: "/profile",
  },
  {
    title: "Manager projects",
    icon: <FaCommentAlt />,
    path: "/manager-project",
  },
];
