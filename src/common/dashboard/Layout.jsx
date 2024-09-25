import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getUserdata, LoginStatus} from "../../apiservice/auth";
import {
  setGetUser,
  setLoginStatus,
} from "../../redux/slices/authslices/authslice";
import {setLoader} from "../../redux/slices/loaderSlice";
import Header from "./component/Header/Header";
import Sidebar from "./component/Sidebar/Sidebar";

function Layout({children}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const GetUserData = useSelector((state) => state.auth.values);
  const isRole = GetUserData?.message?.Role;

  const GetUser = async () => {
    try {
      dispatch(setLoader(true));
      const response = await getUserdata();
      if (response.status === 200) {
        dispatch(setLoader(false));
        dispatch(setGetUser(response?.data));
      }
      console.log(response);
    } catch (error) {
      dispatch(setLoader(false));
      throw new Error(error?.response?.message);
    }
  };

  useEffect(() => {
    GetUser();
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
        </div>
      </div>
    </>
  );
}

export default Layout;
