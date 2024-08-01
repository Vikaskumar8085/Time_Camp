import React from "react";
import Layout from "../../common/dashboard/Layout";
import Proutes from "../../common/Proutes";
import Button from "../../common/Button";
import AdminDrawer from "../../components/AdminComponent/adminComp/AdminDrawer";
import TabComp from "../../common/TabComp";

function Adminpage() {
  const [IsOpen, setOpen] = React.useState(false);
  const tabsheadr = [{ title: "Admin Dashboard" }, { title: "Admin Details" }];
  const Tabsbody = [
    {
      content: (
        <>
          <section className="admin_wrapper">
            <Button onclick={() => setOpen(true)}>add admin</Button>
            {IsOpen && <AdminDrawer IsOpen={IsOpen} setOpen={setOpen} />}
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

export default Adminpage;
