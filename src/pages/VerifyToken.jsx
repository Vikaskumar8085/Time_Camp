import React from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { verifyMail } from "../apiservice/auth";
import { setLoader } from "../redux/slices/loaderSlice";

function VerifyToken() {
  const token = useParams();
  const dispatch = useDispatch();

  const getVerifyMail = async () => {
    try {
      dispatch(setLoader(true));
      const response = await verifyMail(token);
      console.log(response);
      if (response?.data?.success) {
        dispatch(setLoader(false));
        toast.success(response?.data?.message);
      }
    } catch (error) {
      dispatch(setLoader(false));
      toast.success(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    getVerifyMail();
  }, [0]);

  return <div>VerifyToken</div>;
}

export default VerifyToken;
