import React from "react";
import {useEffect} from "react";
import toast from "react-hot-toast";
import {useDispatch, useSelector} from "react-redux";
import {fetchresourseapicall} from "../../apiservice/auth/resourseservice";
import {setfetchResource} from "../../redux/slices/authslices/resourceslice";
import {setLoader} from "../../redux/slices/loaderSlice";
import Header from "./component/Header/Header";
import Sidebar from "./component/Sidebar/Sidebar";

function SubLayout({children}) {
  const dispatch = useDispatch();

  const resourcerole = useSelector((state) => state?.resource?.values);

  const roleextract = resourcerole?.Role?.map((item) => {
    console.log(item);
    return item === "Employee"
      ? item === "Manager"
        ? "hell"
        : "asdfjkskadf"
      : "error";
  });

  console.log(roleextract, "ol");

  const fetchresourcedata = async () => {
    try {
      dispatch(setLoader(true));
      const response = await fetchresourseapicall();
      console.log("response", response);
      if (response.success) {
        dispatch(setLoader(false));
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
        {/* <Sidebar /> */}
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
