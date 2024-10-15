import React, {lazy, Suspense, useEffect} from "react";
import {Helmet} from "react-helmet-async";
import {useDispatch} from "react-redux";
import {registerauth} from "../../apiservice/auth";
import toast from "react-hot-toast";
import {setLoader} from "../../redux/slices/loaderSlice";
import {useNavigate} from "react-router-dom";
import Loader from "../../common/Loader";
import {Container} from "@mui/system";
import {Grid} from "@mui/material";
import rgistericon from "../../assest/icons/authicons/registerbg.png";
const SignUpForm = lazy(() =>
  import("../../components/AuthComponent/SignUp/SignUpForm")
);

const SiginUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    console.log(values);
    try {
      dispatch(setLoader(true));
      const response = await registerauth(values);
      console.log(response, "asdfalsdfjl");
      if (response?.data?.success) {
        dispatch(setLoader(false));
        toast.success(response?.data?.message);
        navigate("/login");
      } else {
        console.log(response);
      }
      dispatch(setLoader(false));
      navigate("/login");
    } catch (error) {
      dispatch(setLoader(false));
      toast.error(error?.response?.data?.message);
      navigate("/signup");
    }
  };

  // check authentication
  const isAuth = () => {
    if (sessionStorage.getItem("token")) {
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    isAuth();
  }, [0]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Helmet>
          <title>Sign Up</title>
        </Helmet>
        <div className="Register_wrapper">
          <Container>
            <div className="Register_box">
              <Grid container spacing={2}>
                <Grid
                  item
                  md={6}
                  xs={12}
                  sm={12}
                  lg={6}
                  sx={{display: {xs: "none", md: "block"}}}
                >
                  <div className="Register_LeftSide">
                    <img src={rgistericon} alt="" srcset="" />
                  </div>
                </Grid>
                <Grid item md={6} xs={12} sm={12} lg={6}>
                  <div className="Register_RightSide">
                    <div className="Register_title">
                      <h1>Resitration Form</h1>
                    </div>
                    <SignUpForm hsubmit={handleSubmit} />
                  </div>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </Suspense>
    </>
  );
};

export default SiginUp;
