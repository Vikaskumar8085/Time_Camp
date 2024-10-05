import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoader } from "../../../../redux/slices/loaderSlice";
import Activecontractorcomponent from "../../../../components/AdminComponent/ContractoreComponent/Activecontractorcomponent";

function ActiveContractorpage() {
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

  return (
    <>
      <Activecontractorcomponent />
    </>
  );
}

export default ActiveContractorpage;
