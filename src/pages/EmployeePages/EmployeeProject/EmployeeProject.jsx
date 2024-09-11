import React from "react";
import { Suspense } from "react";
import Layout from "../../../common/dashboard/Layout";
import Loader from "../../../common/Loader";
import Proutes from "../../../common/Proutes";

function EmployeeProject() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Proutes>
          <Layout>Employee Project</Layout>
        </Proutes>
      </Suspense>
    </>
  );
}

export default EmployeeProject;
