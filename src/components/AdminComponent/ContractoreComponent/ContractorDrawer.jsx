import { Drawer } from "@mui/material";
import React from "react";
import { Grid, Box, Typography, Container } from "@mui/material";
import moment from "moment";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { getContractor } from "../../../redux/slices/ContractorSlice/contractorSlice";

function ContractorDrawer({
  IsOpen,
  setOpen,
  ContractorHandleSubmit,
  CSItems,
  UpdatecontractorhandleSubmit,
}) {
  const dispatch = useDispatch();

  const [disabled, setDisabled] = React.useState(true);
  const now = new Date();
  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, // Use 24-hour time
  });
  const time = formatter.format(now);
  const formik = useFormik({
    initialValues: {
      Contractor_Name: CSItems !== null ? CSItems.Contractor_Name : "",
      Contractor_Number: CSItems !== null ? CSItems.Contractor_Number : "",
      Person_Name: CSItems !== null ? CSItems.Person_Name : "",
      Remark: CSItems !== null ? CSItems.Remark : "",
      Created_Date:
        CSItems !== null
          ? moment(CSItems.Created_Dat).format("DD/MM/YYYY")
          : "",
      Created_Time: CSItems !== null ? CSItems.Created_Time : time,
    },
    onSubmit: async (values) => {
      const formattedDate = moment(values.Created_Date).format("DD/MM/YYYY");
      const formattedTime = time;
      const data = {
        ...values,
        Created_Date: formattedDate,
        Created_Time: formattedTime,
      };

      if (CSItems !== null) {
        UpdatecontractorhandleSubmit(data);
      } else {
        ContractorHandleSubmit(data);
      }
    },
  });

  return (
    <>
      <Drawer
        open={IsOpen}
        onClose={() => {
          setOpen(false);
          dispatch(getContractor(null));
        }}
        anchor={"right"}
      >
        <div className="ClientDrawer_box">
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
                  {CSItems !== null ? " Edit Contractor" : "Add Contractor"}
                </Typography>
              </div>
              {/* <Box component="form" sx={{ mt: 0 }}> */}
              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Contractor Name"
                      placeholder={"Please enter your Contractor Name"}
                      {...formik.getFieldProps("Contractor_Name")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Contact Number"
                      {...formik.getFieldProps("Contractor_Number")}
                      placeholder={"Please enter your Contact Number"}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Person Name"
                      {...formik.getFieldProps("Person_Name")}
                      placeholder={"Please enter Person Name "}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Remark"
                      type="text"
                      {...formik.getFieldProps("Remark")}
                      placeholder={"Please enter Remark "}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Date"
                      type="Date"
                      {...formik.getFieldProps("Created_Date")}
                      placeholder={"Please enter Date "}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Time"
                      type="Time"
                      {...formik.getFieldProps("Created_Time")}
                      placeholder={"Please enter Date "}
                      disabled={disabled}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type={"submit"}>Submit</Button>
                  </Grid>
                </Grid>
                {/* </Box> */}
              </form>
            </Box>
          </Container>
        </div>
      </Drawer>
    </>
  );
}

export default ContractorDrawer;
