import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {setLoader} from "../redux/slices/loaderSlice";
import {useDispatch} from "react-redux";
import {fetchCompanyapicall} from "../apiservice/admin/companyapiservice";

function Proutes({children}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const GetCompany = async () => {
    try {
      dispatch(setLoader(true));
      const response = await fetchCompanyapicall();
      if (response?.success) {
        dispatch(setLoader(false));
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
