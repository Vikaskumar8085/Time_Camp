import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setLoader} from "../../../../redux/slices/loaderSlice";
import Inactivecontractorcomponent from "../../../../components/AdminComponent/ContractoreComponent/Inactivecontractorcomponent";
import {setInactiveContractor} from "../../../../redux/slices/ContractorSlice/contractorSlice";
import {fetchinactivecontractorapicall} from "../../../../apiservice/admin/contractorapiservice";

function InActiveContractorpage() {
  const dispatch = useDispatch();
  const fetchinactivecontractorhandler = async () => {
    try {
      dispatch(setLoader(true));
      const repsonse = await fetchinactivecontractorapicall();
      if (repsonse.success) {
        dispatch(setInactiveContractor(repsonse.result));
        dispatch(setLoader(false));
      }
    } catch (error) {
      dispatch(setLoader(false));
      console.log(error?.message);
    }
  };

  useEffect(() => {
    fetchinactivecontractorhandler();
  }, [0]);

  return (
    <>
      <Inactivecontractorcomponent />
    </>
  );
}

export default InActiveContractorpage;
