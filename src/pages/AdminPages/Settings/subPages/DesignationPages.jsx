import {
  Drawer,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
} from "@mui/material";
import {Container} from "@mui/system";
import React, {useState} from "react";
import {useFormik} from "formik";
import Button from "../../../../common/Button";
import Input from "../../../../common/Input/Input";
import {
  addDesignationapicall,
  fetchDesignationapicall,
} from "../../../../apiservice/admin/designationapiservice";
import {useDispatch, useSelector} from "react-redux";
import {setLoader} from "../../../../redux/slices/loaderSlice";
import {setDesignation} from "../../../../redux/slices/DesignationSlice/DesignationSlice";

function DesignationPages() {
  const [IsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const designationdata = useSelector(
    (state) => state.designation.designationvalues
  );

  console.log(designationdata, "destingation data");

  const fetchDesignationhanlder = async () => {
    try {
      dispatch(setLoader(true));
      const response = await fetchDesignationapicall();
      if (response.success) {
        console.log(response, "respnse");
        dispatch(setDesignation(response.result));
        dispatch(setLoader(false));
      }
    } catch (error) {
      dispatch(setLoader(false));
      console.log(error?.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      Designation_Name: "",
    },
    onSubmit: async (value) => {
      try {
        dispatch(setLoader(true));

        const response = await addDesignationapicall(value);
        if (response.success) {
          dispatch(setLoader(false));
          console.log(response, "response departmetn");
        }
      } catch (error) {
        dispatch(setLoader(false));
        console.log(error?.message);
      }
    },
  });

  React.useEffect(() => {
    fetchDesignationhanlder();
  }, [0]);

  return (
    <>
      <div>
        <Button onclick={() => setIsOpen(true)}>Add Designation</Button>
        {IsOpen && (
          <Drawer open={IsOpen} anchor="right" onClose={() => setIsOpen(false)}>
            <Container maxWidth="sm">
              <form onSubmit={formik.handleSubmit}>
                <Grid Container spacing={2}>
                  <Grid item sm={12} xs={12}>
                    <Input
                      labelText={"Designation Name"}
                      placeholder="please enter Designation Name"
                      {...formik.getFieldProps("Designation_Name")}
                    />
                  </Grid>
                  <Grid item sm={12} xs={12}>
                    <Button>Add Designation</Button>
                  </Grid>
                </Grid>
              </form>
            </Container>
          </Drawer>
        )}
      </div>
      <TableContainer component={Paper}>
        <Table md={{minWidth: 400}} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Role ID</TableCell>
              <TableCell align="left">Role Name</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {designationdata?.map((item, index) => {
              return (
                <TableRow>
                  <TableCell key={item.Designation_Id}>{index + 1}</TableCell>
                  <TableCell>{item.Designation_Name}</TableCell>
                  <TableCell>edit</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default DesignationPages;
