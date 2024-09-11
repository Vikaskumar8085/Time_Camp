import React from "react";
import { Suspense } from "react";
import Layout from "../../../common/dashboard/Layout";
import Loader from "../../../common/Loader";
import Proutes from "../../../common/Proutes";

function SuperAdminDashboard() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Proutes>
            <Layout>
                superadmin dashboard
            </Layout>
        </Proutes>
      </Suspense>
    </div>
  );
}

export default SuperAdminDashboard;
