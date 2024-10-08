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
import {useDispatch, useSelector} from "react-redux";
import {setLoader} from "../../../../redux/slices/loaderSlice";
import {
  addDepartmentapicall,
  fetchDepartmentapicall,
} from "../../../../apiservice/admin/departmentapiservice";
import {setDepartment} from "../../../../redux/slices/DepartmentSlice/DepartmentSlice";

function DepartmentPages() {
  const dispatch = useDispatch();
  const [IsOpen, setIsOpen] = useState(false);

  const department = useSelector((state) => state.department.departmentvalues);
  console.log(department, "department");

  const fetchdepartmenthandler = async () => {
    try {
      dispatch(setLoader(true));

      const response = await fetchDepartmentapicall();
      if (response.success) {
        console.log(response.result);
        dispatch(setLoader(false));
        dispatch(setDepartment(response.result));
      }
    } catch (error) {
      dispatch(setLoader(false));

      console.log(error?.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      Department_Name: "",
    },
    onSubmit: async (value) => {
      try {
        dispatch(setLoader(true));

        const response = await addDepartmentapicall(value);
        if (response.success) {
          console.log(response, "response");
          dispatch(setLoader(false));
        }

        formik.resetForm();
        setIsOpen(false);
      } catch (error) {
        dispatch(setLoader(false));
      }
    },
  });

  React.useEffect(() => {
    fetchdepartmenthandler();
  }, [0]);

  return (
    <>
      <Button onclick={() => setIsOpen(true)}>Add Department</Button>
      {IsOpen && (
        <Drawer open={IsOpen} anchor="right" onClose={() => setIsOpen(false)}>
          <Container maxWidth="sm">
            <form onSubmit={formik.handleSubmit}>
              <Grid Container spacing={2}>
                <Grid item sm={12} xs={12}>
                  <Input
                    labelText={"Department Name"}
                    placeholder="please enter Department Name"
                    {...formik.getFieldProps("Department_Name")}
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

      {/* deaprtment table */}
      <TableContainer component={Paper}>
        <Table md={{minWidth: 400}} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Role ID</TableCell>
              <TableCell align="left">Role Name</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {department?.map((item, index) => {
              return (
                <TableRow>
                  <TableCell key={item.Department_Id}>{index + 1}</TableCell>
                  <TableCell>{item.Department_Name}</TableCell>
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

export default DepartmentPages;
