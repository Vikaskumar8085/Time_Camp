import React from "react";
import { Suspense } from "react";
import Layout from "../../../common/dashboard/Layout";
import Loader from "../../../common/Loader";
import Proutes from "../../../common/Proutes";

function EmployeeDashboard() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Proutes>
          <Layout>Employee Dashboard</Layout>
        </Proutes>
      </Suspense>
    </>
  );
}

export default EmployeeDashboard;
