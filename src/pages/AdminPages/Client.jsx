import React from "react";
import Layout from "../../common/dashboard/Layout";
import Proutes from "../../common/Proutes";
import Button from "../../common/Button";
import ClientDrawer from "../../components/AdminComponent/Clientcomponent/ClientDrawer";

function Client() {
  const [IsOpen, setOpen] = React.useState(false);

  return (
    <>
      <Proutes>
        <Layout>
          <section className="client_wrapper">
            <Button onclick={() => setOpen(true)}>add client</Button>
            {IsOpen && <ClientDrawer IsOpen={IsOpen} setOpen={setOpen} />}
          </section>
        </Layout>
      </Proutes>
    </>
  );
}

export default Client;
