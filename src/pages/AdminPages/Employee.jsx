import React from "react";
import Layout from "../../common/dashboard/Layout";
import Proutes from "../../common/Proutes";
import Button from "../../common/Button";
import EmployeeDrawer from "../../components/AdminComponent/EmployeeComponent/EmployeeDrawer";

function Employee() {
  const [IsOpen, setOpen] = React.useState(false);

  return (
    <>
      <Proutes>
        <Layout>
          <section className="Employee_wrapper">
            <Button onclick={() => setOpen(true)}>add Employee</Button>
            {IsOpen && <EmployeeDrawer IsOpen={IsOpen} setOpen={setOpen} />}
          </section>
        </Layout>
      </Proutes>
    </>
  );
}
export default Employee;
