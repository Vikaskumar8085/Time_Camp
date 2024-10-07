import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setLoader} from "../../../../redux/slices/loaderSlice";
import Activecontractorcomponent from "../../../../components/AdminComponent/ContractoreComponent/Activecontractorcomponent";
import {fetchactivecontractorapicall} from "../../../../apiservice/admin/contractorapiservice";
import {setactivecontractor} from "../../../../redux/slices/ContractorSlice/contractorSlice";

function ActiveContractorpage() {
  const dispatch = useDispatch();
  const fetchactivecontractorhandler = async () => {
    try {
      dispatch(setLoader(true));
      const response = await fetchactivecontractorapicall();
      if (response.success) {
        dispatch(setLoader(false));
        dispatch(setactivecontractor(response.result));
      }
    } catch (error) {
      dispatch(setLoader(false));
      console.log(error?.message);
    }
  };

  useEffect(() => {
    fetchactivecontractorhandler();
  }, [0]);

  return (
    <>
      <Activecontractorcomponent />
    </>
  );
}

export default ActiveContractorpage;
