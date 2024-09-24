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
  const [iscontractor, setcontractor] = useState([]);
  console.log(iscontractor, "contractor");
  const getallcontractor = async () => {
    try {
      dispatch(setLoader(true));
      const response = await fetchcontractorapicall();
      if (response.success) {
        dispatch(setLoader(false));
        setcontractor(response.result);
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
              <TableCell> Phone Number</TableCell>
              <TableCell> Joining Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {iscontractor?.map((item, index) => {
              return (
                <TableRow>
                  <TableCell key={item.Contractor_Id}>{index + 1}</TableCell>
                  <TableCell>{item?.Contractor_FirstName}</TableCell>
                  <TableCell>{item?.Contaractor_LastName}</TableCell>
                  <TableCell>{item?.Contractor_Number}</TableCell>
                  <TableCell>{item?.Created_Date}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ContractorPage;
