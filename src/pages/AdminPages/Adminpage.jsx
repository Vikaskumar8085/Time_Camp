import React from "react";
import Layout from "../../common/dashboard/Layout";
import Proutes from "../../common/Proutes";
import Button from "../../common/Button";
import AdminDrawer from "../../components/AdminComponent/adminComp/AdminDrawer";

function Adminpage() {
  const [IsOpen, setOpen] = React.useState(false);

  return (
    <>
      <Proutes>
        <Layout>
          <section className="admin_wrapper">
            <Button onclick={() => setOpen(true)}>add admin</Button>
            {IsOpen && <AdminDrawer IsOpen={IsOpen} setOpen={setOpen} />}
          </section>
        </Layout>
      </Proutes>
    </>
  );
}

export default Adminpage;
