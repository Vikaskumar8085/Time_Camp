import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setLoader } from "../redux/slices/loaderSlice";
import { useDispatch } from "react-redux";
import { fetchCompanyapicall } from "../apiservice/admin/companyapicall";

function Proutes({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (IsCompany === true) {
  //     window.location.href = "/company";
  //   }
  // }, [0]);

  const GetCompany = async () => {
    console.log("hllo??????????????????????????????");
    try {
      dispatch(setLoader(true));
      const response = await fetchCompanyapicall();
      console.log("response company", response?.data);
      if (response?.success) {
        dispatch(setLoader(false));
        console.log(response, "response company");
        localStorage.setItem("company", response?.companydata);
      }
    } catch (error) {
      dispatch(setLoader(false));
    }
  };

  useEffect(() => {
    GetCompany();
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [0]);

  return <>{children}</>;
}

export default Proutes;
