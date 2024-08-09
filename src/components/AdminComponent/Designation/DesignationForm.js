import { Box, Container, Drawer, Grid, Typography } from "@mui/material";
import React from "react";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { GetDepartmentFunc } from "../../../redux/slices/Department/DepartmentSlice";
import { getDesignation } from "../../../redux/slices/Designation/DesignationSlice";
import { validateDesignation } from "./DesignationValidation";

function DesignationForm({
  EdithandleSubmit,
  IsOpen,
  setOpen,
  DhandleSubmit,
  Items,
}) {
  console.log(Items, "designation drawer");
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      Desig_Name: Items !== null ? Items.Desig_Name : "",
    },
    validate: (values) => {
      const errors = {};
      const desigNameError = validateDesignation(values.Desig_Name);
      if (desigNameError) {
        errors.Desig_Name = desigNameError;
      }
      return errors;
    },
    onSubmit: (values) => {
      if (Items !== null) {
        EdithandleSubmit(values);
      } else {
        DhandleSubmit(values);
      }
    },
  });

  return (
    <>
      <Drawer
        open={IsOpen}
        anchor="right"
        onClose={() => {
          setOpen(false);
          dispatch(getDesignation(null));
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
                  {Items !== null ? "Edit Designation " : "Add Designation"}
                </Typography>
              </div>
              {/* <Box component="form" sx={{ mt: 0 }}> */}
              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Input
                      labelText="Designation Name"
                      {...formik.getFieldProps("Desig_Name")}
                      placeholder={"Please enter your password"}
                    />
                    {formik.errors.Desig_Name && formik.touched.Desig_Name && (
                      <div
                        style={{
                          color: "red",
                          fontSize: "12px",
                          marginTop: "4px",
                          fontFamily: "Arial, sans-serif",
                        }}
                      >
                        {formik.errors.Desig_Name}
                      </div>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <Button type={"submit"}>
                      {Items !== null ? "Update Designation" : "Submit"}
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

export default DesignationForm;
