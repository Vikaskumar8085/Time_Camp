import { Box, Container, Drawer, Grid, Typography } from "@mui/material";
import React from "react";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { getDesignation } from "../../../redux/slices/Designation/DesignationSlice";

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
                  </Grid>
                  <Grid item xs={12}>
                    <Button type={"submit"}>Submit</Button>
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
