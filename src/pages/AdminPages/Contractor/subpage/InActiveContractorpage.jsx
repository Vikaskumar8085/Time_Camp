import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoader } from "../../../../redux/slices/loaderSlice";
import Inactivecontractorcomponent from "../../../../components/AdminComponent/ContractoreComponent/Inactivecontractorcomponent";

function InActiveContractorpage() {
  const dispatch = useDispatch();
  const fetchactivecontractor = async () => {
    try {
      dispatch(setLoader(true));
      dispatch(setLoader(false));
    } catch (error) {
      dispatch(setLoader(false));
      console.log(error?.message);
    }
  };

  useEffect(() => {
    fetchactivecontractor();
  }, [0]);

  return <>
  <Inactivecontractorcomponent/>
  </>;
}

export default InActiveContractorpage;
