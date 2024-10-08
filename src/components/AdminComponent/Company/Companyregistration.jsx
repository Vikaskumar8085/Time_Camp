import {Grid} from "@mui/material";
import {useFormik} from "formik";

import React from "react";
import Button from "../../../common/Button";
import Input from "../../../common/Input/Input";

function Companyregistration({companyhandlesubmit}) {
  const formik = useFormik({
    initialValues: {
      Company_Name: "",
      Company_Email: "",
      Address: "",
      Postal_Code: "",
      Phone: "",
      Company_Logo: "",
      Employee_No: "",
      Established_date: "",
      CompanyWesite: "",
      Tex_Number: "",
    },
    onSubmit: async (values) => {
      companyhandlesubmit(values);
    },
  });

  const validate = () => {
    const errors = {};
    if (!formik.values.Company_Name) {
      errors.Company_Name = "Required";
    }
    if (!formik.values.Company_Email) {
      errors.Company_Email = "Required";
    } else if (!/\S+@\S+\.\S+/.test(formik.values.Company_Email)) {
      errors.Company_Email = "Invalid email format";
    }
    if (!formik.values.Address) {
      errors.Address = "Required";
    }
    if (!formik.values.Postal_Code) {
      errors.Postal_Code = "Required";
    }
    if (!formik.values.Phone) {
      errors.Phone = "Required";
    }
    if (!formik.values.Company_Logo) {
      errors.Company_Logo = "Required";
    }
    if (!formik.values.Employee_No) {
      errors.Employee_No = "Required";
    }
    if (!formik.values.CompanyWesite) {
      errors.CompanyWesite = "Required";
    }
    if (!formik.values.Tex_Number) {
      errors.Tex_Number = "Required";
    }
    return errors;
  };

  return (
    <>
      <div className="compnay-registration">
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item md={6} sm={12} xs={12} lg={6}>
              <Input
                labelText={"Company Name"}
                {...formik.getFieldProps("Company_Name")}
                error={Boolean(validate().Company_Name)}
                helperText={validate().Company_Name}
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12} lg={6}>
              <Input
                labelText={"Company Email"}
                {...formik.getFieldProps("Company_Email")}
                error={Boolean(validate().Company_Email)}
                helperText={validate().Company_Email}
                type="email"
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12} lg={6}>
              <Input
                labelText={"Address"}
                {...formik.getFieldProps("Address")}
                error={Boolean(validate().Address)}
                helperText={validate().Address}
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12} lg={6}>
              <Input
                labelText={"Postal Code"}
                {...formik.getFieldProps("Postal_Code")}
                error={Boolean(validate().Postal_Code)}
                helperText={validate().Postal_Code}
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12} lg={6}>
              <Input
                labelText={"Phone"}
                {...formik.getFieldProps("Phone")}
                error={Boolean(validate().Phone)}
                helperText={validate().Phone}
                type="tel"
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12} lg={6}>
              <Input
                labelText={"Company Logo URL"}
                type="file"
                {...formik.getFieldProps("Company_Logo")}
                error={Boolean(validate().Company_Logo)}
                helperText={validate().Company_Logo}
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12} lg={6}>
              <Input
                labelText={"Number of Employees"}
                {...formik.getFieldProps("Employee_No")}
                error={Boolean(validate().Employee_No)}
                helperText={validate().Employee_No}
                type="number"
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12} lg={6}>
              <Input
                type="date"
                labelText={"Established Date"}
                {...formik.getFieldProps("Established_date")}
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12} lg={6}>
              <Input
                labelText={"Company Website"}
                {...formik.getFieldProps("CompanyWesite")}
                error={Boolean(validate().CompanyWesite)}
                helperText={validate().CompanyWesite}
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12} lg={6}>
              <Input
                labelText={"Tax Number"}
                {...formik.getFieldProps("Tex_Number")}
                error={Boolean(validate().Tex_Number)}
                helperText={validate().Tex_Number}
              />
            </Grid>
            {/* <Grid item md={6} sm={12} xs={12} lg={6}>
              <Input
                labelText={"User ID (comma-separated)"}
                {...formik.getFieldProps("UserId")}
                onChange={(e) =>
                  formik.setFieldValue(
                    "UserId",
                    e.target.value.split(",").map((id) => Number(id.trim()))
                  )
                }
                value={formik.values.UserId.join(", ")}
              />
            </Grid> */}
          </Grid>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </>
  );
}

export default Companyregistration;
