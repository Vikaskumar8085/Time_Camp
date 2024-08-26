import React from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { verifyMail } from "../apiservice/auth";
import Button from "../common/Button";
import Lottie from "react-lottie-player";
import verifyEmail from "../assest/lollitejson/VerifyEmail.json";
import { setLoader } from "../redux/slices/loaderSlice";
import TButton from "../common/TButton";

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

  return (
    <>
      <div className="verify_container">
        <section className="verify_box">
          <div className="verify_gif">
            <Lottie
              loop
              animationData={verifyEmail}
              play
              style={{ width: 150, height: 150, overflow: "hidden" }}
            />
          </div>

          <article className="verify">
            <h1> Your email has been verified</h1>
            <p>Your email address has been verified. please go on login page</p>
            <Button id="one">
              <Link to="/login">Go to Login</Link>
            </Button>
          </article>
        </section>
      </div>
    </>
  );
}

export default VerifyToken;
