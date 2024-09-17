import React, { useEffect, useState } from "react";
import CompanyAddDrawer from "../../../../components/AdminComponent/Company/CompanyAddDrawer";
import Button from "../../../../common/Button";
import { useDispatch } from "react-redux";
import { setLoader } from "../../../../redux/slices/loaderSlice";
import { Table } from "@mui/material";

function CompanyPage() {
  const [IsOpen, setOpen] = useState(false);

  const dispatch = useDispatch();

  const fetchcompanyfunction = async () => {
    try {
      // const response = await
    } catch (error) {
      dispatch(setLoader(false));
    }
  };

  useEffect(() => {
    fetchcompanyfunction();
  }, [dispatch]);

  return (
    <div>
      <Button onclick={() => setOpen(true)}>Edit Company</Button>
      {IsOpen && <CompanyAddDrawer IsOpen={IsOpen} setOpen={setOpen} />}

      <Table></Table>
    </div>
  );
}

export default CompanyPage;
