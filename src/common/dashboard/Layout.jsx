import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserdata, LoginStatus } from "../../apiservice/auth";
import {
  setGetUser,
  setLoginStatus,
} from "../../redux/slices/authslices/authslice";
import { setLoader } from "../../redux/slices/loaderSlice";
import Header from "./component/Header/Header";
import Sidebar from "./component/Sidebar/Sidebar";

function Layout({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const GetUserData = useSelector((state) => state.auth.values);
  const isRole = GetUserData?.message?.Role;

  // login Status
  // const loginstatus = async () => {
  //   try {
  //     dispatch(setLoader(true));
  //     const response = await LoginStatus();
  //     if (response) {
  //       dispatch(setLoader(false));
  //       dispatch(setLoginStatus(response?.data?.message));
  //     }
  //   } catch (error) {
  //     dispatch(setLoader(false));
  //     console.log(error?.response?.data);
  //   }
  // };

  //get User role based

  // const GetUser = async () => {
  //   try {
  //     dispatch(setLoader(true));
  //     const response = await getUserdata();
  //     if (response.status === 200) {
  //       console.log("response", response?.data?.message);
  //       dispatch(setLoader(false));
  //       dispatch(setGetUser(response?.data));
  //     }
  //     console.log(response);
  //   } catch (error) {
  //     dispatch(setLoader(false));
  //     throw new Error(error?.response?.message);
  //   }
  // };

  // login auth
  // const isAuth = () => {
  //   if (sessionStorage.getItem("isLoginStatus")) {
  //     navigate("/dashboard");
  //   } else {
  //     navigate("/login");
  //   }
  // };

<<<<<<< HEAD
  // useEffect(() => {
  //   loginstatus();
  //   GetUser();
  //   isAuth();
  // }, [dispatch]);

  return (
    <>
      <div className="wrapper">
        <div className="dashboard_wrapper">
          <Sidebar Role={GetUserData} />
          <div className="dashboard_box">
            <Header GetUserData={GetUserData} />
            <main>
              <div className="content">{children}</div>
            </main>
          </div>
=======
  useEffect(() => {
    // loginstatus();
    // GetUser();
    // isAuth();
  }, [dispatch]);

  return (
    <>
      <div className="dashboard_wrapper">
        <Sidebar Role={GetUserData} />
        <div className="dashboard_box">
          <Header GetUserData={GetUserData} />
          <main>
            <div className="content">{children}</div>
          </main>
>>>>>>> 2c7ae09435f1cde9188914c38404715163a9e606
        </div>
      </div>
    </>
  );
}

export default Layout;
