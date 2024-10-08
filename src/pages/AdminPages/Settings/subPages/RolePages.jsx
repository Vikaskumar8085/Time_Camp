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
  addroleapicall,
  fetroleapicall,
} from "../../../../apiservice/admin/roleapiservice";
import {useDispatch, useSelector} from "react-redux";
import {setLoader} from "../../../../redux/slices/loaderSlice";
import {setRoles} from "../../../../redux/slices/roleslice/roleSlice";
function RolePages() {
  const dispatch = useDispatch();

  const [IsOpen, setIsOpen] = useState(false);

  const roledata = useSelector((state) => state.role.roleValues);
  console.log(roledata, "roledata ");

  // fetch role

  const fetchrolehandler = async () => {
    try {
      dispatch(setLoader(true));
      const response = await fetroleapicall();
      if (response.success) {
        dispatch(setLoader(false));
        dispatch(setRoles(response.result));
        console.log(response.result);
      }
    } catch (error) {
      console.log(error?.message);
    }
  };

  // fetch role

  const formik = useFormik({
    initialValues: {
      RoleName: "",
    },
    onSubmit: async (value) => {
      try {
        dispatch(setLoader(true));
        const response = await addroleapicall(value);
        if (response.success) {
          dispatch(setLoader(false));
          console.log(response);
          fetchrolehandler()
        }
        formik.resetForm();
        setIsOpen(false);
      } catch (error) {
        console.log(error?.message);
      }
    },
  });

  React.useEffect(() => {
    fetchrolehandler();
  }, [0]);

  return (
    <div>
      <Button onclick={() => setIsOpen(true)}>Add Role</Button>
      {IsOpen && (
        <Drawer open={IsOpen} anchor="right" onClose={() => setIsOpen(false)}>
          <Container maxWidth="sm">
            <form onSubmit={formik.handleSubmit}>
              <Grid Container spacing={2}>
                <Grid item sm={12} xs={12}>
                  <Input
                    labelText={"Role Name"}
                    placeholder="please enter Role Name"
                    {...formik.getFieldProps("RoleName")}
                  />
                </Grid>
                <Grid item sm={12} xs={12}>
                  <Button>Add Role</Button>
                </Grid>
              </Grid>
            </form>
          </Container>
        </Drawer>
      )}

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
            {roledata?.map((item, index) => {
              return (
                <TableRow>
                  <TableCell key={item.RoleId}>{index + 1}</TableCell>
                  <TableCell>{item.RoleName}</TableCell>
                  <TableCell>edit</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default RolePages;
