import React from "react";
import TabComp from "../../common/TabComp";
import Proutes from "../../common/Proutes";
import Layout from "../../common/dashboard/Layout";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Button from "../../common/Button";
import ContractorDrawer from "../../components/AdminComponent/ContractoreComponent/ContractorDrawer";

function Contractor() {
  const [IsOpen, setOpen] = React.useState(false);
  const rows = [
    { name: "John Doe", age: 28, city: "New York" },
    { name: "Jane Smith", age: 34, city: "Los Angeles" },
    { name: "Emily Johnson", age: 22, city: "Chicago" },
  ];

  const tabsheadr = [
    { title: "Contractor" },
    { title: "Active Contractor" },
    { title: "In Active Contractor" },
  ];
  const Tabsbody = [
    {
      content: (
        <>
          <section className="admin_wrapper">
            <Button onclick={() => setOpen(true)}>add Contractor</Button>
            {IsOpen && <ContractorDrawer IsOpen={IsOpen} setOpen={setOpen} />}
          </section>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Age</TableCell>
                  <TableCell>City</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.age}</TableCell>
                    <TableCell>{row.city}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ),
    },
    {
      content: (
        <>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
            aspernatur eligendi culpa accusantium quos quisquam facere facilis
            suscipit ipsum, ratione placeat unde distinctio alias, dolor porro
            id! Reprehenderit, aliquid. Doloremque.
          </p>
        </>
      ),
    },
  ];
  return (
    <>
      <Proutes>
        <Layout>
          <TabComp Tabsheader={tabsheadr} TabsBody={Tabsbody} />
        </Layout>
      </Proutes>
    </>
  );
}

export default Contractor;
