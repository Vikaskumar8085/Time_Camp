import React from "react";
import Layout from "../../common/dashboard/Layout";
import Proutes from "../../common/Proutes";
import Button from "../../common/Button";
import EmployeeDrawer from "../../components/AdminComponent/EmployeeComponent/EmployeeDrawer";
import TabComp from "../../common/TabComp";

function Employee() {
  const [IsOpen, setOpen] = React.useState(false);

  const tabsheadr = [{ title: "Employee" }, { title: "Employee Details" }];
  const Tabsbody = [
    {
      content: (
        <>
          <section className="Employee_wrapper">
            <Button onclick={() => setOpen(true)}>add Employee</Button>
            {IsOpen && <EmployeeDrawer IsOpen={IsOpen} setOpen={setOpen} />}
          </section>
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
export default Employee;
