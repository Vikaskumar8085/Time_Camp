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
export const Compoany = [
  {
    title: "Company",
    icons: <FaTh />,
    path: "/company",
  },
];
export const Super_Admin = [
  {
    title: "Dashboard",
    icon: <FaTh />,
    path: "/dashboard",
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
    path: "/contact-us",
  },
  {
    title: "Reports Bug",
    icon: <FaCommentAlt />,
    path: "/contact-us",
  },
  {
    title: "Subscription",
    icon: <FaCommentAlt />,
    path: "/contact-us",
  },
  {
    title: "technical supports",
    icon: <FaCommentAlt />,
    path: "/contact-us",
  },
];

export const Admin = [
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
    title: "Company",
    icon: <CgProfile />,
    path: "/company",
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
    title: "Employee",
    icon: <FaCommentAlt />,
    path: "/contact-us",
  },
];

export const Contractor = [
  {
    title: "contractor",
    icon: <FaCommentAlt />,
    path: "/contact-us",
  },
];
