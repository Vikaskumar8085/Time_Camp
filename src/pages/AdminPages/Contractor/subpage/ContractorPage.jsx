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
import toast from "react-hot-toast";
import {useState} from "react";
import ContractorDrawer from "../../../../components/AdminComponent/ContractoreComponent/ContractorDrawer";
import {setLoader} from "../../../../redux/slices/loaderSlice";
import {useDispatch, useSelector} from "react-redux";
import {
  addcontractorapicall,
  fetchcontractorapicall,
} from "../../../../apiservice/admin/contractorapiservice";
import {useEffect} from "react";
import {setContractor} from "../../../../redux/slices/ContractorSlice/contractorSlice";
import { Link } from "react-router-dom";

function ContractorPage() {
  const dispatch = useDispatch();
  const [IsOpen, setOpen] = useState(false);
  const fetchcontractor = useSelector(
    (state) => state.contractor.contractorValues
  );
  console.log(fetchcontractor, "fetchcontractor");

  // contractor handle submit

  const ContractorHandleSubmit = async (values) => {
    try {
      dispatch(setLoader(true));
      const response = await addcontractorapicall(values);
      if (response.success) {
        dispatch(setLoader(false));
        toast.success(response?.message);
      }
    } catch (error) {
      dispatch(setLoader(false));
      toast.error(error?.response?.error?.message);
      console.log(error?.message);
    }
  };

  const getallcontractor = async () => {
    try {
      dispatch(setLoader(true));
      const response = await fetchcontractorapicall();
      console.log(response, "contracotr");
      if (response.success) {
        dispatch(setLoader(false));
        // setcontractor(response.result);
        dispatch(setContractor(response.result));
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
      {IsOpen && (
        <ContractorDrawer
          IsOpen={IsOpen}
          setOpen={setOpen}
          ContractorHandleSubmit={ContractorHandleSubmit}
        />
      )}

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
            {fetchcontractor?.map((item, index) => {
              return (
                <TableRow>
                  <TableCell key={item.EmployeeId}>{index + 1}</TableCell>
                  <TableCell>{item?.FirstName}</TableCell>
                  <TableCell>{item?.LastName}</TableCell>
                  <TableCell>{item?.Email}</TableCell>
                  <TableCell>
                    <Link to={`/contractorinfo/${item?.EmployeeId}`}>view</Link>
                  </TableCell>
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
