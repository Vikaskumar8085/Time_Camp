import { Drawer, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import Button from "../../../common/Button";
import Input from "../../../common/Input/Input";
import { GetDepartmentFunc } from "../../../redux/slices/Department/DepartmentSlice";
import {
  validateDepName,
  validateDesigName,
  validateRemark,
} from "./DepartmentValidation";

function DepartmentDrawer({
  DEdithandle,
  IsOpen,
  setOpen,
  DItems,
  DephandleSubmit,
}) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      Dep_Name: DItems !== null ? DItems.Dep_Name : "",
      Remark: DItems !== null ? DItems.Remark : "",
    },
    validate: (values) => {
      const errors = {};
      // Validate Dep_Name field
      const depNameError = validateDepName(values.Dep_Name);
      if (depNameError) {
        errors.Dep_Name = depNameError;
      }
      // Validate Remark field
      const remarkError = validateRemark(values.Remark);
      if (remarkError) {
        errors.Remark = remarkError;
      }
      return errors;
    },
    onSubmit: (value) => {
      if (DItems !== null) {
        DEdithandle(value);
      } else {
        DephandleSubmit(value);
      }
    },
  });

  return (
    <>
      <Drawer
        anchor="right"
        open={IsOpen}
        onClose={() => {
          setOpen(false);
          dispatch(GetDepartmentFunc(null));
        }}
      >
        <div className="Designation_Form">
          <Container component="main" maxWidth="sm">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                mt: 2,
              }}
            >
              <div className="clientDrawer_title">
                <Typography variant="h6" component={"h1"}>
                  {DItems !== null ? "Edit Department" : "Add Department"}
                </Typography>
              </div>
              {/* <Box component="form" sx={{ mt: 0 }}> */}
              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Department Name"
                      {...formik.getFieldProps("Dep_Name")}
                      placeholder={"Please enter your Department Name"}
                    />{" "}
                    {formik.errors.Dep_Name && formik.touched.Dep_Name && (
                      <div
                        className="error-message"
                        style={{
                          color: "red",
                          fontSize: "12px",
                          marginTop: "4px",
                          fontFamily: "Arial, sans-serif",
                        }}
                      >
                        {formik.errors.Dep_Name}
                      </div>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Remark"
                      {...formik.getFieldProps("Remark")}
                      placeholder={"Please enter Remarks"}
                    />
                    {formik.errors.Remark && formik.touched.Remark && (
                      <div
                        className="error-message"
                        style={{
                          color: "red",
                          fontSize: "12px",
                          marginTop: "4px",
                          fontFamily: "Arial, sans-serif",
                        }}
                      >
                        {formik.errors.Remark}
                      </div>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <Button type={"submit"}>
                      {DItems !== null ? "Update" : "Submit"}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Container>
        </div>
      </Drawer>
    </>
  );
}

export default DepartmentDrawer;
