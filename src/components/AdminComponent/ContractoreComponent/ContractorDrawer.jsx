import {Drawer} from "@mui/material";
import React from "react";
import {Grid, Box, Typography, Container} from "@mui/material";
import moment from "moment";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {getContractor} from "../../../redux/slices/ContractorSlice/contractorSlice";

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
      FirstName: "",
      LastName: "",
      Email: "",
      JoiningDate: "",
      Address: "",
      Phone: "",
      Designation: "",
    },
    onSubmit: async (values) => {
      // const formattedDate = moment(values.Created_Date).format("DD/MM/YYYY");
      // const formattedTime = time;
      // const data = {
      //   ...values,
      //   Created_Date: formattedDate,
      //   Created_Time: formattedTime,
      // };
      const formattedDate = moment(values.JoiningDate).format("DD/MM/YYYY");

      const data = {
        ...values,
        JoiningDate: formattedDate,
      };

      ContractorHandleSubmit(data);
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
                      labelText="Contractor FirstName"
                      {...formik.getFieldProps("FirstName")}
                      placeholder={"Please enter your FirstName"}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Contractor LastName"
                      {...formik.getFieldProps("LastName")}
                      placeholder={"Please enter your LastName"}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Contractor Email"
                      {...formik.getFieldProps("Email")}
                      type="email"
                      placeholder={"Please enter your Email"}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Contractor Phone"
                      type="text"
                      {...formik.getFieldProps("Phone")}
                      placeholder={"Please enter your Phone"}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Contractor JoiningDate"
                      type="date"
                      {...formik.getFieldProps("Joining_Date")}
                      placeholder={"Please enter your Joining_Date"}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Contractor Designation"
                      type="text"
                      {...formik.getFieldProps("Designation")}
                      placeholder={"Please enter your Designation"}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Contractor Address"
                      type="text"
                      {...formik.getFieldProps("Address")}
                      placeholder={"Please enter your Address"}
                    />
                  </Grid>
                  {/* <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Profile Image"
                      onChange={(event) => {
                        formik.setFieldValue(
                          "Profile_Image",
                          event.currentTarget.files[0]
                        );
                      }}
                      type="file"
                      placeholder={"Please enter your  Image"}
                    />
                  </Grid> */}
                  <Grid item xs={12} sm={6}>
                    <Input
                      labelText="Contractor Password"
                      {...formik.getFieldProps("Password")}
                      placeholder={"Please enter Contractor Password"}
                    />
                  </Grid>
                  {/* <Grid item xs={12} sm={6}>
                    <TextField
                      select
                      {...formik.getFieldProps("managerId")}
                      placeholder="Select Manager *"
                    >
                      <option value="">
                        <em>Select Manager</em>
                      </option>
                      {managers.map((manager) => (
                        <option key={manager.id} value={manager.id}>
                          {manager.name}
                        </option>
                      ))}
                    </TextField>
                  </Grid> */}
                  <Grid item xs={12}>
                    <Button type={"submit"}>Add Contractor</Button>
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
