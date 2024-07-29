import React from "react";
import Layout from "../../common/dashboard/Layout";
import Proutes from "../../common/Proutes";
import TabComponent from "../../common/TabComponent";

function Profile() {
  return (
    <>
      <Proutes>
        <Layout>
          <TabComponent/>
        </Layout>
      </Proutes>
    </>
  );
}

export default Profile;
