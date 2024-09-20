import React, { useEffect, useState } from "react";
import CompanyAddDrawer from "../../../../components/AdminComponent/Company/CompanyAddDrawer";
import Button from "../../../../common/Button";
import { useDispatch } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { setLoader } from "../../../../redux/slices/loaderSlice";
import { getcompanyapicall } from "../../../../apiservice/admin/companyapicall";

function CompanyPage() {
  const [IsOpen, setOpen] = useState(false);
  const [iscompanydata, setiscompanydata] = useState([]);
  const dispatch = useDispatch();

  const fetchcompanyfunction = async () => {
    try {
      const response = await getcompanyapicall();
      console.log(response, "c");
      if (response?.success) {
        setiscompanydata(response?.companydata);
      }
    } catch (error) {
      dispatch(setLoader(false));
    }
  };

  useEffect(() => {
    fetchcompanyfunction();
  }, [dispatch]);

  return (
    <div>
      {/* <Button onclick={() => setOpen(true)}>Edit Company</Button> */}
      {IsOpen && <CompanyAddDrawer IsOpen={IsOpen} setOpen={setOpen} />}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Company Name</TableCell>
              <TableCell>Company website</TableCell>
              <TableCell>Client Email</TableCell>
              <TableCell>Employees </TableCell>
              <TableCell>Established Date</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Postal Code</TableCell>
              <TableCell>Tex Number</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{iscompanydata?.Company_Name}</TableCell>
              <TableCell>{iscompanydata?.CompanyWesite}</TableCell>
              <TableCell>{iscompanydata?.Company_Email}</TableCell>
              <TableCell>{iscompanydata?.Employee_No}</TableCell>
              <TableCell>{iscompanydata?.Established_date}</TableCell>
              <TableCell>{iscompanydata?.Phone}</TableCell>
              <TableCell>{iscompanydata?.Postal_Code}</TableCell>
              <TableCell>{iscompanydata?.Tex_Number}</TableCell>
              <TableCell>
                <button>Edit</button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CompanyPage;
