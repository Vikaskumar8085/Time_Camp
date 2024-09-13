import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button";
import { setLoader } from "../../../redux/slices/loaderSlice";
import { EditUserApiCall } from "../../../apiservice/auth";
import toast from "react-hot-toast";
import "./Editform.scss";
function EditForm() {
  const dispatch = useDispatch();
  const GetUserData = useSelector((state) => state.auth.values);

  const formik = useFormik({
    initialValues: {
      FirstName: GetUserData?.message?.FirstName || "",
      LastName: GetUserData?.message?.LastName,
      Email: GetUserData?.message?.Email,
      Photo: GetUserData?.message?.Photo,
    },
    onSubmit: async (values) => {
      try {
        dispatch(setLoader(true));
        const EditUserResponse = await EditUserApiCall(values);
        if (EditUserResponse?.data?.success) {
          window.location.href = "/Profile";
          dispatch(setLoader(false));
          toast.success(EditUserResponse?.data?.message);
        }

        formik.resetForm();
      } catch (error) {
        dispatch(setLoader(false));
        console.log(error?.response?.data?.message);
      }
    },
  });

  return (
    <div className="edit_form">
      <form onSubmit={formik.handleSubmit}>
        <Input
          labelText={"First Name"}
          type="text"
          placeholder="Please enter your name"
          autocomplete="off"
          {...formik.getFieldProps("FirstName")}
        />
        {formik.touched.FirstName && formik.errors.FirstName ? (
          <div style={{ color: "red", marginTop: "5px" }}>
            {formik.errors.FirstName}
          </div>
        ) : null}
        <Input
          labelText={"Last Name"}
          type="text"
          placeholder={"Please enter your last name"}
          autocomplete="off"
          {...formik.getFieldProps("LastName")}
        />
        {formik.touched.LastName && formik.errors.LastName ? (
          <div style={{ color: "red", marginTop: "5px" }}>
            {formik.errors.LastName}
          </div>
        ) : null}
        <Input
          labelText={"Email"}
          type="Email"
          autocomplete="off"
          placeholder={"Please enter Your email"}
          {...formik.getFieldProps("Email")}
        />
        <Input
          labelText={"Picture"}
          type="file"
          autocomplete="off"
          placeholder={"Please enter Your email"}
        />
        {/* <img
          src={
            "https://lh3.googleusercontent.com/a/ACg8ocIXj8A3lRnmjzTMWiPhwWknZ-r39QXUORgrZyDGmSfjA8vwgQ=s96-c"
          }
          // style={{ height: "200px ", width: "200px",margin:"auto auto",borderRadius:"50%" }}
          alt=""
        /> */}
        {formik.touched.Email && formik.errors.Email ? (
          <div style={{ color: "red", marginTop: "5px" }}>
            {formik.errors.Email}
          </div>
        ) : null}

        <Button type={"submit"}>Submit</Button>
      </form>
    </div>
  );
}

export default EditForm;
