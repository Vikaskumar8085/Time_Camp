import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Button from "../../../../common/Button";
import { useState } from "react";
import ContractorDrawer from "../../../../components/AdminComponent/ContractoreComponent/ContractorDrawer";
import { setLoader } from "../../../../redux/slices/loaderSlice";
import { useDispatch } from "react-redux";
import { fetchcontractorapicall } from "../../../../apiservice/admin/contractorapicall";
import { useEffect } from "react";
function ContractorPage() {
  const dispatch = useDispatch();
  const [IsOpen, setOpen] = useState(false);
  const [fetchcontractor, setcontractor] = useState([]);
  console.log(fetchcontractor, "fetchcontractor");
  const getallcontractor = async () => {
    try {
      console.log(
        "-------------------------- contractor ---------------------"
      );
      dispatch(setLoader(true));
      const response = await fetchcontractorapicall();
      console.log(response, "data");

      console.log(response, "[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[response");
      if (response.success) {
        dispatch(setLoader(false));
        setcontractor(response);
      }
    } catch (error) {
      dispatch(setLoader(false));
    }
  };

  useEffect(() => {
    getallcontractor();
  }, [0]);

  return (
    <div>
      <Button type="submit" onclick={() => setOpen(true)}>
        Add Contractor
      </Button>
      {IsOpen && <ContractorDrawer IsOpen={IsOpen} setOpen={setOpen} />}

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Contractor ID</TableCell>
              <TableCell>Contractor FirstName</TableCell>
              <TableCell>Contractor LastName</TableCell>
              <TableCell>Contractor Email</TableCell>
              <TableCell> Phone Number</TableCell>
              <TableCell> Joining Date</TableCell>
              <TableCell> Designation</TableCell>
              <TableCell> Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ContractorPage;
