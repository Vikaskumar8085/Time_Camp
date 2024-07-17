import React from "react";
import { setLoader } from "../../redux/slices/loaderSlice";
import { useDispatch } from "react-redux";
import Button from "../../common/Button";
import Proutes from "../../common/Proutes";
import Layout from "../../common/dashboard/Layout";

function Dashboard() {
  return <Proutes>
    <Layout>
      dashbaord
    </Layout>
  </Proutes>;
}

export default Dashboard;
