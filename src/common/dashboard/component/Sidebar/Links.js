import { FaTh, FaRegChartBar, FaCommentAlt } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";

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
    icon: <FaCommentAlt />,
    path: "/dashboard",
  },
  {
    title: "Profile",
    path: "/profile",
  },
  {
    title: "Company",
    path: "/company",
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
