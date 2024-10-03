import React, {useEffect, useState} from "react";
import CompanyAddDrawer from "../../../../components/AdminComponent/Company/CompanyAddDrawer";
import Button from "../../../../common/Button";
import {useDispatch, useSelector} from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import {CiEdit} from "react-icons/ci";
import {setLoader} from "../../../../redux/slices/loaderSlice";
import {getcompanyapicall} from "../../../../apiservice/admin/companyapiservice";
import {
  setcompany,
  setSingleCompany,
} from "../../../../redux/slices/companyslice/companyslice";

function CompanyPage() {
  const [IsOpen, setOpen] = useState(false);

  const dispatch = useDispatch();
  const companydata = useSelector((state) => state.company.values);
  const CValue = useSelector((state) => state.company.singlevalues);
  console.log(CValue, "Companysingledata");

  const fetchcompanyfunction = async () => {
    try {
      const response = await getcompanyapicall();
      console.log(response, "c");
      if (response?.success) {
        dispatch(setcompany(response?.companydata));
      }
    } catch (error) {
      dispatch(setLoader(false));
    }
  };

  const handleOpne = (values) => {
    console.log(values, "values");
    setOpen(true);
    dispatch(setSingleCompany(values));
  };

  useEffect(() => {
    fetchcompanyfunction();
  }, [dispatch]);

  return (
    <div>
      {/* <Button onclick={() => setOpen(true)}>Edit Company</Button> */}
      {IsOpen && (
        <CompanyAddDrawer IsOpen={IsOpen} setOpen={setOpen} CValue={CValue} />
      )}
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
              <TableCell>{companydata?.Company_Name}</TableCell>
              <TableCell>{companydata?.CompanyWesite}</TableCell>
              <TableCell>{companydata?.Company_Email}</TableCell>
              <TableCell>{companydata?.Employee_No}</TableCell>
              <TableCell>{companydata?.Established_date}</TableCell>
              <TableCell>{companydata?.Phone}</TableCell>
              <TableCell>{companydata?.Postal_Code}</TableCell>
              <TableCell>{companydata?.Tex_Number}</TableCell>
              <TableCell>
                <CiEdit
                  style={{fontSize: "1.5em"}}
                  onClick={() => handleOpne(companydata)}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CompanyPage;
